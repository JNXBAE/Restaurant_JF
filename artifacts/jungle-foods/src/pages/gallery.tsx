import { useState } from 'react';
import { useGallery } from '../hooks/use-gallery';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const { gallery } = useGallery();
  const [selectedImage, setSelectedImage] = useState<{url: string, caption: string} | null>(null);

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary text-glow">The Jungle Gallery</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Take a glimpse into our wild culinary adventures and lush dining atmosphere.</p>
      </div>

      {gallery.length === 0 ? (
        <div className="text-center py-20 bg-card/30 rounded-xl border border-border border-dashed">
          <p className="text-xl text-muted-foreground mb-4">No images in the gallery yet.</p>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((image) => (
            <div 
              key={image.id} 
              className="relative break-inside-avoid overflow-hidden rounded-xl group cursor-pointer border border-border"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.caption} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="text-primary w-8 h-8 mb-3" />
                  <p className="text-foreground font-medium drop-shadow-md">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-12 animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 bg-card rounded-full text-foreground hover:text-primary hover:scale-110 transition-all z-10"
          >
            <X size={24} />
          </button>
          
          <div className="w-full max-w-5xl h-full flex flex-col items-center justify-center relative">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-border"
            />
            {selectedImage.caption && (
              <p className="text-center text-foreground font-medium mt-6 text-lg max-w-2xl bg-card/50 px-6 py-3 rounded-full backdrop-blur-md border border-border/50">
                {selectedImage.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
