import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackLabel?: string;
  containerClassName?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  fallbackLabel,
  containerClassName = '',
  className = '',
  loading = 'lazy',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#24140E] via-[#351E15] to-[#6A3E30] text-[#F8EFE8] p-6 text-center ${containerClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <Sparkles className="w-8 h-8 text-[#D9A85F] mb-3 opacity-80" />
        <span className="font-serif text-base tracking-wide text-[#F8EFE8]/90">
          {fallbackLabel || alt}
        </span>
        <span className="text-xs text-[#D9A85F]/80 mt-1">
          The Roop Beauty Salon · Dabok, Udaipur
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
