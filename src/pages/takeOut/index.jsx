import React from "react";
import HeadTitle from "@/components/HeadTitle";
import FootRoute from "@/components/FootRoute";
import Swiper from '@/components/takeOutSwiper'
import { Button } from 'antd-mobile';
function Index() {
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
