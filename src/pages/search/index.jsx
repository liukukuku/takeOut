import React from "react";
import FootRoute from "@/components/FootRoute";
import HeadTitle from "@/components/HeadTitle";
import { Button, Input } from "antd";
import "./styles.less";
import { connect } from "react-redux";

import { Searchshops } from "@/actions/searchShops_H";
import { ShopList } from "@/actions/shopList_H";

import qs from 'qs'

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
    ShopList
  }
)(Search);

function Search(props) {
  // 叉是否隐藏变量
  const [isBool, setisBool] = React.useState(false);

  const [isvalue, setisvalue] = React.useState("");
  // 定义一个bool变量
  const [ismes, setismes] = React.useState(false);
  // 本地存储 历史记录
  let [datas, setdatas] = React.useState([]);

  function auto() {
    if (localStorage.getItem("footfn")) {
      let footfn = JSON.parse(localStorage.getItem("footfn"));
      setdatas(footfn);
    }
  }

  React.useEffect(() => {
    auto();
  }, []);

  // 提交按钮
  const btnTi = () => {

    // 切换
    setismes(true);
    props.Searchshops("geohash=" + props.citygeohash + "&keyword=" + isvalue);

    // 点击搜索，添加搜索内容为搜索记录
    if (localStorage.getItem("footfn")) {
      // 取上一次值
      footfn = JSON.parse(localStorage.getItem("footfn"));
    }
    // push点击数据
    let nfootfn = footfn.filter((v) => {
      return v !== isvalue;
    });
    nfootfn.push(isvalue);

    localStorage.setItem("footfn", JSON.stringify(nfootfn));
    auto();
    
  };

  const onChange = (e) => {
    setisvalue(e.target.value);
    //  叉叉的显示
    // setisBool(false)
  };

  // 点击 × 清空
  let footfn = [];
  const chaClicks = () => {
    // 点击×切换
    setismes(false);
    setisvalue("");
    // console.log(isvalue)
   
  };

  // 清空历史记录
  const btnKong = () => {
    localStorage.removeItem("footfn");
    setdatas([]);
  };
  // console.log(ismes)

  console.log(datas);
  const chahidden = (val) => {
    // console.log(val);
    for (var i = 0; i < datas.length; i++) {
      if (i === val) {
        datas.splice(i, 1);
      }
    }
    // console.log(datas);
    setdatas([...datas]);
    localStorage.setItem("footfn", JSON.stringify(datas));
  };

  // 点击搜索记录
  const againclick = (e) => {
    //  // 切换
     setismes(true);
     setisvalue(e.target.innerHTML)
     props.Searchshops("geohash="+props.citygeohash+"&keyword="+e.target.innerHTML);
  };


  const nextList = (val) => {
    // console.log(val)
    localStorage.setItem("dataOne",qs.stringify(val))
    props.history.push("/footList?"+ qs.stringify({id:val.id}))
    // console.log(props)
    // 本条数据
    // console.log(val)
    // 经度
    // console.log(val.longitude)
    // 纬度
    // console.log(val.latitude)

  }
  return (
    <div>
      <HeadTitle val={"搜索"}></HeadTitle>
      <section>
        <div className="s_one">
          <Input
            type="text"
            placeholder="请输入商家或美食名称"
            value={isvalue}
            onChange={onChange}
          />
          <h1 onClick={chaClicks} >×</h1>
          <Button type="primary" onClick={btnTi}>
            提交
          </Button>
        </div>
        {/* 第一个 */}
        <div className="Slist" style={{ display: ismes ? "block" : "none" }}>
          {props.list.length ? (
            props.list.map((v, i) => {
              return (
                <dl key={v.id} onClick={()=>nextList(v)}>
                  <dt>
                    <img src={"//elm.cangdu.org/img/" + v.image_path} />
                  </dt>
                  <dd>
                    <p>{v.name}</p>
                    <p>月售{v.recent_order_num}单</p>
                    <p>
                      {v.float_minimum_order_amount}起送/距离{v.distance}
                    </p>
                  </dd>
                </dl>
              );
            })
          ) : (
            <div className="ooo">很抱歉！无搜索结果</div>
          )}
        </div>
        {/* 第二个 */}
        <div className="nullfn" style={{ display: ismes ? "none" : "block" }}>
          <div className="city_jilu">
            {datas &&
              datas.map((v, i) => {
                return (
                  <div key = {i}>
                  <p key = {i} onClick={(e) => againclick(e)}>
                      {v}
                  </p><span onClick={() => 
                    chahidden(i)}>×</span>
                  </div>
                );
              })}
          </div>
          <div>
            <span onClick={btnKong}>清空所有</span>
          </div>
        </div>
      </section>
      <FootRoute />
    </div>
  );
}
