import React from "react";
import HeadTitle from "@/components/HeadTitle";
import FootRoute from "@/components/FootRoute";
import Swiper from "@/components/TakeOutSwiper";
import NearbyMerchant from "@/components/NearbyMerchant";
import './styles.less'
function Index() {
  return (
    <div>
      <HeadTitle></HeadTitle>
      <section>
        <Swiper />
        <NearbyMerchant />
      </section>
      <FootRoute />
    </div>
  );
}

export default Index;
