import { useLocalStorage } from './use-local-storage';

export type GalleryImage = {
  id: string;
  url: string;
  caption: string;
};

export function useGallery() {
  const [gallery, setGallery] = useLocalStorage<GalleryImage[]>('jf_gallery', []);

  const addImage = (url: string, caption: string) => {
    setGallery([{ id: crypto.randomUUID(), url, caption }, ...gallery]);
  };

  const removeImage = (id: string) => {
    setGallery(gallery.filter(img => img.id !== id));
  };

  return { gallery, addImage, removeImage };
}
