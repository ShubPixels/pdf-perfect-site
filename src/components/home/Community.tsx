import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, MessageCircle, Images, ArrowRight } from "lucide-react";
import { PhotoGallery } from "@/components/ui/photo-gallery";
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

export const Community = () => {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const memories: Memory[] = [
    {
      id: 1,
      destination: "Japan",
      batch: "October 2025",
      coverImage: japanImage,
      photos: [
        { id: 1, src: japanImage, alt: "Japan Tour", caption: "Cherry blossoms in Tokyo" },
        { id: 2, src: communityImage, alt: "Group Photo", caption: "Our amazing group!" },
        { id: 3, src: europeImage, alt: "Temple Visit", caption: "Ancient temples" },
      ],
    },
    {
      id: 2,
      destination: "Dubai",
      batch: "September 2025",
      coverImage: dubaiImage,
      photos: [
        { id: 1, src: dubaiImage, alt: "Dubai Tour", caption: "Burj Khalifa at sunset" },
        { id: 2, src: communityImage, alt: "Desert Safari", caption: "Desert adventures" },
        { id: 3, src: baliImage, alt: "Palm Jumeirah", caption: "Luxury experiences" },
      ],
    },
    {
      id: 3,
      destination: "Europe",
      batch: "August 2025",
      coverImage: europeImage,
      photos: [
        { id: 1, src: europeImage, alt: "Europe Tour", caption: "Eiffel Tower magic" },
        { id: 2, src: japanImage, alt: "Swiss Alps", caption: "Swiss mountain views" },
        { id: 3, src: communityImage, alt: "Group Dinner", caption: "Italian cuisine night" },
      ],
    },
    {
      id: 4,
      destination: "Bali",
      batch: "July 2025",
      coverImage: baliImage,
      photos: [
        { id: 1, src: baliImage, alt: "Bali Tour", caption: "Tropical paradise" },
        { id: 2, src: communityImage, alt: "Temple", caption: "Sacred temples" },
        { id: 3, src: dubaiImage, alt: "Beach", caption: "Beach sunset" },
      ],
    },
  ];

  const openGallery = (memory: Memory, index: number = 0) => {
    setSelectedMemory(memory);
    setPhotoIndex(index);
    setGalleryOpen(true);
  };

  return (
    <section id="community" className="py-24  text-white scroll-mt-20 overflow-hidden">
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
            Click on any destination to explore photos from our travelers' journeys
          </p>
        </div>

        {/* Memory Grid - Bento Style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto mb-16">
          {memories.map((memory, index) => (
            <button
              key={memory.id}
              onClick={() => openGallery(memory)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 ? "col-span-2 row-span-2" : "aspect-square"
              }`}
            >
              <img
                src={memory.coverImage}
                alt={memory.destination}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Images className="w-4 h-4 text-accent" />
                  <span className="text-sm text-white/60">{memory.photos.length} photos</span>
                </div>
                <h3 className={`font-bold text-white mb-1 ${index === 0 ? "text-3xl" : "text-xl"}`}>
                  {memory.destination}
                </h3>
                <p className="text-white/60 text-sm">{memory.batch}</p>
                
                {/* Hover indicator */}
                <div className="mt-4 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-medium">View Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Photo count badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                {memory.photos.length}+
              </div>
            </button>
          ))}
        </div>

        {/* UGC CTA */}
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-dashed border-primary/30 rounded-3xl">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
            Share Your Travel Story
          </h3>
          <p className="=text-black mb-8 max-w-lg mx-auto">
            Travelled with us? Your photos and stories inspire others. Share via WhatsApp or Instagram and get featured!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-black hover:bg-accent/90 font-bold px-8 py-6 text-lg rounded-full">
              Share via WhatsApp
            </Button>
            <Button variant="outline" className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              Tag us on Instagram
            </Button>
          </div>
        </Card>
      </div>

      {/* Photo Gallery Modal */}
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
