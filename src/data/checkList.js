// btn은 무시해도 됨
// result는 백에서 보내주는 거에 따라 조회 안될 경우 3, 조회 될 경우 1 뭐 이런식으로 프론트에서 하려함
// 보증보험은 프론트에서 다 해결
// 우선 이렇게 테스트로 프론트에서 띄우고 있었음!
let checkList = [
  {
    title: "적정전세가",
    content: "예방 AI가 적정 전세가격을 예측했어요",
    btn: "자세히보기",
    result: 1,
    price: "200000000",
    hakGun: "?",
    chiAn: "?",
    convenienceStore: "?",
    bus: "?",
    subway: "?",
    mart: "?",
    scroll: 1024,
    imgUrl: "/icons/house.png",
    duration: 0.3,
    delay: 0,
  },
  {
    title: "전세가율",
    content: "전세가율 확인이 끝났어요",
    btn: "자세히보기",
    result: 1, // 확인 완료
    rate: "70%",
    scroll: 2048,
    imgUrl: "/icons/presentation.png",
    duration: 0.25,
    delay: 0.05,
  },
  {
    title: "건축물대장",
    content: "건축물대장을 조회하세요",
    btn: "자세히보기",
    result: 3, // 주의 필요 -> 조회 안 될 경우 데이터 어떻게 오는지?
    // 어떤 정보 볼 수 있는지 몰라서 주는대로 프론트에 넣겠음...ㅠ
    scroll: 3096,
    imgUrl: "/icons/book.png",
    duration: 0.35,
    delay: 0.1,
  },
  {
    title: "공인중개사",
    content: "공인중개사 확인이 완료됐어요",
    btn: "자세히보기",
    result: 1, // 확인 완료 -> 조회 안될 경우 데이터 어떻게 오는지?
    scroll: 3096,
    imgUrl: "/icons/contract.png",
    duration: 0.35,
    delay: 0.15,
  },
  {
    title: "등기부등본",
    content: "예방 AI가 적정 전세가격을 예측했어요",
    btn: "확인 필요",
    result: 2, // 확인 필요
    // 다운로드 할 수 있는 binary나 url 필요할 듯?
    scroll: 3096,
    imgUrl: "/icons/stamp.png",
    duration: 0.4,
    delay: 0.15,
  },
  {
    title: "보증보험",
    content: "보증 보험 가입 여부를 확인하세요",
    btn: "확인 필요",
    result: 2, // 확인 필요
    // 프론트에서 모달 띄울 예정이라 ㄱㅊ
    scroll: 3096,
    imgUrl: "/icons/to-do-list.png",
    duration: 0.3,
    delay: 0.2,
  },
];

export { checkList };
