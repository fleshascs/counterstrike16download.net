import NavBar from './NavBar';
import Footer from './Footer';
import Image from './Image';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  // <source media="(min-width: 1000px)" srcSet="***url of image***">
  {
    /* <source media="(max-width: 999px)" srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" sizes="100%"></source> */
  }
  return (
    <>
      <Image
        alt=''
        width='485'
        height='280'
        src={require('../images/game/counter-strike-16.jpg')}
        webp={require('../images/game/counter-strike-16.jpg?webp')}
        // className='absolute inset-x-0 top-0 z-[-1] w-full'
        imgClassName='absolute inset-x-0 top-0 z-[-1] w-full hidden md:block'
      />
      <NavBar />
      <div className='relative main'>
        <main className='min-h-screen container pt-6'>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
