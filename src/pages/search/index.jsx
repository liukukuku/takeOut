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

const [isBool, setisBool] = React.useState(true);
const [isvalue, setisvalue] = React.useState('');

  const btnTi = () => {
    //   叉叉的隐藏
    setisBool(true)
    // console.log(isvalue)
    console.log(props.citygeohash);
    // console.log("geohash=" + props.citygeohash + "&keyword=" + isvalue)
    props.Searchshops("geohash="+props.citygeohash+"&keyword="+isvalue);
  };


  const onChange = (e) => {
    setisvalue(e.target.value)
    //  叉叉的显示
    setisBool(false)
  }
  const onFocus = () => {
    setisBool(false)
  }
  const onBlur = () => {
    setisBool(false)
  }
  // console.log(props.list)
  return (
    <div>
      <HeadTitle val={"搜索"}></HeadTitle>
      <section>
        <div className="s_one">
          <Input
            type="text"
            placeholder="请输入商家或美食名称"
            value={isvalue}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
          />
          <h1 style={{ display: isBool ? "none" : "block" }}>×</h1>
          <Button type="primary" onClick={btnTi}>
            提交
          </Button>
        </div>
        <div className="Slist">{
            props.list.length?
         props.list.map((v, i) => {
              return (
              <dl key={v.id}>
                <dt>
                  <img src = {"//elm.cangdu.org/img/"+v.image_path} />
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
            :<div className="ooo">很抱歉！无搜索结果</div>
        }
        </div>
      </section>
      <FootRoute />
    </div>
  );
}
