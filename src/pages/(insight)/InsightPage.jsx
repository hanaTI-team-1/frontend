import { ArticleCard } from "./_component/ArticleCard";
import { ARTICLE_LIST } from "../../../constants/index";

const InsightPage = () => {
  return (
    <>
      <h1 className="pt-16 text-center text-2xl font-medium">
        예방팀의 전세 레포트를 읽어보세요
      </h1>
      <ul className="mt-16 space-y-5">
        {ARTICLE_LIST.map((item) => (
          <ArticleCard
            key={item.title}
            title={item.title}
            imageUrl={item.imageUrl}
            date={item.date}
            url={item.url}
            author={item.author}
          />
        ))}
      </ul>
    </>
  );
};

export default InsightPage;
