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
          저희 서비스에서 데이터 수집 및 전처리, 인프라 정보 추가, 모델 훈련 및 튜닝 모델에 
          저장 및 배포, 결과 분석 및 시각화 단계를 거쳐 매물 추천 모델을 구축하였습니다. 예방은 빠른 서비스
          속도를 위해 PyCare의 Kmeans Clustering 모델을 사용하여 군집화를 진행하였고 최적화된 모델을 통해 사용자의 요구에 맞는
          매물을 도출할 수 있었습니다.
        </p>
      </section>
      <section className="p-20 space-y-10">
        <InsightArticle title={"1. 최적의 K개 수 분석"}>
          <img src="/insight/model-2/el_plot.png" width={500} height={500} />
          <p className="mt-5">
            해당 그래프는 elbow 그래프로 최적의 클러스터의 개수를 파악하는데 사용되는 기법중 하나입니다. 이를 통해
            k가 6개일때 왜곡 점수가 완만하게 줄어들어 k개수를 늘려도 왜곡 점수의 감소율이 크게 줄어든다는 것을 확인 할 수 있었습니다.
            {/* 해당 그림은 데이터가 좌표상에서 어느 위치에 있는지를 나타내는 그래프 입니다. 위 그림을 보면
            clustering 모델이 데이터를 총 4가지 유형을 나눈 것으로 확인 할 수 있습니다. */}
          </p>

          <p className="mt-5 text-xs opacity-40">
            * 왜곡 점수 : 각점과 그 점이 속한 클러스터의 중심 간의 거리의 합을 계산한 점수. 점수가 낮을 수록 더 밀집되어 있음을 나타냄
          </p>

        </InsightArticle>

        <InsightArticle title={"2. 실루엣 플롯 클러스터 시각화 k-6"}>
          <img src="/insight/model-2/sil_plot_6.png" width={500} height={500} />
          <p className='mt-5'>
            실루엣 플롯은 클러스터를 시각적으로 평가하는데 사용되는 플롯입니다. 해당 플롯을 통해 데이터가
            6개의 유형으로 나뉘어 진것을 확인 할 수가 있었습니다. 다만 특정 데이터의 개수가 너무 적고
            학습데이터의 변수와 개수가 같아 모델이 단순히 각 변수의 차이로 데이터를 나누는 것으로 판단되었습니다.
            해당 k개수로는 사용자에게 원활한 추천을 할 수 없을 것이라 판단되어 k개수를 수정하기로 결정했습니다. 
          </p>
        </InsightArticle>

        <InsightArticle title={"3. 실루엣 플롯 클러스터 시각화 k-4"}>
          <img src="/insight/model-2/sil_plot.png" width={500} height={500} />
          <p className="mt-5">
            해당 그래프는 k개수를 4개로 했을 때 그래프입니다. k가 6개일 때 보다 average score는 다소 떨어졌지만
            데이터가 고르게 분포되어 사용자에게 원활하게 매물을 추천해 줄 수 있을 것이라고 판단 되어 k개수를 4개로 결정했습니다.
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

        <InsightArticle title={"4. PCA 클러스터링 시각화"}>
          <img src="/insight/model-2/cluster_plot.png" width={500} height={500} />
          <p className="mt-5">
            해당 그래프틑 차원 축소된 2차원 공간에 클러스터링 결과를 시각화 한 그래프입니다. 각 점은 데이터 포인터를 나타내고,
            색상은 데이터가 속한 클러스터를 나타냅니다. 위 그래프를 보면 데이터들은 4개 유형을 비교적 잘 분리된 것을 확인할 수 있었고,
            위 수준이면 사용자에게 맞춤 매물을 추천해 줄 수 있을것이라고 판단되어 k개수를 4개로 추천을 진행했습니다.
          </p>
        </InsightArticle>

        <InsightArticle
          title={ "7. 클러스터 데이터 유형 분석"}
        > 
          <p className="mt-1">
            cluster 모델이 분류한 데이터를 분석하여 각 cluster가 어떤 특징을 가지고 있는지 boxplot 활용해 해석을 진행했습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"7-1. Cluster별 PRC 분포 분석"} className={"text-xs"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            각 클러스터 별로 PRC(가격) 데이터의 분포를 시각화했습니다. Cluster 1내에 PRC가 유의미하게
            높게 분포되어있는 것을 확인 할 수 있었고, 그외 다른 클러스터들도 조금식 차이를 보이는 것을 확인 할 수 있었습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"7-2. Cluster별 마트개수 분석"} className={"text-xs"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            각 클러스터 별로 마트 데이터의 분포를 시각화했습니다. Cluster0와 1 내 마트 데이터 개수가 고르게 분포되어있는 반면
            Cluster 2는 마트 개수가 높게 분포 되어있고, Cluster 2는 마트 개수가 낮게 분포되어있다는 사실을 발견할 수 있었습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"7-2. Cluster별 버스정거장개수 분석"} className={"text-xs"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            각 클러스터 별로 버스정거장개수 데이터의 분포를 시각화했습니다. 버스 정거장 개수는 다른 데이터에 비해 데이터의 분포가 유의미하게 차이가
            나는 것을 시각적으로 발견할 수 있었고, 그중 Cluster 2내 버스정거장개수 데이터가 가장 높게 분포되어있다는 사실 또한 발견할 수 가 있었습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"7-3. Cluster별 경찰서개수 분석"} className={"text-xs"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            각 클러스터 별로 경찰서개수 데이터의 분포를 시각화했습니다. 경찰서 개수 데이터는 다른 데이터에 비해 거의 클러스터 별로 크게 차이가 없고
            거의 동일한 분포를 가지고 있는 것을 확인 할 수 있었습니다. 그 중 Cluster 1이 유독 경찰서의 수 가 없는 것을 확인 할 수 있었습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"7-4. Cluster별 지하철 리 분석"} className={"text-xs"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            각 클러스터 별로 지하철거리 데이터의 분포를 시각화했습니다. 지하철 거리는 각 클러스터마다 조금식 편차가 있는 것을 시각적으로 확인 할 수 있었습니다.
            또한 Cluster 2와 3간에 지하철거리 데이터 분포가 유의미하게 차이나는 것을 발견할 수 있었습니다.  
          </p>
        </InsightArticle>

        <InsightArticle title={"해석"}>
          <p>
            boxplot 시각화를 바탕으로 군집별 해석을 진행했습니다.
          </p>
          <ol className='space-y-2'>
          <li>
            <strong>Cluster 0 : </strong> 해당 군집은 학교를 중요시 하는 유형입니다.
          </li>
          <li>
            <strong>Cluster 1 : </strong> 해당 군집은 전세가격에 PRC가 높으므로 금전적으로 여유가 있는 유형입니다.
          </li>
          <li>
            <strong>Cluster 2 : </strong> 해당 군집은 버스와 지하철 거리에 민감한 교통 민감 유형입니다.
          </li>
          <li>
            <strong>Cluster 3 : </strong> 해당 군집은 다른 군집들에 비해 특출나게 선호하는 것이 없는 무난한 유형입니다.
          </li>
          </ol>
        </InsightArticle>

        <InsightArticle title={ "결론"}> 
          <p className="mt-5">
            저희 팀은 Clustering
          </p>
        </InsightArticle>

        <InsightArticle title={"7-4. Cluster별 학교개수 분석"} className={"text-xs"}>
          <img src="/insight/graphs/구별범.png" width={500} height={500} />
          <p className="mt-5">
            각 클러스터 별로 학교개수 데이터의 분포를 시각화했습니다. 학교 개수 데이터는 유의미하게 큰 차이가 없었지만 Cluster 0이 다른 Cluster에
            비해 학교개수가 높게 분포 되어 있다는 사실을 발견할 수 있었습니다.
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
