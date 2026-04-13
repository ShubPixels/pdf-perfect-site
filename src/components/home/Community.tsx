import { Suspense, lazy, useState } from "react";
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
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
  "col-span-1 row-span-1 md:col-span-2 md:row-span-2",
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

    navigate(`/stories/${destination.slug}`);
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
              <Link to="/stories">
                <Button variant="outline" className="rounded-full px-4 py-2 sm:px-6 sm:py-3 group text-black text-sm sm:text-base">
                  View All Stories
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div className="max-w-6xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div
            className={`
              grid gap-3 sm:gap-4 md:gap-4 grid-flow-dense
              ${
                isPage
                  ? "grid-cols-1 auto-rows-[240px] sm:grid-cols-2 sm:auto-rows-[250px] md:grid-cols-6 md:auto-rows-[260px]"
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
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer text-left ${span}`}
                >
                  <img
                    src={destination.coverImage}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    style={
                      destination.coverImagePosition
                        ? { objectPosition: destination.coverImagePosition }
                        : undefined
                    }
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 md:p-5 md:p-6">
                    <div className="flex items-end justify-between gap-3 sm:gap-4">
                      <div
                        className={`min-w-0 ${
                          isPage ? "max-w-[72%] sm:max-w-[68%]" : "max-w-[70%]"
                        }`}
                      >
                        {destinationDateLabel && (
                          <p className="mb-1 text-[11px] sm:text-sm md:text-base text-white/75">
                            {destinationDateLabel}
                          </p>
                        )}

                        <h3
                          className={`
                            font-bold text-white leading-tight drop-shadow
                            ${
                              isPage
                                ? isTall
                                  ? "text-base sm:text-2xl md:text-4xl md:text-5xl"
                                  : "text-sm sm:text-lg md:text-2xl md:text-3xl"
                                : isTall
                                  ? "text-base sm:text-lg md:text-3xl md:text-4xl"
                                  : "text-sm sm:text-base md:text-xl md:text-2xl"
                            }
                          `}
                        >
                          {destination.name}
                        </h3>
                      </div>

                      <div className="shrink-0">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-accent backdrop-blur-sm sm:hidden">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </div>
                        <div className="hidden items-center gap-2 whitespace-nowrap text-accent text-sm font-medium sm:flex md:text-base">
                          <span>{getActionLabel(destination)}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
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
