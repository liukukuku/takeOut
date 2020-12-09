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
      <Button type="primary">111</Button>
      
      </section>
      <FootRoute />
    </div>
  );
}

export default Index;
