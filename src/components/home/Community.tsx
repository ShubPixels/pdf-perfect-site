import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, MessageCircle, Images, ArrowRight } from "lucide-react";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import { Link } from "react-router-dom";

import communityImage from "@/assets/community-1.jpg";
import japanImage from "@/assets/japan-tour.jpg";
import dubaiImage from "@/assets/dubai-tour.jpg";
import europeImage from "@/assets/europe-tour.jpg";
import baliImage from "@/assets/bali-tour.jpg";

interface Memory {
  id: number;
  destination: string;
  batch: string;
  coverImage: string;
  photos: { id: number; src: string; alt: string; caption?: string }[];
}

type CommunityVariant = "home" | "page";
interface CommunityProps {
  variant?: CommunityVariant;
}

const makeTenPhotos = (label: string, cover: string) => {
  const pool = [cover, communityImage, japanImage, dubaiImage, europeImage, baliImage];
  return Array.from({ length: 10 }).map((_, idx) => ({
    id: idx + 1,
    src: pool[idx % pool.length],
    alt: `${label} photo ${idx + 1}`,
    caption: `${label} memory #${idx + 1}`,
  }));
};

/** ✅ stable templates */
const HOME_SPANS = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-3 md:row-span-1",
];

const PAGE_SPANS = [
  "md:col-span-3 md:row-span-2",
  "md:col-span-3 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export const Community = ({ variant = "home" }: CommunityProps) => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const memoriesAll: Memory[] = useMemo(
    () => [
      { id: 1, destination: "Japan", batch: "October 2025", coverImage: japanImage, photos: makeTenPhotos("Japan", japanImage) },
      { id: 2, destination: "Dubai", batch: "September 2025", coverImage: dubaiImage, photos: makeTenPhotos("Dubai", dubaiImage) },
      { id: 3, destination: "Europe", batch: "August 2025", coverImage: europeImage, photos: makeTenPhotos("Europe", europeImage) },
      { id: 4, destination: "Bali", batch: "July 2025", coverImage: baliImage, photos: makeTenPhotos("Bali", baliImage) },
      { id: 5, destination: "Oman", batch: "June 2025", coverImage: dubaiImage, photos: makeTenPhotos("Oman", dubaiImage) },
      { id: 6, destination: "Kerala", batch: "May 2025", coverImage: baliImage, photos: makeTenPhotos("Kerala", baliImage) },
      { id: 7, destination: "Australia", batch: "April 2025", coverImage: europeImage, photos: makeTenPhotos("Australia", europeImage) },
      { id: 8, destination: "Andaman", batch: "March 2025", coverImage: baliImage, photos: makeTenPhotos("Andaman", baliImage) },
      { id: 9, destination: "South Africa", batch: "February 2025", coverImage: europeImage, photos: makeTenPhotos("South Africa", europeImage) },
      { id: 10, destination: "Orissa", batch: "January 2025", coverImage: japanImage, photos: makeTenPhotos("Orissa", japanImage) },
    ],
    []
  );

  // ✅ deterministic order
  const ordered = useMemo(
    () => [...memoriesAll].sort((a, b) => a.destination.localeCompare(b.destination)),
    [memoriesAll]
  );

  const memories = variant === "home" ? ordered.slice(0, 5) : ordered;
  const spansPattern = variant === "home" ? HOME_SPANS : PAGE_SPANS;

  const openGallery = (memory: Memory, index: number = 0) => {
    setSelectedMemory(memory);
    setPhotoIndex(index);
    setGalleryOpen(true);
  };

  const isPage = variant === "page";

  return (
    <section id="community" className="py-24 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 mb-6">
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-sm text-black font-medium">Real moments, Real memories</span>
          </div>

          <h2 className="text-4xl text-black md:text-6xl font-bold mb-4">
            From Our <span className="text-accent">Community</span>
          </h2>

          <p className="text-black max-w-2xl mx-auto text-lg">
            Click on any destination to explore photos from our travelers&apos; journeys
          </p>

          {variant === "home" && (
            <div className="flex justify-center mt-6">
              <Link to="/community">
                <Button variant="outline" className="rounded-full px-6 group text-black">
                  View Community
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* ✅ Stable Bento */}
        <div className="max-w-6xl mx-auto mb-16">
          <div
            className={`
              grid grid-cols-2 gap-4 md:grid-flow-dense
              ${isPage ? "md:grid-cols-6 md:auto-rows-[260px]" : "md:grid-cols-4 md:auto-rows-[200px]"}
            `}
          >
            {memories.map((memory, index) => {
              const span = spansPattern[index % spansPattern.length];
              const isTall = span.includes("row-span-2");

              return (
                <button
                  key={memory.id}
                  onClick={() => openGallery(memory)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer ${span}`}
                >
                  <img
                    src={memory.coverImage}
                    alt={memory.destination}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    {/* <div className="rounded-2xl bg-black/25 backdrop-blur-sm border border-white/10 p-4 md:p-5"> */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Images className="w-4 h-4 text-accent" />
                        <span className="text-sm text-white/70">{memory.photos.length} photos</span>
                      </div>

                      <h3
                        className={`
                          font-bold text-white leading-tight drop-shadow
                          ${isPage ? (isTall ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl") : (isTall ? "text-3xl md:text-4xl" : "text-xl md:text-2xl")}
                        `}
                      >
                        {memory.destination}
                      </h3>

                      <p className="text-white/70 mt-1 text-sm md:text-base">{memory.batch}</p>

                      <div className="mt-3 flex items-center gap-2 text-accent font-medium">
                        <span>View Gallery</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* UGC CTA */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-dashed border-primary/30 rounded-3xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">Share Your Travel Story</h3>
          <p className="text-black mb-8 max-w-lg mx-auto">
            Travelled with us? Your photos and stories inspire others. Share via WhatsApp or Instagram and get featured!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-accent text-white hover:bg-accent/90 font-bold px-8 py-6 text-lg rounded-full">
              <a href="https://wa.link/97984j" target="_blank" rel="noopener noreferrer">
                Share via WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              <a href="https://www.instagram.com/suntourismpune/" target="_blank" rel="noopener noreferrer">
                Tag us on Instagram
              </a>
            </Button>

          </div>
        </Card>
      </div>

      {selectedMemory && (
        <PhotoGallery
          photos={selectedMemory.photos}
          isOpen={galleryOpen}
          onClose={() => {
            setGalleryOpen(false);
            setSelectedMemory(null);
          }}
          initialIndex={photoIndex}
        />
      )}
    </section>
  );
};
