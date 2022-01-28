import { RowThumbnail } from '../components/RowThumbnail';
import DownloadRow from '../components/DownloadRow';
import { Row, Col } from '../components/Grid';
import { Tag } from '../components/Tag';
import { ratingSchema } from '../components/utils';

export default function Page() {
  return (
    <>
      <DownloadRow lazy={false} />
      <Tag># Counter-Strike 1.6 Windows 10</Tag>
      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 download for windows'
            src={require('../images/game/csbg.jpg?resize&size=485')}
            webp={require('../images/game/csbg.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            Play the world's number 1 online action game. Engage in an incredibly realistic brand of
            terrorist warfare in this wildly popular team-based game. Ally with teammates to
            complete strategic missions. Take out enemy sites. Rescue hostages. Your role affects
            your team's success. Your team's success affects your role.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='cs 1.6 for windows operating system'
            src={require('../images/game/Windows-10.jpg?resize&size=485')}
            webp={require('../images/game/Windows-10.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h2 className='text-2xl text-amber-300'>How to Play Counter Strike 1.6</h2>
          <p className='text-justify pb-4'>
            Counter-Strike 1.6 Download is a shooting game that requires players to compete against
            other teams. The objective of Counter Strike 1.6 Download is to eliminate the other team
            or complete the mission objective. There are three different modes of gameplay:
            Terrorist Hunt, Deathmatch, and Team Deathmatch. In this blog post, we will talk about
            how to play Counter Strike 1.6 Download in a few easy steps.
          </p>
          <h2 className='text-2xl text-amber-300'>Counter-Strike 1.6 game specs</h2>
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
        title='cs 1.6 gameplay'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/Iwb0X-VEsWM'
      />
      <div className='pb-24' />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Counter-Strike 1.6 - Windows 10 Download',
    description:
      'Download Counter-Strike 1.6 for Windows 10, 100% clean install, Counter-Strike 1.6 Download is a shooting game that requires players to compete against other teams.'
  },
  schema: ratingSchema({ ratingValue: '4.0', ratingCount: '18050' })
};
