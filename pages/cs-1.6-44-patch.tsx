import { RowThumbnail } from '../components/RowThumbnail';
import DownloadRow from '../components/DownloadRow';
import { Row, Col } from '../components/Grid';
import { Tag } from '../components/Tag';
import { ratingSchema } from '../components/utils';

export default function Page() {
  return (
    <>
      <DownloadRow lazy={false} />
      <Tag># Counter-Strike 1.6 Protocol v48</Tag>
      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 free'
            src={require('../images/game/neocs.png?resize&size=485')}
            webp={require('../images/game/neocs.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>It's the latest counter-strike non steam patch 44.</p>

          <p className='text-justify pb-4'>
            The ability to add a custom <span className='text-amber-300'>CS 1.6</span> server
            (Favorite) to a LAN function, this CS 1.6 installer is protected against various
            malicious slowhacks such as:
          </p>
          <ul className='list-disc list-inside py-4'>
            <li>Various keyboard shortcuts</li>
            <li>Auto loading on malware servers</li>
            <li>Config.cfg (your Counter-Strike settings) editing</li>
          </ul>

          <p className='text-justify pb-4'>
            100% Clean install without attachments Half-Life Single / Multiplayer Dual Protocol (48
            + 47) <span className='text-amber-300'>Dual protocol</span> will allow playing on P47
            and P48 servers, running a list of servers (Find Server), Internet server list.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='counter strike 1 6 full patch download'
            src={require('../images/game/defusing.png?resize&size=485')}
            webp={require('../images/game/defusing.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h2 className='text-2xl text-amber-300'>About Counter-Strike</h2>
          <p className='text-justify pb-4 py-4'>
            <span className='text-amber-300'>Counter-Strike</span> has been around for quite a while
            now, first debuting in 1999. It's one of the most successful games in history and still
            gets played regularly today. The game can be downloaded free, but before doing so, read
            this guide to learn how to download Counter-Strike 1.6!
          </p>

          <table className='min-w-full'>
            <tbody>
              <tr>
                <td className='border p-2 border-zinc-600'>Version</td>
                <td className='border p-2 border-zinc-600'>Counter strike 1.6</td>
              </tr>
              <tr>
                <td className='border p-2 border-zinc-600'>Package size</td>
                <td className='border p-2 border-zinc-600'>Size- 175 MB.</td>
              </tr>
              <tr>
                <td className='border p-2 border-zinc-600'>Publisher</td>
                <td className='border p-2 border-zinc-600'>Valve</td>
              </tr>
              <tr>
                <td className='border p-2 border-zinc-600'>Compatible with Operatig systems</td>
                <td className='border p-2 border-zinc-600'>
                  Windows XP, Windows 7, Windows Vista, Windows 8, Windows 8.1, Windows 10
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <iframe
        title='cs 16 free game'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/cArqWYFkr-E'
      />
      <div className='pb-24' />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Download Counter-Strike 1.6 - CS 1.6 Full game (v44 patch)',
    description:
      "Counter-Strike has been around for quite a while now, first debuting in 1999. It's one of the most successful games in history and still gets played regularly today"
  },
  schema: ratingSchema({ ratingValue: '4.1', ratingCount: '7323' })
};
