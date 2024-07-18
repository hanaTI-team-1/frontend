import { InsightArticle } from "./_component/InsigntArticle";
import { ARTICLE_LIST } from "../../../constants/index";
import { SeparatorFull } from "../../components/SeparatorFull";

const InsightModel2Page = () => {
  return (
    <>
      <h1 className="pt-10 opacity-90 text-3xl text-center font-semibold">
        {ARTICLE_LIST[1].title}
      </h1>
      <header className="pt-10 px-20 pb-5 flex gap-5">
        <img
          src={ARTICLE_LIST[1].imageUrl}
          width={64}
          height={64}
          alt={ARTICLE_LIST[1].author}
        />
        <div className="flex flex-col justify-evenly">
          <span>작성자: {ARTICLE_LIST[1].author}</span>
          <div className="text-sm"> {ARTICLE_LIST[1].date}</div>
        </div>
      </header>
      <SeparatorFull />
      <section className="mt-10 px-20 break-keep">
        <p>
          저희 예방 팀은 오픈 데이터를 통해 사회 초년생의 거주 비율이 높은
          지역인 '관악구, 송파구, 강서구, 강남구, 동작구'를 타겟 지역으로
          선정하여 현재 5개 구부터 서비스를 시작하고 있습니다. 저희가 '전세 사기
          예방'이라는 목표를 가지고 서비스를 시작한 이유는 전세 사기 피해 현황이
          계속해서 증가하고 있으며, 2월 기준 누적 피해자가 1만 2928명에
          달합니다. 2023년 전세 사기 피해액은 최소 4조 3347억원으로, 실제 피해
          규모는 이보다 더 클 것으로 예상됩니다. 이러한 문제를 해결하고자 저희는
          전세 추천 및 예방 서비스를 제공하여 조금이라도 도움이 되는 서비스를
          개발하고자 합니다.
        </p>
      </section>
      <section className="p-20 space-y-10">
        <InsightArticle title={"1. 자치구별 매물 데이터 개수"}>
          <img src="/insight/graphs/구별사이즈.png" width={500} height={500} />
          <p className="mt-5">
            저희가 모델에 학습시킨 매물 데이터의 자치구 별 데이터는 다음과
            같습니다. 각 자치구의 매물 데이터 개수를 통해 해당 지역의 시장
            상황을 파악할 수 있습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"2. 매물 데이터 상관관계 히트맵"}>
          <img src="/insight/graphs/corr.png" width={500} height={500} />
          <h4 className="mt-5 w-full text-left text-lg font-medium">
            가격 관련 상관관계( grfe)
          </h4>
          <p className="mt-5 pl-5">
            grfe그리고 rentArea(0.75): 강한 양의 상관관계가 있는데, 이는 임대
            지역이 클수록 임대 가격이 높아지는 경향이 있음을 나타냅니다.
            <br />
            <br />
            grfe그리고 bfrGfafe(0.44): 적당한 양의 상관관계가 있어 가격이
            높을수록 층수도 높아짐을 알 수 있습니다.
          </p>
          <h4 className="mt-5 w-full text-left text-lg font-medium">
            근접성 관련 상관관계
          </h4>
          <p className="mt-5 pl-5">
            500m_내_초중등 수 그리고 500m_내_마트수(0.17): 약한 양의 상관관계는
            500m 이내에 학교가 많은 지역에 마트도 더 많은 경향이 있음을
            나타냅니다.
            <br />
            <br />
            bldgUsg그리고 grfe(-0.27) : 약한 음의 상관관계는 특정 건물 용도가 더
            낮은 가격과 연관되어 있음을 시사합니다.
            <br />
            <br />
            자치구별_관악구그리고 발생(0.47): 자치구별_관악구와 사이의 적당한
            양의 상관관계는 발생관악구가 다른 자치구에 비해 발생률이나 사건이 더
            높다는 것을 시사합니다.
            <br />
            <br />⇒ rentarea(임대면적) bldgusg(사용용도) bfrgrfe(종전보증금) flr
            (층) cggCd (자치구코드) 등이 전세가격에 크게 영향을 주는 것을 파악할
            수 있습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"3. 자치구 별 전세 평균 가격"}>
          <img src="/insight/graphs/graph1.png" width={500} height={500} />
          <p className="mt-5">
            자치구별 전세 가격의 평균을 그래프로 시각화하여, 각 지역의 전세 가격
            동향을 파악할 수 있습니다.
          </p>
        </InsightArticle>

        {/* <InsightArticle title={"4. 행정동 별 전세 평균 가격"}>
          <img
            src="/insight/graphs/건물용도별개수.png"
            width={500}
            height={500}
          />
          <p className="mt-5">
            행정동별 전세 가격의 평균을 그래프로 시각화하여, 보다 세부적인
            지역별 전세 가격 동향을 파악할 수 있습니다
          </p>
        </InsightArticle> */}

        <InsightArticle title={"5. 행정동 별 전세 평균 가격"}>
          <img src="/insight/graphs/동별.png" width={500} height={500} />
          <p className="mt-5">
            행정동별 전세 가격의 평균을 그래프로 시각화하여, 보다 세부적인
            지역별 전세 가격 동향을 파악할 수 있습니다
          </p>
        </InsightArticle>

        <InsightArticle
          title={
            "6. 인프라 - 구 동 별 주변 500미터 내 학교 버스 마트 개수 분석"
          }
        >
          <img src="/insight/graphs/마트수.png" width={500} height={500} />
          <p className="mt-5">
            각 자치구와 동별로 주변 500미터 내의 학교, 버스 정류장, 마트의
            개수를 분석하여, 생활 편의성을 평가할 수 있습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"7. 자치구별 평균 범죄 발생 건수"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            자치구별로 1인당 평균 범죄 발생 건수를 시각화하여, 인구 대비
            범죄율을 평가할 수 있습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"맺음말"}>
          <p>
            저희 예방 팀은 위와 같은 분석을 통해 사용자들에게 유의미한 정보를
            제공하고, 전세 사기로부터 안전한 선택을 할 수 있도록 돕고자 합니다.
            향후에도 지속적으로 데이터를 분석하고 업데이트하여 사용자들에게 더
            나은 서비스를 제공할 수 있도록 노력하겠습니다. 저희 서비스를 통해
            사회 초년생들이 전세 사기 피해를 예방하고 안전하게 거주할 수 있기를
            바랍니다.
          </p>
        </InsightArticle>
      </section>
    </>
  );
};

export default InsightModel2Page;
