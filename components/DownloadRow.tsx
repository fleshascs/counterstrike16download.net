import Image from './Image';
import DownloadButtons, { ButtonsProps } from './DownloadButtons';

interface DownloadRowProps extends Pick<ButtonsProps, 'translations'> {
  lazy: boolean;
}

const DownloadRow = ({ lazy, translations }: DownloadRowProps) => {
  const loading = lazy ? 'lazy' : undefined;
  return (
    <div className='flex'>
      <Image
        className='pr-[6px]'
        width='100'
        height='100'
        loading={loading}
        src={require('../images/game/strike.png?resize&size=100')}
        webp={require('../images/game/strike.png?resize&size=100&format=webp')}
        alt='install the cs 1.6 game setup'
      />
      <DownloadButtons loading={loading} translations={translations} />
    </div>
  );
};

export default DownloadRow;
