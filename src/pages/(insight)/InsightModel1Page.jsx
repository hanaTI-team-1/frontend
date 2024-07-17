import { Separator } from "../../components/Separator";
import { InsightArticle } from "./_component/InsigntArticle";

const InsightModel1Page = () => {
  return (
    <main className="min-h-full flex justify-center bg-slate-50">
      <div className="pt-32 min-h-full h-full max-w-[800px] w-full border-l border-r shadow-md bg-white">
        <h1 className="opacity-90 text-3xl text-center font-semibold">
          전세가격 예측모델 심층분석
        </h1>
        <header className="pt-10 px-20 pb-5 flex gap-5">
          <div className="text-sm font-semibold w-14 h-14 rounded-full flex items-center justify-center bg-emerald-500">
            예방
          </div>
          <div className="flex flex-col justify-evenly">
            <div>작성자: 예방 AI 개발 팀</div>
            <div className="text-sm">2024.07.17</div>
          </div>
        </header>
        <Separator />
        <section className="px-20 break-keep">
          <h2>
            이번 리포트에서는 저희 예방팀에서 적정전세가격 예측 모델을 어떤
            방식으로 학습시켰는지에 대해 공유드리고자 합니다. 등등 대충 설명
            적어줘라 송류야
          </h2>
        </section>
        <section className="p-20 space-y-10">
          <InsightArticle title={"1. 검증곡선"}>
            <img
              src="/insight/model-1/validationcurve.png"
              width={500}
              height={500}
            />
            <p className="px-10 mt-5">
              위 이미지는 검증 곡선은 모델의 하이퍼파라미터에 따른 성능 변화를
              시각화한 그래프입니다. 이 그래프는 모델의 최적 하이퍼파라미터를
              선택하는 데 유용합니다. 검증 곡선은 하이퍼파라미터 값의 변화에
              따라 모델의 성능이 어떻게 변하는지를 보여줍니다. max_depth 가
              6일때부터 교차 검증 점수가 일정하고 훈련 데이터 점수는 8~10
              즈음부터 성능 차이가 없으므로 max_depth가 몰라 설명더 써주셈
            </p>
          </InsightArticle>

          <InsightArticle title={"2. 잔차"}>
            <img
              src="/insight/model-1/residuals.png"
              width={500}
              height={500}
            />
            <ul className="px-10 mt-5">
              <li>의미: 실제 값과 예측 값의 차이를 나타냅니다.</li>
              <li className="mt-2">
                목적: 잔차가 특정 패턴을 보이지 않고 무작위로 분포해야 좋은
                모델입니다. 잔차 그래프를 통해 모델이 특정 패턴이나 편향을
                가지고 있는지 확인할 수 있습니다.
              </li>
            </ul>
          </InsightArticle>

          <InsightArticle title={"3. 특징 중요도"}>
            <img
              src="/insight/model-1/featureimportance.png"
              width={500}
              height={500}
            />
            <hgroup className="px-10 pt-5 space-y-5">
              <ul>
                <li>
                  의미: 모델이 예측을 위해 사용한 특징의 상대적인 중요도를
                  나타냅니다.
                </li>
                <li className="mt-2">
                  어떤 특징이 모델의 예측에 가장 큰 영향을 미치는지 확인할 수
                  있습니다. 중요한 특징을 파악함으로써 모델의 해석 가능성을 높일
                  수 있습니다.
                </li>
              </ul>
              <p>
                데이터 크기에 따른 모델 성능 변화를 보여줌. 데이터 크기가
                커질수록 훈련 모델 성능은 떨어짐
              </p>
            </hgroup>
          </InsightArticle>

          <InsightArticle title={"4. 학습곡선"}>
            <img
              src="/insight/model-1/learning-curve.png"
              width={500}
              height={500}
            />
            <hgroup className="px-10 pt-5 space-y-5">
              <ul>
                <li>
                  의미: 모델의 성능을 훈련 데이터와 검증 데이터에 대해 각각
                  시각화한 것입니다.
                </li>
                <li className="mt-2">
                  목적: 학습 과정에서 모델의 성능이 어떻게 변하는지 보여줍니다.
                  훈련 데이터와 검증 데이터의 성능 차이를 통해
                  과적합(overfitting)이나 과소적합(underfitting)을 확인할 수
                  있습니다.
                </li>
              </ul>
              <p>
                데이터 크기에 따른 모델 성능 변화를 보여줌. 데이터 크기가
                커질수록 훈련 모델 성능은 떨어짐
              </p>

              <h4 className="pt-5 text-xl font-medium">
                데이터 크기가 커질수록 훈련 점수가 낮아지는 이유
              </h4>
              <ol className="pl-3">
                <li>
                  <strong>복잡도 증가</strong>: 데이터가 많아지면 모델이
                  데이터를 완벽하게 학습하기 어려워짐. 모델은 훈련 데이터에
                  과도하게 적합되어 훈련 데이터에 대한 점수(정확도, R^2 등)가
                  낮아질 수도 있음
                </li>
                <li className="mt-2">
                  <strong>일반화 향상</strong>: 데이터가 많으면 모델이 데이터의
                  일반적인 패턴을 더 잘 학습할 수 있음. 따라서 훈련 데이터 외의
                  데이터에 대한 성능(즉, 교차 검증 점수)이 더 좋아질 수 있지만,
                  훈련 데이터에 대한 성능은 감소할 수 있음
                </li>
              </ol>

              <h4 className="pt-5 text-xl font-medium">
                교차 검증 점수가 조금 높아지는 이유
              </h4>
              <ol className="pl-3">
                <li>
                  <strong>적은 데이터에서의 과적합 방지</strong>: 작은
                  데이터셋에서는 모델이 특정 데이터에 너무 적합되어 일반화
                  능력이 저하될 수 있음. 데이터가 많아지면 이러한 과적합 문제가
                  완화될 수 있어 교차 검증 점수가 향상될 수 있음
                </li>
                <li className="mt-2">
                  <strong>모델의 일반화 개선</strong>: 데이터가 많아지면 모델이
                  데이터의 일반적인 특성을 더 잘 학습할 수 있음. 따라서 교차
                  검증 점수는 더 높아질 수 있음.
                </li>
              </ol>

              <h4 className="pt-5 text-xl font-medium">결론</h4>
              <p className="pl-3">
                데이터 크기가 커질수록 훈련 점수는 일반적으로 낮아지지만, 교차
                검증 점수는 일반적으로 향상될 수 있음. 이는 모델이 데이터의
                일반적인 패턴을 더 잘 학습하고 일반화할 수 있기 때문임. 따라서
                데이터 크기가 증가할수록 모델의 성능 개선에 긍정적인 영향을 미칠
                수 있음.
              </p>
            </hgroup>
          </InsightArticle>
        </section>
      </div>
    </main>
  );
};

export default InsightModel1Page;
