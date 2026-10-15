'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';

type DealImageViewerProps = {
  image: string;
  title: string;
};

export default function DealImageViewer({ image, title }: DealImageViewerProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Prevent the page behind the lightbox from scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Clickable Image */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-3xl bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label={`View ${title} image`}
      >
        <div className="relative aspect-square">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover transition duration-500 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/30">
            <div className="flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-5 py-3 text-sm font-bold text-[#111111] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Maximize2 className="h-4 w-4" />
              View Image
            </div>
          </div>
        </div>
      </button>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${title}`}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
            aria-label="Close image viewer"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="relative h-full w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image src={image} alt={title} fill sizes="100vw" className="object-contain" priority />
          </div>
        </div>
      )}
    </>
  );
}
