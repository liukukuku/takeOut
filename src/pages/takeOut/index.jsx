import React from "react";
import HeadTitle from "@/components/HeadTitle";
import FootRoute from "@/components/FootRoute";
import Swiper from "@/components/TakeOutSwiper";
import NearbyMerchant from "@/components/NearbyMerchant";
import './styles.less'
import { connect } from "react-redux";



export default 
connect(state=>{
  // console.log(state)
},{

})

(Index)
function Index(props) {
  
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

