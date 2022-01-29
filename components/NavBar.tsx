import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import Image from './Image';

const navigation = [
  {
    name: 'Counter Strike 1.6 Download',
    href: '/'
  },
  {
    name: 'CS 1.6 xtcs',
    href: '/counter-strike-1.6-xtcs-download'
  },
  {
    name: 'CS 1.6 torrent',
    href: '/cs-1.6-torrent'
  },
  {
    name: 'CS 1.6 protocol v48',
    href: '/cs-1.6-48-protocol'
  },
  {
    name: 'CS 1.6 44 patch',
    href: '/cs-1.6-44-patch'
  },
  {
    name: 'CS 1.6 CSGO Mod',
    href: '/cs-1.6-csgo-mod'
  },
  {
    name: 'CS 1.6 for Windows 10',
    href: '/cs-1.6-windows-10'
  }
];
export default function NavBar() {
  const router = useRouter();
  return (
    <nav className='bg-red-900 overflow-x-auto sm:overflow-visible'>
      <div className='max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between py-5'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='sm:flex-shrink-0 flex items-center'>
              <Image
                className='hidden sm:block'
                imgClassName='h-[50px] w-[100px] max-w-none'
                width='100'
                height='50'
                src={require('../images/game/AK-47.png?resize&size=100')}
                webp={require('../images/game/AK-47.png?resize&size=100&format=webp')}
                alt='counter strike game'
              />
            </div>
            <div className='sm:ml-6'>
              <div
                className='flex space-x-4 whitespace-nowrap sm:whitespace-normal'
                itemScope
                itemType='https://schema.org/SiteNavigationElement'
              >
                {navigation.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a
                      itemProp='url'
                      className={clsx(
                        item.href === router.pathname ? 'bg-[#790c0c]' : '',
                        'px-2 py-4 uppercase text-sm text-white'
                      )}
                      aria-current={item.href === router.pathname ? 'page' : undefined}
                    >
                      <span itemProp='name'>{item.name}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
