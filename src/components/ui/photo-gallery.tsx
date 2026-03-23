import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export const PhotoGallery = ({ photos, isOpen, onClose, initialIndex = 0 }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, isOpen]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") goNext();
    if (e.key === "ArrowLeft") goPrev();
    if (e.key === "Escape") onClose();
  };

  if (!photos.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="h-[100dvh] w-screen max-w-[100vw] rounded-none border-none bg-black/95 p-0 sm:h-auto sm:max-h-[95vh] sm:max-w-[95vw] sm:rounded-2xl"
        onKeyDown={handleKeyDown}
      >
        <div className="relative flex h-[100dvh] w-full items-center justify-center overflow-hidden px-3 pb-24 pt-16 sm:h-[90vh] sm:px-0 sm:pb-0 sm:pt-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-50 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-4 sm:top-4 sm:p-2"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation - Previous */}
          {photos.length > 1 && (
            <button
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-4 sm:p-3"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          )}

          {photos[currentIndex].caption && (
            <div className="pointer-events-none absolute inset-x-0 top-16 z-20 flex justify-center px-12 sm:hidden">
              <p className="inline-block rounded-2xl border border-white/10 bg-black/65 px-3.5 py-2 text-center text-xs leading-snug text-white shadow-lg backdrop-blur-md">
                {photos[currentIndex].caption}
              </p>
            </div>
          )}

          {/* Main Image */}
          <div className="relative flex w-full items-center justify-center px-10 sm:max-w-full sm:max-h-full sm:px-16">
            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-h-[68vh] max-w-full rounded-xl object-contain sm:max-h-[80vh]"
            />
            
            {/* Caption */}
            {photos[currentIndex].caption && (
              <div className="pointer-events-none absolute left-0 right-0 top-4 z-10 hidden justify-center px-4 sm:flex">
                <p className="inline-block max-w-3xl rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-center text-sm leading-relaxed text-white shadow-lg backdrop-blur-md md:px-5 md:text-base">
                  {photos[currentIndex].caption}
                </p>
              </div>
            )}
          </div>

          {/* Navigation - Next */}
          {photos.length > 1 && (
            <button
              onClick={goNext}
              className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-4 sm:p-3"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          )}

          {/* Thumbnails */}
          {photos.length > 1 && (
            <div className="absolute inset-x-0 bottom-3 z-20 overflow-x-auto px-3 [scrollbar-width:none] [-ms-overflow-style:none] sm:bottom-4">
              <div className="mx-auto flex w-max gap-2">
                {photos.map((photo, index) => (
                  <button
                    key={photo.id}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-10 w-14 overflow-hidden rounded transition-all sm:h-12 sm:w-16 ${
                      index === currentIndex
                        ? "opacity-100 ring-2 ring-accent"
                        : "opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Counter */}
          <div className="absolute left-3 top-3 rounded-full bg-white/10 px-3 py-1 text-sm text-white sm:left-4 sm:top-4">
            {currentIndex + 1} / {photos.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

interface PhotoGridProps {
  photos: Photo[];
  columns?: 2 | 3 | 4;
  onPhotoClick?: (index: number) => void;
}

export const PhotoGrid = ({ photos, columns = 4, onPhotoClick }: PhotoGridProps) => {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {photos.map((photo, index) => (
        <button
          key={photo.id}
          onClick={() => onPhotoClick?.(index)}
          className="group relative aspect-square rounded-xl overflow-hidden"
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      ))}
    </div>
  );
};
