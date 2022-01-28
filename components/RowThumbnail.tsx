import { FC } from 'react';
import Image, { ImageProps } from '../components/Image';

type RowThumbnailProps = Required<Pick<ImageProps, 'src' | 'webp' | 'alt'>> &
  Pick<ImageProps, 'loading'>;

export const RowThumbnail: FC<RowThumbnailProps> = ({ src, webp, alt, loading }) => (
  <Image
    alt={alt}
    width='485'
    loading={loading}
    height='280'
    src={src}
    webp={webp}
    className='w-full'
  />
);
