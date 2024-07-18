import { InsightArticle } from "./_component/InsigntArticle";
import { ARTICLE_LIST } from "../../../constants/index";
import { SeparatorFull } from "../../components/SeparatorFull";

const InsightModel1Page = () => {
  return (
    <>
      <h1 className="pt-10 opacity-90 text-3xl text-center font-semibold">
        {ARTICLE_LIST[0].title}
      </h1>
      <header className="pt-10 px-10 pb-5 flex gap-5">
        <img
          src={ARTICLE_LIST[0].imageUrl}
          width={64}
          height={64}
          alt={ARTICLE_LIST[0].author}
        />
        <div className="flex flex-col justify-evenly">
          <span>작성자: {ARTICLE_LIST[0].author}</span>
          <div className="text-sm"> {ARTICLE_LIST[0].date}</div>
        </div>
      </header>
      <SeparatorFull />
      <section className="mt-10 px-20 break-keep">
        <p>
          저희 서비스에서 데이터 수집 및 전처리, 인프라 정보 추가, 모델 훈련 및
          튜닝, 모델 저장 및 배포, 결과 분석 및 시각화의 단계를 거쳐 적정 전세
          가격을 예측하는 모델을 구축하였습니다. PyCaret을 사용하여 모델을
          손쉽게 비교하고 튜닝하였으며, 최종적으로 최적화된 모델을 통해 높은
          정확도의 예측 결과를 도출할 수 있었습니다.
        </p>
      </section>
      <section className="p-20 space-y-10">
        <InsightArticle title={"1. 전세가 예측 ML 모델 성능 비교"}>
          <table className="border table-fixed">
            <thead>
              <tr className="bg-blue-100 border">
                <td className="px-4 py-2 border-r">모델약어</td>
                <td className="px-4 py-2 border-r">모델명</td>
                <td className="px-4 py-2 border-r">R2</td>
                <td className="px-4 py-2">RMSLE</td>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="px-4 border-r">xgboost</td>
                <td className="px-4 border-r">Extreme Gradient Boosting</td>
                <td className="px-4 border-r">0.9183</td>
                <td className="px-4 border-r">0.2015</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">rf</td>
                <td className="px-4 border-r">Random Forest Regressor</td>
                <td className="px-4 border-r">0.9180</td>
                <td className="px-4 border-r">0.1940</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">et</td>
                <td className="px-4 border-r">Extra Tress Regressor</td>
                <td className="px-4 border-r">0.9148</td>
                <td className="px-4 border-r">0.1994</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">lightgbm</td>
                <td className="px-4 border-r">
                  Light Gradient Boosting Machine
                </td>
                <td className="px-4 border-r">0.9129</td>
                <td className="px-4 border-r">0.2161</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">knn</td>
                <td className="px-4 border-r">K Neighbors Regresssor</td>
                <td className="px-4 border-r">0.8846</td>
                <td className="px-4 border-r">0.2383</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">dt</td>
                <td className="px-4 border-r">Decision Tree Regresssor</td>
                <td className="px-4 border-r">0.8665</td>
                <td className="px-4 border-r">0.2519</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">gbr</td>
                <td className="px-4 border-r">Gradient Boosting Regressor</td>
                <td className="px-4 border-r">0.8540</td>
                <td className="px-4 border-r">0.2553</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">lr</td>
                <td className="px-4 border-r">Linear Regression</td>
                <td className="px-4 border-r">0.7273</td>
                <td className="px-4 border-r">0.4966</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">ridge</td>
                <td className="px-4 border-r">Ridge Regression</td>
                <td className="px-4 border-r">0.7253</td>
                <td className="px-4 border-r">0.5099</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">llar</td>
                <td className="px-4 border-r">Lasso least Angle Regression</td>
                <td className="px-4 border-r">0.7253</td>
                <td className="px-4 border-r">0.5113</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">br</td>
                <td className="px-4 border-r">Bayesian Ridge</td>
                <td className="px-4 border-r">0.7253</td>
                <td className="px-4 border-r">0.5127</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">lasso</td>
                <td className="px-4 border-r">Lasso Regression</td>
                <td className="px-4 border-r">0.7252</td>
                <td className="px-4 border-r">0.5134</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">huber</td>
                <td className="px-4 border-r">Huber Regressor</td>
                <td className="px-4 border-r">0.7068</td>
                <td className="px-4 border-r">0.3846</td>
              </tr>
              <tr className="border bg-slate-50">
                <td className="px-4 border-r">par</td>
                <td className="px-4 border-r">Passive Aggressive Regressor</td>
                <td className="px-4 border-r">0.7002</td>
                <td className="px-4 border-r">0.3716</td>
              </tr>
              <tr className="border">
                <td className="px-4 border-r">en</td>
                <td className="px-4 border-r">Elastic Net</td>
                <td className="px-4 border-r">0.6815</td>
                <td className="px-4 border-r">0.3703</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-10">
            R2와 RMSLE 값을 기준으로 모델 훈련 결과를 봤을 때 PyCaret의 LightGBM
            모델과 Random Forest Regressor 값이 가장 좋게 나왔고 두 모델 중
            Extreme Gradient Boosting 모델을 구축해 적정 전세 가격을 제공합니다.
          </p>
          <img
            className="mt-5"
            src="/insight/model-1/flow.png"
            width={500}
            height={500}
          />
          <p className="mt-5">
            해당 서비스에서 사용한 모델은 Extreme Gradient Boosting, 줄여서
            XGBoost라고 불리는 모델은 트리 기반의 앙상블 학습 방법 중
            하나입니다. XGBoost는 기존의 Gradient Boosting 알고리즘을 개선하여
            속도와 성능 면에서 효율적으로 설계되었습니다. 위 사진은 해당 모델의
            파이프라인입니다.
          </p>
          <p className="mt-5">
            주요 특징으로는{" "}
            <strong>
              트리 앙상블 방법, Gradient Boosting 기반, Regularization, 자동
              가지치기, 병렬 처리, 결측치 처리입니다.
            </strong>
          </p>
        </InsightArticle>
        <InsightArticle title={"2. 검증곡선"}>
          <img
            src="/insight/model-1/validationcurve.png"
            width={500}
            height={500}
          />
          <p className="mt-5">
            위 이미지는 검증 곡선은 모델의 하이퍼파라미터에 따른 성능 변화를
            시각화한 그래프입니다. 이 그래프는 모델의 최적 하이퍼파라미터를
            선택하는 데 유용합니다. 검증 곡선은 하이퍼파라미터 값의 변화에 따라
            모델의 성능이 어떻게 변하는지를 보여줍니다. max_depth는 트리의 전체
            깊이입니다.
          </p>
          <p className="mt-5">
            max_depth 가 6일때부터 교차 검증 점수가 일정하고 훈련 데이터 점수는
            8~10 즈음부터 성능 차이가 없으므로, 해당 max_depth 는 7 쯤이
            적당합니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"3. 특징 중요도"}>
          <img
            src="/insight/model-1/featureimportance.png"
            width={500}
            height={500}
          />

          <p className="mt-5 w-full">
            위 그래프는 모델이 예측을 위해 사용한 특징의 상대적인 중요도를
            나타낸 것으로 어떤 특징이 모델의 예측에 가장 큰 영향을 미치는지
            확인할 수 있습니다. 중요한 특징을 파악함으로써 모델의 해석 가능성을
            높일 수 있습니다. 저희가 사용하는 모델에서는 임대면적과 자치구를 xgb
            모델에서 중요한 변수로 취급합니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"4. 예측 오차"}>
          <img
            src="/insight/model-1/predictionerror.png"
            width={500}
            height={500}
          />

          <p className="mt-5 w-full">
            실제 값과 예측 값의 비교를 시각화합니다. 이를 통해 예측이 실제 값에
            얼마나 근접한지, 예측이 잘못된 정도를 확인할 수 있습니다.
          </p>
          <p className="mt-5 w-full">
            완벽한 모델이라면 점들이 대각선(예측 값 = 실제 값) 위에 위치해야
            합니다. 저희 모델의 그래프는 점들이 대각선 (예측값=실제값) 위에
            위치해있으므로 예측이 실제 값에 매우 근접한 것을 알 수 있습니다.
          </p>
        </InsightArticle>

        <InsightArticle title={"5. 학습곡선"}>
          <img
            src="/insight/model-1/learning-curve.png"
            width={500}
            height={500}
          />
          <p className="mt-5 w-full">
            위 그래프는 모델의 성능을 훈련 데이터와 검증 데이터에 대해 각각
            시각화한 것으로 학습 과정에서 모델의 성능이 어떻게 변하는지
            보여줍니다. 훈련 데이터와 검증 데이터의 성능 차이를 통해
            과적합(overfitting)이나 과소적합(underfitting)을 확인할 수 있습니다.
            보통 데이터 크기가 커질수록 훈련 모델 성능은 떨어집니다.
          </p>

          <p className="mt-5 w-full">
            저희가 학습시킨 xgb 모델의 학습곡선을 보면 데이터 크기가 커질 수록
            훈련 점수가 미세하게 낮고 교차 검증 점수가 높아지는 것을 알 수
            있습니다.
          </p>

          <h4 className="w-full pt-5 text-xl font-medium">
            데이터 크기가 커질수록 훈련 점수가 낮아지는 이유
          </h4>
          <ol className="mt-5 pl-3">
            <li>
              <strong>복잡도 증가</strong>: 데이터가 많아지면 모델이 데이터를
              완벽하게 학습하기 어려워짐. 모델은 훈련 데이터에 과도하게 적합되어
              훈련 데이터에 대한 점수(정확도, R^2 등)가 낮아질 수도 있음
            </li>
            <li className="mt-5">
              <strong>일반화 향상</strong>: 데이터가 많으면 모델이 데이터의
              일반적인 패턴을 더 잘 학습할 수 있음. 따라서 훈련 데이터 외의
              데이터에 대한 성능(즉, 교차 검증 점수)이 더 좋아질 수 있지만, 훈련
              데이터에 대한 성능은 감소할 수 있음
            </li>
          </ol>

          <h4 className="w-full pt-5 text-xl font-medium">
            교차 검증 점수가 조금 높아지는 이유
          </h4>
          <ol className="mt-5 pl-3">
            <li>
              <strong>적은 데이터에서의 과적합 방지</strong>: 작은
              데이터셋에서는 모델이 특정 데이터에 너무 적합되어 일반화 능력이
              저하될 수 있음. 데이터가 많아지면 이러한 과적합 문제가 완화될 수
              있어 교차 검증 점수가 향상될 수 있음
            </li>
            <li className="mt-5">
              <strong>모델의 일반화 개선</strong>: 데이터가 많아지면 모델이
              데이터의 일반적인 특성을 더 잘 학습할 수 있음. 따라서 교차 검증
              점수는 더 높아질 수 있음.
            </li>
            <li className="mt-5">
              <strong>결론</strong>: 데이터 크기가 커질수록 훈련 점수는
              일반적으로 낮아지지만, 교차 검증 점수는 일반적으로 향상될 수 있음.
              이는 모델이 데이터의 일반적인 패턴을 더 잘 학습하고 일반화할 수
              있기 때문임. 따라서 데이터 크기가 증가할수록 모델의 성능 개선에
              긍정적인 영향을 미칠 수 있음.
            </li>
          </ol>

          <h4 className="w-full pt-5 text-xl font-medium">결론</h4>
          <p className="pl-3 mt-5">
            저희가 구축한 XGBoost 모델은 전세 가격 예측에서 탁월한 성능을
            보였습니다. 데이터의 크기가 커질수록 훈련 점수는 미세하게
            낮아지지만, 교차 검증 점수가 높아지는 경향을 통해 모델의 일반화
            능력이 향상됨을 확인할 수 있었습니다. 이러한 결과는 모델이 데이터의
            일반적인 패턴을 더 잘 학습하고, 과적합 문제를 완화하여 실제 예측에서
            높은 정확도를 유지할 수 있음을 시사합니다. 따라서, XGBoost 모델을
            통해 예측한 적정 전세 가격은 신뢰할 수 있는 결과를 제공하며, 이는
            서비스 사용자들에게 큰 가치를 제공할 것입니다. 모델의 지속적인
            개선과 데이터의 추가 수집을 통해 더욱 정확하고 신뢰성 있는 예측을
            제공하겠습니다.
          </p>
        </InsightArticle>
      </section>
    </>
  );
};

export default InsightModel1Page;
