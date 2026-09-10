import type { ImgHTMLAttributes } from "react";

interface ResponsiveImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> {
  /** AVIF sources, smallest width first, e.g. [[photo320, 320], [photo640, 640]] */
  avif: [src: string, width: number][];
  webp: [src: string, width: number][];
  /** JPEG fallback — also used as the plain <img src> for browsers with no <picture> support. */
  jpg: [src: string, width: number][];
  sizes: string;
  alt: string;
  width: number;
  height: number;
}

const toSrcSet = (entries: [string, number][]) =>
  entries.map(([src, w]) => `${src} ${w}w`).join(", ");

/**
 * <picture> with AVIF -> WebP -> JPEG fallback. Used for the two photos that
 * exist as pre-optimized multi-format exports (see scripts/optimize-images.mjs).
 */
export const ResponsiveImage = ({
  avif,
  webp,
  jpg,
  sizes,
  alt,
  width,
  height,
  ...imgProps
}: ResponsiveImageProps) => {
  const largestJpg = jpg[jpg.length - 1]?.[0];
  return (
    <picture>
      <source type="image/avif" srcSet={toSrcSet(avif)} sizes={sizes} />
      <source type="image/webp" srcSet={toSrcSet(webp)} sizes={sizes} />
      <img
        src={largestJpg}
        srcSet={toSrcSet(jpg)}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        {...imgProps}
      />
    </picture>
  );
};
