import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export const Header = () => {
  return <header>
    <Logo />
    <nav className='flex'>
      <Link to={"/protect"}>
        전세사기예방
      </Link>
      <Link>
        전세추천
      </Link>
    </nav>
    <div />
  </header>

}