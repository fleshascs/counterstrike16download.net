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
            alt='cs 1.6 free original'
            src={require('../images/game/markeloff.png?resize&size=485')}
            webp={require('../images/game/markeloff.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            It is the new version of <span className='text-amber-300'>cs 1.6 48 protocol</span>, the
            original 2017 version, fixing the lag issues. The terrorist group has bombed to the
            so-called A or B. After bomb blasts it must be planted and cut off from being abandoned.
            Shirin ta'addanci is when a bomb bomb house is bombarded, bribe it, if it does not
            succeed.
          </p>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='cs install dust2 game'
            src={require('../images/game/b_dust2.png?resize&size=485')}
            webp={require('../images/game/b_dust2.png?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <h2 className='text-2xl text-amber-300'>How to install Counter-Strike</h2>
          <p className='text-justify pb-4 py-4'>
            <span className='text-amber-300'>Counter-Strike 1.6</span> is a popular first person
            shooter game originally released in 2000. The latest version of the game,
            Counter-Strike: Source, was released in 2004 and has been continuously updated over the
            years. There are many different ways to play Counter-Strike games such as by downloading
            it on Steam or purchasing an online server. For this guide we'll focus on installing the
            game by downloading it through Steam.
          </p>
        </Col>
      </Row>

      <iframe
        title='cs 1 6 game highlights'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/p9s5InzhNGY'
      />
      <div className='pb-24' />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Counter-Strike 1.6 - CS 1.6 Download Protocol v48',
    description:
      'Download Counter-Strike 1.6 protocol v48. Counter-Strike 1.6 (CS 1.6) is a popular first person shooter game originally released in 2000.'
  },
  schema: ratingSchema({ ratingValue: '3.8', ratingCount: '4994' })
};
