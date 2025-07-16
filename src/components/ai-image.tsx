"use client";

import { generateImage } from '@/ai/flows/generate-image-flow';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Skeleton } from './ui/skeleton';
import { AvatarImage } from './ui/avatar';
import { cn } from '@/lib/utils';

interface AiImageProps {
  prompt: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isAvatar?: boolean;
}

export default function AiImage({
  prompt,
  alt,
  width,
  height,
  className,
  isAvatar = false,
}: AiImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    const fetchImage = async () => {
      try {
        setLoading(true);
        const result = await generateImage({ prompt });
        if (!isCancelled && result.imageUrl) {
          setImageUrl(result.imageUrl);
        }
      } catch (error) {
        console.error('Failed to generate image:', error);
        // Fallback to a placeholder if generation fails
        setImageUrl(`https://placehold.co/${width}x${height}.png`);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchImage();

    return () => {
      isCancelled = true;
    };
  }, [prompt, width, height]);

  if (loading) {
    return (
      <Skeleton
        className={cn(
          isAvatar ? `w-[${width}px] h-[${height}px] rounded-full` : 'w-full h-auto',
          className
        )}
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    );
  }

  if (!imageUrl) {
    return null;
  }
  
  if (isAvatar) {
    return <AvatarImage src={imageUrl} alt={alt} className={className} />;
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized // Necessary for data URIs
    />
  );
}
