import { Footer } from './Footer';
import { Header } from './Header';
import { JeonseCard } from './JeonseCard';

export default function Main() {
  return (
    <>
      <div className="bg-slate-300">메인</div>
      <Footer />
      <Header />
      <ul>
        <JeonseCard />
      </ul>
    </>
  );
}
