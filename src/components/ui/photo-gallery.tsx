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

const getVisibleThumbnails = <T,>(
  items: T[],
  currentIndex: number,
  windowSize = 7,
) => {
  if (items.length <= windowSize) {
    return items.map((item, index) => ({ item, index }));
  }

  const radius = Math.floor(windowSize / 2);
  const visibleItems: Array<{ item: T; index: number }> = [];

  for (let offset = -radius; offset <= radius; offset += 1) {
    const index = (currentIndex + offset + items.length) % items.length;

    if (!visibleItems.some((entry) => entry.index === index)) {
      visibleItems.push({ item: items[index], index });
    }
  }

  return visibleItems;
};

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
        <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden px-3 pt-16 sm:h-[90vh] sm:px-0 sm:pt-0">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 z-50 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-4 sm:top-4 sm:p-2"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Main Image */}
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-10 pb-4 sm:px-16 sm:pb-6">
            {/* Navigation - Previous */}
            {photos.length > 1 && (
              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-4 sm:p-3"
              >
                <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}

            <img
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="max-h-full max-w-full rounded-xl object-contain"
              decoding="async"
              fetchPriority="high"
            />

            {/* Navigation - Next */}
            {photos.length > 1 && (
              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-4 sm:p-3"
              >
                <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
              </button>
            )}
          </div>

          {photos[currentIndex].caption && (
            <div className="shrink-0 px-4 pb-3 sm:px-6">
              <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-center text-sm leading-relaxed text-white shadow-lg backdrop-blur-md md:px-5 md:text-base">
                {photos[currentIndex].caption}
              </div>
            </div>
          )}

          {/* Thumbnails */}
          {photos.length > 1 && (
            <div className="shrink-0 overflow-x-auto px-3 pb-3 [scrollbar-width:none] [-ms-overflow-style:none] sm:px-4 sm:pb-4">
              <div className="mx-auto flex w-max gap-2">
                {getVisibleThumbnails(photos, currentIndex).map(({ item: photo, index }) => (
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
                      loading="lazy"
                      decoding="async"
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
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </button>
      ))}
    </div>
  );
};
