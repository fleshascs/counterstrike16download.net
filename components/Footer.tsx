const Footer = () => {
  return (
    <footer className='bg-gray-900 border-t border-gray-700 text-gray-400'>
      <div className='container mx-auto px-5'>
        <div className='py-6 flex flex-col lg:flex-row items-center'>
          <div
            className='flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2'
            itemScope
            itemType='http://schema.org/Organization'
          >
            © All rights Reversed.{' '}
            <a className='text-amber-300 ml-2' itemProp='url' href={process.env.domain}>
              <span itemProp='name'>{process.env.siteName}</span>
            </a>
          </div>
          <a target='_blank' rel='noopener' href='https://www.hey.lt/details.php?id=cs16downloads'>
            <img
              width='88'
              height='31'
              src='https://www.hey.lt/count.php?id=cs16downloads'
              alt='Hey.lt - Nemokamas lankytojų skaitliukas'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
