import React from 'react';

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps): React.ReactElement {
  return (
    <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 0' }}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt ?? `Screenshot ${i + 1}`}
          style={{ height: 300, borderRadius: 8, flexShrink: 0 }}
        />
      ))}
    </div>
  );
}
