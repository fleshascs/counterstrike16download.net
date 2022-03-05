import AdSense from 'react-adsense';
import { RowThumbnail } from '../components/RowThumbnail';
import DownloadRow from '../components/DownloadRow';
import { Row, Col } from '../components/Grid';
import { Tag } from '../components/Tag';
import { ratingSchema } from '../components/utils';

export default function Page() {
  return (
    <>
      <AdSense.Google
        client='ca-pub-3219722052726085'
        slot='4013757856'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
      <DownloadRow lazy={false} />
      <Tag># Counter-Strike 1.6 CSGO Mod</Tag>
      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 global offensive mod'
            src={require('../images/game/csgo_hd.jpg?resize&size=485')}
            webp={require('../images/game/csgo_hd.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            Most modded version of counter-strike 1.6 install, including all kinds of skins, player
            models and even maps.
          </p>

          <table className='min-w-full'>
            <tbody>
              <tr>
                <td className='border p-2 border-zinc-600'>Version</td>
                <td className='border p-2 border-zinc-600'>Counter strike 1.6 Global Offensive</td>
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

      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 CSGO aug gun'
            src={require('../images/game/aug_akihabara_accept.jpg?resize&size=485')}
            webp={require('../images/game/aug_akihabara_accept.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h2 className='text-2xl text-amber-300'>What is Counter-Strike 1.6?</h2>
          <p className='text-justify pb-4 py-4'>
            Counter-Strike 1.6 is a modification for the game Half-Life. It was originally designed
            by Minh Le and Jess Cliffe in 1999 and it has been played by millions of people
            worldwide since then. Counter-Strike is a multiplayer shooter with two opposing teams:
            Terrorists and Counterterrorists. Counter-Strike 1.6 has many different game modes like
            Capture the Flag, Deathmatch, Arms Race, and more!
          </p>
        </Col>
      </Row>

      <iframe
        title='cs 16 CSGO modification'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/uhDJArvoYrk'
      />
      <div className='pb-24' />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Download CS 1.6 | Counter-Strike 1.6 CSGO Download',
    description:
      'Download Counter-Strike 1.6 CSGO Mod Non Steam, Full, Download Counter-Strike 1.6 Free,  Counter-Strike 1.6 is a modification for the game Half-Life. It was originally designed by Minh Le and Jess Cliffe in 1999 and it has been played by millions of people worldwide since then.'
  },
  schema: ratingSchema({ ratingValue: '4.4', ratingCount: '10714' })
};
