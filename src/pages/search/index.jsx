import React from "react";
import FootRoute from "@/components/FootRoute";
import HeadTitle from "@/components/HeadTitle";
import { Button, Input } from "antd";
import "./styles.less";
import { connect } from "react-redux";

import { Searchshops } from "@/actions/searchShops_H";

export default connect(
  (state) => {
    console.log(state);
    return {
      citygeohash: state.List_Address.str.geohash,
      list: state.searchShop.list,
    };
  },
  {
    Searchshops,
  }
)(Search);

function Search(props) {
  const btnTi = () => {
    let inputVal = document.querySelector(".inputVal");
    console.log(inputVal.value);
    console.log(props.citygeohash);

    props.Searchshops(
      "geohash=" + props.citygeohash + "&keyword=" + inputVal.value
    );
  };
//   console.log(props.list)
  return (
    <div>
      <HeadTitle val={"搜索"}></HeadTitle>
      <section>
        <div className="s_one">
          <Input
            type="text"
            placeholder="请输入商家或美食名称"
            className="inputVal"
          />
          <Button type="primary" onClick={btnTi}>
            提交
          </Button>
        </div>
        <div className="Slist">{
         props.list.map((v, i) => {
              return (
              <dl key={v.id}>
                <dt>
                  <img src = "//elm.cangdu.org/img/16831f7eda025299.jpg" />
                </dt>
                <dd>
                  <p>{v.name}</p>
                  <p>月售{v.recent_order_num}单</p>
                  <p>
                    {v.float_minimum_order_amount}起送/距离{v.distance}
                  </p>
                </dd>
              </dl>
              )
            })
        }
        </div>
      </section>
      <FootRoute />
    </div>
  );
}
