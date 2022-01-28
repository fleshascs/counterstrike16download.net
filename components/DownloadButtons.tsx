import clsx from 'clsx';
import Image from './Image';

export interface ButtonsProps {
  className?: string;
  translations?: {
    download: string;
    directDownload: string;
    torrentDownload: string;
  };
  loading?: 'eager' | 'lazy' | undefined;
}
const Buttons = (props: ButtonsProps) => {
  const {
    loading,
    className,
    translations = {
      download: 'DOWNLOAD',
      directDownload: 'Direct link',
      torrentDownload: 'Torrent'
    }
  } = props;
  function log() {
    fetch('https://fleshas.lt/php/api/csdownloads/').catch(() => {
      //...
    });
  }

  return (
    <div
      className={clsx(
        className,
        'inline-flex justify-center p-2 rounded-full h-min bg-[#291f1fe6]'
      )}
    >
      <a
        href='https://fleshas.lt/cs-download/Counter-Strike1.6.exe'
        onClick={log}
        className='py-1 pl-4 pr-6 mr-1 rounded-full flex bg-red-900'
      >
        <Image
          loading={loading}
          className='pr-[6px]'
          width='40'
          height='47'
          src={require('../images/csct.png?resize&size=40')}
          webp={require('../images/csct.png?resize&size=40&format=webp')}
          alt='CS 1.6 Download'
          title='Counter-Strike 1.6'
        />

        <div>
          <div className='text-white font-bold text-sm'>{translations.download}</div>
          <div className='font-bold text-sm text-yellow-300'>{translations.directDownload}</div>
        </div>
      </a>
      <a
        href='https://fleshas.lt/cs-download/Counter-Strike 1.6.exe.torrent'
        className='py-1 pl-4 pr-6 rounded-full flex bg-red-900'
        onClick={log}
      >
        <Image
          loading={loading}
          className='pr-[6px]'
          width='40'
          height='47'
          src={require('../images/csct.png?resize&size=40')}
          webp={require('../images/csct.png?resize&size=40&format=webp')}
          alt='CS 1.6 Download Torrent'
          title='Counter-Strike 1.6 Torrent'
        />
        <div>
          <div className='text-white font-bold text-sm'>{translations.download}</div>
          <div className='font-bold text-sm text-yellow-300'>{translations.torrentDownload}</div>
        </div>
      </a>
    </div>
  );
};

export default Buttons;
