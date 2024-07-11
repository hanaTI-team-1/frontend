import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
  return <header>
    <Logo />
    <nav className='flex'>
      {/* 클릭하면 /proctect로 이동 */}
      <Link to={"/protect"}
        className='h-10 hover:bg-gray-500 duration-150 leading-10 bg-gray-300 w-48 text-center cursor-pointer rounded-full'
      >
        전세사기예방
      </Link>
      {/* 클릭하면 /로 이동 */}
      <Link to={"/recommend"}
        className='h-10 hover:bg-gray-200 duration-150 leading-10 bg-gray-100 w-48 text-center cursor-pointer rounded-lg'
      >
        전세추천
      </Link>
    </nav>
    <div />
  </header>

}