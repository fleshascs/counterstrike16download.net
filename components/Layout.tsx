import NavBar from './NavBar';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <picture>
        <source
          media='(max-width: 999px)'
          srcSet='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=='
          sizes='100%'
        />
        <source
          media='(min-width: 1000px)'
          srcSet={require('../images/game/counter-strike-16.jpg')}
        />
        <source
          media='(min-width: 1000px)'
          srcSet={require('../images/game/counter-strike-16.jpg?webp')}
          type='image/webp'
        />
        <img
          src={require('../images/game/counter-strike-16.jpg')}
          alt='Counter-Strike 1.6'
          className='absolute inset-x-0 top-0 z-[-1] w-full hidden lg:block'
        />
      </picture>
      <NavBar />
      <div className='relative main'>
        <main className='min-h-screen container pt-6'>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
