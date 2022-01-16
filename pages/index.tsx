// import Sidebar from '../components/Sidebar';
// import Top from '../components/Top';
// import Card from '../components/Card';
// import HomePage from '../components/HomePage';
import DownloadButtons from '../components/DownloadButtons';
import Image from '../components/Image';

export default function Home() {
  return (
    <>
      <DownloadButtons className='w-[10rem]' />
      <div className='flex flex-col lg:flex-row lg:space-x-4 pb-24'>
        <div className='basis-1/2 pt-10 lg:pt-0'>
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/header.jpg?resize&size=485')}
            webp={require('../images/game/header.jpg?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/game.png?resize&size=485')}
            webp={require('../images/game/game.png?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/mix.png?resize&size=485')}
            webp={require('../images/game/mix.png?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/public.png?resize&size=485')}
            webp={require('../images/game/public.png?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/about.png?resize&size=485')}
            webp={require('../images/game/about.png?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/setup.png?resize&size=485')}
            webp={require('../images/game/setup.png?resize&size=485&format=webp')}
          />
          <iframe
            title='cs 1.6 game'
            height='345'
            className='w-full my-10'
            loading='lazy'
            src='https://www.youtube.com/embed/y7tGzlHgfOQ'
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/cs3-2.png?resize&size=485')}
            webp={require('../images/game/cs3-2.png?resize&size=485&format=webp')}
          />
          <DownloadButtons className='w-[10rem]' />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/cs_server_list.png?resize&size=485')}
            webp={require('../images/game/cs_server_list.png?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/NR0QWRhu.jpg?resize&size=485')}
            webp={require('../images/game/NR0QWRhu.jpg?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/awp.png?resize&size=485')}
            webp={require('../images/game/awp.png?resize&size=485&format=webp')}
          />
          <Image
            alt=''
            className=''
            width='485'
            height='280'
            src={require('../images/game/m4a1dust.png?resize&size=485')}
            webp={require('../images/game/m4a1dust.png?resize&size=485&format=webp')}
          />
          <DownloadButtons className='w-[10rem]' />
          <iframe
            title='cs 1.6 game'
            height='345'
            className='w-full my-10'
            loading='lazy'
            src='https://www.youtube.com/embed/3VkLB0rWImE'
          />
          <iframe
            title='cs 1.6 game'
            height='345'
            className='w-full my-10'
            loading='lazy'
            src='https://www.youtube.com/embed/yTu1ODceGn4'
          />

          {/* <Sidebar /> */}
        </div>
        <div className='basis-1/2'>
          {/* <h2 className='text-gray-300 py-2 text-sm font-medium uppercase'>VIP SERVERS</h2> */}
          {/* <Card>
            <div className='p-2 pb-[50rem] font-medium'>
              <HomePage />
            </div>
          </Card> */}
          {/* <GeneralLoading error={error} isLoading={isLoading}>
            <Servers servers={servers} />
          </GeneralLoading> */}
        </div>
      </div>
    </>
  );
}
