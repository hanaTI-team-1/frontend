import { InsightArticle } from "./_component/InsigntArticle";
import { ARTICLE_LIST } from "../../../constants/index";
import { SeparatorFull } from "../../components/SeparatorFull";

const InsightModel3Page = () => {
  return (
    <>
      <h1 className="pt-10 opacity-90 text-3xl text-center font-semibold">
        {ARTICLE_LIST[2].title}
      </h1>
      <header className="pt-10 px-20 pb-5 flex gap-5">
        <img
          src={ARTICLE_LIST[2].imageUrl}
          width={64}
          height={64}
          alt={ARTICLE_LIST[2].author}
        />
        <div className="flex flex-col justify-evenly">
          <span>작성자: {ARTICLE_LIST[2].author}</span>
          <div className="text-sm"> {ARTICLE_LIST[2].date}</div>
        </div>
      </header>
      <SeparatorFull />
      <section className="mt-10 px-20 break-keep">
        <p>
          저희 예방 팀은 최근 전세 시장에서 가격과 인프라와의 상관관계를
          중심으로 분석을 진행했습니다. 이 게시글에서는 인프라의 주요 요소들이
          전세 가격에 미치는 영향에 대해서 실제 데이터를 바탕으로 독자 여러분과
          공유하고자 합니다.
        </p>
      </section>
      <section className="p-20 space-y-10">
        <InsightArticle title={"1. 제목을 지어주셈"}>
          <img src="/insight/graphs/구별사이즈.png" width={500} height={500} />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"2. 제목2"}>
          <img src="/insight/graphs/corr.png" width={500} height={500} />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"3. 제목 3"}>
          <img src="/insight/graphs/graph1.png" width={500} height={500} />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"4. 학습곡선"}>
          <img
            src="/insight/graphs/건물용도별개수.png"
            width={500}
            height={500}
          />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"5. 제목좀"}>
          <img src="/insight/graphs/동별.png" width={500} height={500} />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"6. 제목좀"}>
          <img src="/insight/graphs/마트수.png" width={500} height={500} />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"7. 제목좀"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>

        <InsightArticle title={"맺음말"}>
          <p>
            대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를
            보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다. 연소자의 근로는
            특별한 보호를 받는다. 국가는 농지에 관하여 경자유전의 원칙이 달성될
            수 있도록 노력하여야 하며.
          </p>
        </InsightArticle>
      </section>
    </>
  );
};

export default InsightModel3Page;
