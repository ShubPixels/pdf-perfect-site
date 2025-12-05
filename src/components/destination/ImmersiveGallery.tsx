import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
  category: string;
}

interface ImmersiveGalleryProps {
  images: GalleryImage[];
  destinationName: string;
}

export const ImmersiveGallery = ({ images, destinationName }: ImmersiveGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const categories = ["all", ...Array.from(new Set(images.map(img => img.category)))];
  
  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
      const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const selectedImageData = images.find(img => img.id === selectedImage);

  return (
    <section className="py-16">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-4">
          Visual Journey
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
          Moments from {destinationName}
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the beauty through the lens of our travelers
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeCategory === category 
                ? "bg-highlight text-white shadow-lg shadow-highlight/25" 
                : "bg-foreground/5 text-foreground hover:bg-highlight/10 hover:text-highlight"
              }
            `}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Creative Masonry Grid */}
      <div className="grid grid-cols-12 gap-4 auto-rows-[120px] md:auto-rows-[150px]">
        {filteredImages.map((image, index) => {
          // Create varied grid spans for visual interest
          const patterns = [
            "col-span-6 md:col-span-4 row-span-2",
            "col-span-6 md:col-span-3 row-span-2",
            "col-span-6 md:col-span-5 row-span-3",
            "col-span-6 md:col-span-4 row-span-2",
            "col-span-12 md:col-span-6 row-span-2",
            "col-span-6 md:col-span-3 row-span-3",
            "col-span-6 md:col-span-4 row-span-2",
            "col-span-6 md:col-span-5 row-span-2",
          ];
          const pattern = patterns[index % patterns.length];
          const isHovered = hoveredId === image.id;

          return (
            <div
              key={image.id}
              className={`
                ${pattern}
                group relative overflow-hidden rounded-2xl cursor-pointer
                transition-all duration-500 ease-out
                ${isHovered ? "z-10 scale-[1.02]" : "scale-100"}
              `}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className={`
                  w-full h-full object-cover
                  transition-all duration-700 ease-out
                  ${isHovered ? "scale-110 brightness-110" : "scale-100"}
                `}
              />

              {/* Gradient Overlay */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent
                  transition-opacity duration-300
                  ${isHovered ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Category Badge */}
              <div 
                className={`
                  absolute top-4 left-4 px-3 py-1 rounded-full
                  bg-cta text-black text-xs font-semibold
                  transition-all duration-300 transform
                  ${isHovered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
                `}
              >
                {image.category}
              </div>

              {/* Expand Icon */}
              <div 
                className={`
                  absolute top-4 right-4 w-10 h-10 rounded-full
                  bg-white/20 backdrop-blur-sm flex items-center justify-center
                  transition-all duration-300 transform
                  ${isHovered ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
                `}
              >
                <Expand className="w-5 h-5 text-white" />
              </div>

              {/* Caption */}
              <div 
                className={`
                  absolute bottom-0 left-0 right-0 p-4
                  transition-all duration-300 transform
                  ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                `}
              >
                <p className="text-white font-medium text-sm md:text-base line-clamp-2">
                  {image.caption || image.alt}
                </p>
              </div>

              {/* Corner Accents on Hover */}
              <div 
                className={`
                  absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-cta
                  transition-all duration-300 transform origin-top-left
                  ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                `}
              />
              <div 
                className={`
                  absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-cta
                  transition-all duration-300 transform origin-bottom-right
                  ${isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"}
                `}
              />
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none overflow-hidden">
          <div className="relative w-full h-[90vh] flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 z-50 w-14 h-14 rounded-full bg-highlight/80 backdrop-blur-sm flex items-center justify-center hover:bg-highlight transition-colors group"
            >
              <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 z-50 w-14 h-14 rounded-full bg-highlight/80 backdrop-blur-sm flex items-center justify-center hover:bg-highlight transition-colors group"
            >
              <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Main Image */}
            {selectedImageData && (
              <div className="relative max-w-full max-h-full p-8">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.alt}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-8 right-8 p-6 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                  <span className="inline-block px-3 py-1 rounded-full bg-cta text-black text-xs font-semibold mb-2">
                    {selectedImageData.category}
                  </span>
                  <p className="text-white text-lg font-medium">
                    {selectedImageData.caption || selectedImageData.alt}
                  </p>
                </div>
              </div>
            )}

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-full max-w-[80vw] overflow-x-auto">
              {filteredImages.slice(0, 8).map((img) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImage(img.id)}
                  className={`
                    flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 transition-all
                    ${selectedImage === img.id ? "border-cta scale-110" : "border-transparent opacity-60 hover:opacity-100"}
                  `}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
