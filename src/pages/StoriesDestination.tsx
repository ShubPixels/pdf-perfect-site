import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, Camera } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getStoryDestinationBySlug,
  type StoryTour,
} from "@/data/stories";

const StoriesDestination = () => {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();
  const destination = getStoryDestinationBySlug(destinationSlug || "");

  const [selectedTour, setSelectedTour] = useState<StoryTour | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const openGallery = (tour: StoryTour) => {
    setSelectedTour(tour);
    setGalleryOpen(true);
  };

  const getDestinationDescription = (tourCount: number) =>
    tourCount === 1
      ? "A visual scrapbook of scenic highlights, candid moments, and unforgettable memories from one beautifully curated departure."
      : "A visual scrapbook of scenic highlights, candid moments, and unforgettable memories gathered across multiple curated departures.";

  const getSectionEyebrow = (tourCount: number) =>
    tourCount === 1 ? "Open the gallery" : "Browse the chapters";

  const getSectionHeading = (tourCount: number) =>
    tourCount === 1
      ? "A closer look at the journey"
      : "Choose the gallery you'd like to explore";

  const getGalleryGridClasses = (tourCount: number) => {
    if (tourCount === 1) {
      return "max-w-2xl grid-cols-1";
    }

    if (tourCount === 2) {
      return "max-w-5xl md:grid-cols-2";
    }

    return "max-w-6xl md:grid-cols-2 xl:grid-cols-3";
  };

  if (!destination) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Story destination not found</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We could not find that destination story page. Head back to the stories gallery and pick another trip.
          </p>
          <Button asChild className="rounded-full px-6">
            <Link to="/stories">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <section className="container mx-auto px-4 pt-20 pb-8 md:pt-24 md:pb-12">
          <div className="max-w-6xl mx-auto">
            <Button asChild variant="ghost" className="rounded-full px-0 hover:bg-transparent mb-6 text-foreground">
              <Link to="/stories">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all stories
              </Link>
            </Button>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] items-center">
              <div className="relative overflow-hidden rounded-[2rem] border border-border/40 bg-card/80 backdrop-blur-sm p-6 sm:p-8 md:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-card via-card/90 to-primary/5" />
                <div className="relative h-full flex flex-col justify-between min-h-[320px]">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/70 border border-border/40 mb-6">
                      <Camera className="w-4 h-4 text-accent" />
                      <span className="text-sm text-foreground/80">
                        Traveller photo journal
                      </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight mb-4">
                      Moments from {destination.name}
                    </h1>

                    <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
                      {getDestinationDescription(destination.tours.length)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2.5 pt-8">
                    {[...new Set(destination.tours.map((tour) => tour.dateLabel))]
                      .slice(0, 5)
                      .map((dateLabel) => (
                        <span
                          key={dateLabel}
                          className="inline-flex items-center rounded-full border border-border/50 bg-background/70 px-3 py-1.5 text-sm text-foreground/80"
                        >
                          {dateLabel}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <div className="group relative rounded-[2rem] border border-border/40 bg-card/70 backdrop-blur-sm p-3 sm:p-4 md:p-5 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.55)]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-card via-secondary/35 to-primary/10" />
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-background/40">
                  <img
                    src={destination.heroImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-25"
                    style={
                      destination.heroImagePosition
                        ? { objectPosition: destination.heroImagePosition }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10" />
                  <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    style={
                      destination.heroImagePosition
                        ? { objectPosition: destination.heroImagePosition }
                        : undefined
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 md:pb-24">
          <div className="container mx-auto px-4">
            <div
              className={cn(
                "mx-auto",
                destination.tours.length <= 2 ? "max-w-5xl" : "max-w-6xl",
              )}
            >
              <div className="mb-8 md:mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-accent mb-2">
                    {getSectionEyebrow(destination.tours.length)}
                  </p>
                  <h2 className="text-2xl md:text-4xl font-bold text-foreground">
                    {getSectionHeading(destination.tours.length)}
                  </h2>
                </div>
              </div>

              <div
                className={cn(
                  "grid gap-6",
                  getGalleryGridClasses(destination.tours.length),
                )}
              >
                {destination.tours.map((tour) => (
                  <button
                    key={tour.id}
                    onClick={() => openGallery(tour)}
                    className="group text-left rounded-[2rem] overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm shadow-sm transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={tour.coverImage}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-black/35 backdrop-blur-sm px-3 py-2 text-white/90 text-sm">
                        <CalendarDays className="w-4 h-4 text-accent" />
                        {tour.dateLabel}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-end">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/12 backdrop-blur-sm px-4 py-2 text-accent font-medium">
                          <span>Open Gallery</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedTour && (
        <PhotoGallery
          photos={selectedTour.photos}
          isOpen={galleryOpen}
          onClose={() => {
            setGalleryOpen(false);
            setSelectedTour(null);
          }}
        />
      )}
    </div>
  );
};

export default StoriesDestination;
