import { Suspense, lazy, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Camera, MessageCircle } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  sortedStoryDestinations,
  type StoryDestination,
  type StoryTour,
} from "@/data/stories";

const PhotoGallery = lazy(() =>
  import("@/components/ui/photo-gallery").then((module) => ({
    default: module.PhotoGallery,
  })),
);

type CommunityVariant = "home" | "page";

interface CommunityProps {
  variant?: CommunityVariant;
  showShareCta?: boolean;
}

const HOME_SPANS = [
  "col-span-2 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
];

const PAGE_SPANS = [
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
  "col-span-1 row-span-1 md:col-span-3 md:row-span-1",
];

const getDestinationDateLabel = (destination: StoryDestination) =>
  destination.tours.length === 1 ? destination.tours[0].dateLabel : null;

const getActionLabel = (_destination: StoryDestination) => "View Gallery";

const DESTINATION_CROP_POSITIONS: Record<string, string> = {
  andaman: "center 42%",
  "assam-meghalaya": "center 38%",
  australia: "center 45%",
  "ayodhya-varanasi": "center 38%",
  bali: "center 42%",
  bhutan: "center 44%",
  dubai: "center 42%",
  kerala: "center 34%",
  "nainital-jim-corbett": "center 34%",
  nepal: "center 35%",
  oman: "center 42%",
  orissa: "center 38%",
  "scotland-london": "center 42%",
  "south-africa": "center 42%",
};

const getCoverImageStyle = (destination: StoryDestination) => ({
  objectPosition:
    destination.coverImagePosition ??
    DESTINATION_CROP_POSITIONS[destination.slug] ??
    "center 40%",
});

export const Community = ({ variant = "home", showShareCta = true }: CommunityProps) => {
  const navigate = useNavigate();
  const [selectedTour, setSelectedTour] = useState<StoryTour | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const destinations =
    variant === "home"
      ? sortedStoryDestinations.slice(0, 8)
      : sortedStoryDestinations;
  const spansPattern = variant === "home" ? HOME_SPANS : PAGE_SPANS;
  const isPage = variant === "page";

  useEffect(() => {
    if (!isPage) {
      return;
    }

    const restoreScrollY = sessionStorage.getItem("storiesRestoreScrollY");
    if (!restoreScrollY) {
      return;
    }

    sessionStorage.removeItem("storiesRestoreScrollY");
    requestAnimationFrame(() => {
      window.scrollTo({ top: Number(restoreScrollY), behavior: "instant" });
    });
  }, [isPage]);

  const openGallery = (tour: StoryTour, index = 0) => {
    setSelectedTour(tour);
    setPhotoIndex(index);
    setGalleryOpen(true);
  };

  const handleDestinationClick = (destination: StoryDestination) => {
    if (destination.tours.length === 1) {
      openGallery(destination.tours[0]);
      return;
    }

    navigate(`/stories/${destination.slug}`, {
      state: { fromStories: true, storiesScrollY: window.scrollY },
    });
  };

  return (
    <section id="community" className="py-12 sm:py-16 md:py-24 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/50 mb-4 sm:mb-6">
            <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm text-black font-medium">Real moments, Real memories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-bold text-black mb-3 sm:mb-4 px-2">
            Moments from our <span className="text-accent">Happy Travellers</span>
          </h2>

          <p className="text-black max-w-xs sm:max-w-sm md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Click on any destination to open its gallery or browse the tour batches inside it.
          </p>

          {variant === "home" && (
            <div className="flex justify-center mt-4 sm:mt-6">
              <Button
                asChild
                className="group rounded-full border border-accent bg-accent px-4 py-2 text-sm font-bold text-white shadow-[0_10px_24px_rgba(224,90,49,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[hsl(15_75%_48%)] hover:text-white hover:shadow-[0_14px_30px_rgba(224,90,49,0.34)] active:translate-y-0 active:shadow-[0_7px_16px_rgba(224,90,49,0.24)] sm:px-6 sm:py-3 sm:text-base"
              >
                <Link to="/stories">
                  View All Stories
                  <ArrowRight className="ml-1 h-3 w-3 text-white transition-transform duration-300 group-hover:translate-x-1 sm:ml-2 sm:h-4 sm:w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div
            className={`
              grid gap-3 sm:gap-4 md:gap-4 grid-flow-dense
              ${
                isPage
                  ? "grid-cols-1 auto-rows-[280px] sm:grid-cols-2 sm:auto-rows-[290px] md:grid-cols-6 md:auto-rows-[310px]"
                  : "grid-cols-2 auto-rows-[165px] sm:auto-rows-[190px] md:grid-cols-6 md:auto-rows-[150px]"
              }
            `}
          >
            {destinations.map((destination, index) => {
              const span = spansPattern[index % spansPattern.length];
              const isTall =
                variant === "home"
                  ? span.includes("row-span-3")
                  : span.includes("row-span-2");
              const destinationDateLabel = getDestinationDateLabel(destination);

              return (
                <button
                  key={destination.id}
                  onClick={() => handleDestinationClick(destination)}
                  aria-label={`${getActionLabel(destination)}: ${destination.name}`}
                  className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-border/30 bg-card text-left shadow-xl transition-all duration-300 hover:-translate-y-1 ${span}`}
                >
                  <div className="relative m-2 mb-0 min-h-0 flex-1 overflow-hidden rounded-xl">
                    <img
                      src={destination.coverImage}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      style={getCoverImageStyle(destination)}
                    />

                    <div className="absolute right-3 top-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 sm:right-4 sm:top-4">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/95 text-accent shadow-xl backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-accent group-hover:text-white sm:h-10 sm:w-10">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 px-3 py-2.5 sm:px-4 md:px-4">
                    <div className="min-w-0">
                      {destinationDateLabel && (
                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-accent/90 sm:text-[11px]">
                          {destinationDateLabel}
                        </p>
                      )}

                      <h3
                        className={`
                            font-bold text-foreground leading-tight line-clamp-2
                            ${
                              isPage
                                ? isTall
                                  ? "text-base sm:text-lg md:text-xl"
                                  : "text-sm sm:text-base md:text-lg"
                                : isTall
                                  ? "text-base sm:text-lg md:text-xl"
                                  : "text-sm sm:text-base"
                            }
                          `}
                      >
                        {destination.name}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {showShareCta && (
          <Card className="max-w-4xl mx-auto p-6 sm:p-8 md:p-12 text-center bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-dashed border-primary/30 rounded-3xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-accent/20 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3">Share Your Travel Story</h3>
            <p className="text-black mb-6 sm:mb-8 max-w-xs sm:max-w-lg mx-auto text-sm sm:text-base">
              Travelled with us? Your photos and stories inspire others. Share via WhatsApp or Instagram and get featured!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button asChild className="bg-accent text-white hover:bg-accent/90 font-bold px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-lg rounded-full">
                <a href="https://wa.link/97984j" target="_blank" rel="noopener noreferrer">
                  Share via WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10 px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-lg rounded-full"
              >
                <a href="https://www.instagram.com/suntourismpune/" target="_blank" rel="noopener noreferrer">
                  Tag us on Instagram
                </a>
              </Button>
            </div>
          </Card>
        )}
      </div>

      {selectedTour && (
        <Suspense fallback={null}>
          <PhotoGallery
            photos={selectedTour.photos}
            isOpen={galleryOpen}
            onClose={() => {
              setGalleryOpen(false);
              setSelectedTour(null);
            }}
            initialIndex={photoIndex}
          />
        </Suspense>
      )}
    </section>
  );
};
