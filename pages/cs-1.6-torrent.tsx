import { RowThumbnail } from '../components/RowThumbnail';
import DownloadRow from '../components/DownloadRow';
import { Row, Col } from '../components/Grid';
import { Tag } from '../components/Tag';
import { ratingSchema } from '../components/utils';

export default function Page() {
  return (
    <>
      <DownloadRow lazy={false} />
      <Row>
        <Col>
          <RowThumbnail
            alt='torrent counter-strike game install'
            src={require('../images/game/teams.png?resize&size=485')}
            webp={require('../images/game/teams.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            The <span className='text-amber-300'>Counter-Strike game</span> begins with a well-known
            scenario, the terrorists took hostages, and they had to be saved. The purpose of the
            terrorist is to prevent the rescue of enemies until the entire Counter-Terrorist team is
            over or destroyed. The counter-terrorist mission is completely different, they need to
            save the hostages and bring them to the marked place (mainly CT).
          </p>
          <p className='text-justify pb-4'>
            Couter-Strike 1.6 is compatible with:{' '}
            <span className='text-amber-300'>
              Windows XP, Windows 7, Windows Vista, Windows 8, Windows 8.1, Windows 10
            </span>
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 torrent download'
            src={require('../images/game/torrent.png?resize&size=485')}
            webp={require('../images/game/torrent.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <Tag># CS 1.6 Torrent Download</Tag>

          <h2 className='text-2xl text-amber-300 mt-6'>Why Download CS 1.6 using torrent</h2>
          <ul className='list-disc list-inside py-4'>
            <li>
              The Download of counter strike 1.6 is absolutely for{' '}
              <span className='text-amber-300'>free</span>
            </li>
            <li>
              Ensure fast downloads by Auto-adjusting bandwidth usage based on your network and
              internet connection speed.
            </li>
            <li>
              Adjust the speed, set the day and time for your{' '}
              <span className='text-amber-300'>CS 1.6 torrent downloads</span> to start and stop.
            </li>
            <li>
              <span className='text-amber-300'>Download CS</span> game in chunks, without resetting
              the download progress, helps with slow internet access
            </li>
          </ul>
          <p>
            before downloading you need to have torrent downloader:
            <br />
            download link for qBittorrent:{' '}
            <a href='https://www.qbittorrent.org/' rel='noopener' target='_blank'>
              qBittorrent download
            </a>
          </p>
        </Col>
      </Row>

      <iframe
        title='cs 1.6 HD'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/5Cjrp23lBSM'
      />
      <div className='pb-24' />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'CS 1.6 Free: Counter-Strike 1.6 - Torrent Download',
    description:
      'Download Counter-Strike 1.6 using torrent. The Counter-Strike game begins with a well-known scenario, the terrorists took hostages, and they had to be saved.'
  },
  schema: ratingSchema({ ratingValue: '4.6', ratingCount: '8864' })
};
