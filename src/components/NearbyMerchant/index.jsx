import React, { useEffect } from "react";
import "./styles.less";
import { connect } from "react-redux";
import { GetNearbymerchant } from "@/actions/Actions_NearbyMerchant";
import Restaurants from "@/components/Restaurants"
export default connect((state) => ({ data: state.Reducer_getNearbymerchant }), {
    GetNearbymerchant,
})(Index);
function Index(props) {
  const { GetNearbymerchant, data } = props;
  useEffect(() => {
    GetNearbymerchant({ latitude: 31.22967, longitude: 121.4762 });
  }, []);
  return (
    <div className="NearbyMerchant">
      <dl className="MerchantTitle">
        <dt className="iconfont icon-tubiaolunkuo-"></dt>
        <dd>附近商家</dd>
      </dl>
      <Restaurants data={data.data} />
    </div>
  );
}
