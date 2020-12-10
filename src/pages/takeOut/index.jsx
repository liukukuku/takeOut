import React from "react";
import HeadTitle from "@/components/HeadTitle";
import FootRoute from "@/components/FootRoute";
import Swiper from '@/components/takeOutSwiper'
// import { Button } from 'antd-mobile';
// import qs from 'qs'
function Index(props) {
  console.log((props.location.search).substr(1))
  return (
    <div>
      <HeadTitle></HeadTitle>
      <section>
      <Swiper></Swiper>
      </section>
      <FootRoute />
    </div>
  );
}

export default Index;
