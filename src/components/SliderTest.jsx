import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Box, Button } from "@chakra-ui/react";

let checkHugList = [
  "임대인과 임차인이 한국인입니다",
  "임차인은 개인입니다",
  "전세계약서 상 임대인이 1인입니다",
  "전세계약기간이 1년 이상이고, 계약기간이 절반 이상 남았습니다",
  "임차인이 공사 업무협약기관(SGI서울보증) 외 타 금융기관의 보증부 전세대출을 받지 않았습니다",
  "임차인이 전세보증금을 모두 지불했습니다",
  "공인중개사를 통해 계약했습니다",
  "임차인이 전입신고와 확정일자를 받았습니다",
  "보증신청주택이 구분등기된 아파트, 주거용 오피스텔, 연립·다세대주택, 단독·다중·다가구주택, 노인복지주택 중 하나입니다",
  "전세목적물의 건물과 토지가 모두 임대인의 소유입니다",
  "전세목적물에 경매, 압류, 가압류, 가처분, 가등기 등 권리침해 사항이 없습니다",
  "전세목적물에 전세권이 설정되지 않았습니다",
  "전입세대확인서에 임차인세대 외 타세대의 전입내역이 없습니다.(단독·다중·다가구주택 제외)",
  "건축물대장 상 위반건축물이 아닙니다.(아파트 제외)",
  "임대인이 기존 임차인의 전세보증금 반환 목적 대출을 받았습니다.",
  "역전세 반환대출을 받는 임대인과 후속 세입자가 체결하는 신규 전세계약(기존 전세계약의 감액갱신 포함)입니다",
  "임차인이 HUG 전세금안심대출보증에 가입하지 않았습니다",
];

export default function SliderTest() {
  return (
    <div
      style={{
        width: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Swiper
        pagination={{
          type: "fraction",
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {checkHugList.map((check, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {check}
            </SwiperSlide>
          );
        })}
        <SwiperSlide>보증 보험 가입이 가능합니다!</SwiperSlide>;
        <CustomNavigationButtons />
      </Swiper>
    </div>
  );
}

const CustomNavigationButtons = () => {
  const swiper = useSwiper();

  return (
    <Box>
      <Button onClick={() => swiper.slidePrev()} mr={2}>
        Previous
      </Button>
      <Button onClick={() => swiper.slideNext()}>Next</Button>
    </Box>
  );
};