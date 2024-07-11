import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
  return <header className='fixed top-0 xl:px-40 flex w-full h-14 items-center justify-center drop-shadow-xl'>
    <Logo />
    <nav className='flex'>
      {/* 클릭하면 /proctect로 이동 */}
      <Link to={"/protect"}
        className='h-10 duration-150 rounded-l-full leading-10 bg-gray-300 text-center w-48 cursor-pointer hover:bg-gray-500 hover:rounded-r-full'
      >
        전세사기예방
      </Link>
      {/* 클릭하면 /로 이동 */}
      <Link to={"/recommend"}
        className='h-10 duration-150 rounded-r-full leading-10 bg-gray-100 text-center w-48 cursor-pointer hover:bg-gray-200 hover:rounded-l-full'
      >
        전세추천
      </Link> 
    
    </nav>
    <div />
  </header>

}