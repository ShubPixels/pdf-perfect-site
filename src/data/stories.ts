import { storyCaptions } from "./storyCaptions";
import { storyManifest, type StoryManifestTour } from "./storyManifest";

export interface StoryPhoto {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export interface StoryTour {
  id: string;
  slug: string;
  title: string;
  dateLabel: string;
  coverImage: string;
  photos: StoryPhoto[];
}

export interface StoryDestination {
  id: string;
  slug: string;
  name: string;
  coverImage: string;
  tours: StoryTour[];
}

const galleryModules = import.meta.glob("../assets/story-galleries/*/*.jpg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryEntries = Object.entries(galleryModules).reduce<
  Record<string, Array<[string, string]>>
>((collections, [path, src]) => {
  const match = path.match(/story-galleries\/([^/]+)\//);

  if (!match) {
    return collections;
  }

  const galleryFolder = match[1];
  collections[galleryFolder] ??= [];
  collections[galleryFolder].push([path, src]);

  return collections;
}, {});

const getGalleryImages = (galleryFolder: string) => {
  const entries = galleryEntries[galleryFolder];

  if (!entries?.length) {
    throw new Error(`Missing story gallery images for "${galleryFolder}"`);
  }

  return entries
    .sort(([left], [right]) =>
      left.localeCompare(right, undefined, { numeric: true }),
    )
    .map(([, src]) => src);
};

const storyMonthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const getStoryMonthYearLabel = (sortDate: string, fallbackLabel: string) => {
  const date = new Date(`${sortDate}T00:00:00Z`);

  return Number.isNaN(date.getTime())
    ? fallbackLabel
    : storyMonthFormatter.format(date);
};

const formatVisibleStoryCaption = (
  caption: string,
  destinationName: string,
) => {
  const suffixes = [
    ` from our ${destinationName} tour.`,
    ` that made our ${destinationName} journey unforgettable.`,
    ` captured on our ${destinationName} escape.`,
    ` from a memorable ${destinationName} travel story.`,
  ];

  const matchedSuffix = suffixes.find((suffix) => caption.endsWith(suffix));

  return matchedSuffix
    ? `${caption.slice(0, -matchedSuffix.length)}.`
    : caption;
};

const buildPhotos = (
  destinationName: string,
  dateLabel: string,
  galleryFolder: string,
  images: string[],
): StoryPhoto[] =>
  images.map((src, index) => {
    const rawCaption =
      storyCaptions[galleryFolder]?.[index] ??
      `${destinationName} travel moments from ${dateLabel}.`;
    const caption = formatVisibleStoryCaption(rawCaption, destinationName);

    return {
      id: index + 1,
      src,
      alt: rawCaption,
      caption,
    };
  });

const getCoverImage = (images: string[], coverIndex: number) =>
  images[Math.min(Math.max(coverIndex, 0), images.length - 1)] ?? images[0];

const sortToursByDate = (left: StoryManifestTour, right: StoryManifestTour) =>
  right.sortDate.localeCompare(left.sortDate);

const buildTour = (
  destinationName: string,
  tour: StoryManifestTour,
): StoryTour => {
  const images = getGalleryImages(tour.galleryFolder);
  const coverImage = getCoverImage(images, tour.coverIndex);
  const dateLabel = getStoryMonthYearLabel(tour.sortDate, tour.dateLabel);

  return {
    id: tour.id,
    slug: tour.slug,
    title: tour.title,
    dateLabel,
    coverImage,
    photos: buildPhotos(
      destinationName,
      dateLabel,
      tour.galleryFolder,
      images,
    ),
  };
};

export const storyDestinations: StoryDestination[] = storyManifest.map(
  (destination) => {
    const tours = [...destination.tours]
      .sort(sortToursByDate)
      .map((tour) => buildTour(destination.name, tour));

    return {
      id: destination.id,
      slug: destination.slug,
      name: destination.name,
      coverImage: tours[0].coverImage,
      tours,
    };
  },
);

export const sortedStoryDestinations = [...storyDestinations].sort(
  (left, right) => left.name.localeCompare(right.name),
);

export const getStoryDestinationBySlug = (slug: string) =>
  storyDestinations.find((destination) => destination.slug === slug);

export const getStoryPhotoCount = (destination: StoryDestination) =>
  destination.tours.reduce((total, tour) => total + tour.photos.length, 0);
