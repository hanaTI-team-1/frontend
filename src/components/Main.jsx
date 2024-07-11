import { Footer } from "./Footer";
import { Header } from "./Header";
import { JeonseCard } from "./JeonseCard";

export default function Main() {
  return (
    <>
      <Header />
      <ul>
        <JeonseCard
          address1={"서울특별시 관악구 신림동"}
          address2={"OO로 56 (123-12) 3층 20평"}
          price={"1억 2000만원"}
        />
      </ul>
    </>
  );
}
