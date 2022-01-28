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
            alt='cs 1.6 download full and free'
            src={require('../images/game/hqdefault.jpg?resize&size=485')}
            webp={require('../images/game/hqdefault.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <p className='text-justify pb-4'>
            Discovered in 2003 as <span className='text-amber-300'>Counter-Strike 1.6</span> became
            one of the best known games ever made. Our original CS 1.6 install ensures best gaming
            experience. This setup includes High FPS config and newest build version. The main game
            idea brings us to two agains each other fighting teams (Counter-Terrorists and
            Terrorists), both teams has their own unique weapons, it includes rifles, knifes and
            grenades.
          </p>
          <ul className='list-disc list-inside'>
            <li>
              <span className='text-amber-300'>Full version of Counter Strike 1.6</span> with a
              Latest build 8684
            </li>
            <li>This version compatible with Windows 10, 8, 7, vista, XP</li>
            <li>CS 1.6 Non Steam Setup includes latest updates</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col>
          <RowThumbnail
            alt='xtcs cs 16 game'
            src={require('../images/game/011.jpg?resize&size=485')}
            webp={require('../images/game/011.jpg?resize&size=485&format=webp')}
          />
        </Col>
        <Col>
          <Tag># Counter-Strike XTCS</Tag>

          <p className='text-justify p-4'>
            The standard CS1.6 parametres: Engine version (1.1.2.6 build 4554), setup file size
            200Mb, dual protocol will allow the P47 and P48 servers to run. Our Counter-strike is
            protected against a variety of malware: various keystroke changes, auto loading on
            malware servers, Config.cfg changes and other.
          </p>
        </Col>
      </Row>

      <iframe
        title='cs 1.6 xtcs mod'
        height='345'
        className='w-full'
        loading='lazy'
        src='https://www.youtube.com/embed/lLnP6okA_wc'
      />
      <div className='pb-24' />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: 'Download CS 1.6 | Counter-Strike 1.6 XTCS Free and Full',
    description:
      'Download Counter-Strike 1.6 xtcs install, the standard CS1.6 parametres: Engine version (1.1.2.6 build 4554), setup file size 200Mb.'
  },
  schema: ratingSchema({ ratingValue: '4.3', ratingCount: '9963' })
};
