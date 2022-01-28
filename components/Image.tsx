// interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'crossOrigin'> Required< {
export interface ImageProps
  extends Required<Pick<React.HTMLProps<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'>>,
    Pick<React.HTMLProps<HTMLImageElement>, 'title' | 'className'> {
  src: string;
  webp: string;
  className?: string;
  loading?: 'eager' | 'lazy' | undefined;
  imgClassName?: string;
}

export default function Image({
  src,
  webp,
  width,
  height,
  alt,
  loading,
  imgClassName,
  ...rest
}: ImageProps) {
  return (
    <picture {...rest}>
      {webp ? <source srcSet={webp} type='image/webp' /> : null}
      <img
        src={src}
        title={rest.title ?? alt}
        width={width}
        height={height}
        alt={alt}
        loading={loading}
        className={imgClassName}
      />
    </picture>
  );
}
