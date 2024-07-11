import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
  return <header className='bg-slate-50 xl:px-40 flex w-full h-14 items-center justify-between drop-shadow-xl'>
    <Logo />
    <nav className='flex'>
      {/* 클릭하면 /proctect로 이동 */}
      <Link to={"/protect"}
        className='h-10 leading-10 rounded-lg bg-gray-500 text-center w-48 cursor-pointer hover:bg-gray-600 hover:rounded-full duration-150'
      >
        전세사기예방
      </Link>
      {/* 클릭하면 /로 이동 */}
      <Link to={"/recommend"}
        className='h-10 leading-10 rounded-lg bg-gray-200 text-center w-48 cursor-pointer hover:bg-gray-300 hover:rounded-full duration-150'
      >
        전세추천
      </Link> 
    </nav>
    <div />
  </header>

}