import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./styles.less";

import { SearchMes } from "@/actions/Urban_information_H";
import { SearchAdd } from "@/actions/searchAddress_H";
import { ListAddress } from "@/actions/list_address_H";


export default connect(
  (state) => {
    console.log(state);
    return {
      name: state.search.val.name,
      souval: state.searchAddress.souval,
    };
  },
  {
    SearchMes,
    SearchAdd,
    ListAddress
  }
)(SearchCity);

function SearchCity(props) {
  const togo = () => {
    props.history.push("/homePage");
  };
  let [list, setList] = useState([]);

  //   默认请求数据
  useEffect(() => {
    if (localStorage.getItem("arr")) {
      let arr = JSON.parse(localStorage.getItem("arr"));
      setList(arr);
    }

    let idFn = props.location.search.substr(1);
    props.SearchMes(idFn);
  }, []);

  // 定义一个bool变量
  const [isBool, setisBool] = React.useState(false);

  // 搜索提交事件
  const submitTo = () => {
    let zhi = document.querySelector(".zhi") || "";

    if (zhi.value) {
      let idFn = props.location.search.substr(1);
      // console.log("?city_id="+idFn+"&keyword="+zhi.value+"&type=search")
      props.SearchAdd(
        "?city_id=" + idFn + "&keyword=" + zhi.value + "&type=search"
      );

      setisBool(true);
      // 判断是否有搜索数据
      // if (props.souval.length !== 0) {
      //   setisBool(true);
      // }
    }
  };

  let arr = [];
  const souSuo = (val) => {
    // 判断本地存储是否为空
    if (localStorage.getItem("arr")) {
      // 取上一次值
      arr = JSON.parse(localStorage.getItem("arr"));
    }
    // push点击数据
    let brr = arr.filter(v=>{
      return v.name !== val.name
    })
    brr.push(val)

    localStorage.setItem("arr", JSON.stringify(brr));
    // console.log(val)
    props.ListAddress(val)
    props.history.push("/takeout?");
  };

  // 清空历史记录
  const btnKong = () => {
    localStorage.removeItem("arr");
    setList([]);
    setisBool(false);
  };
  return (
    <div className="wrap">
      <div className="HeadTitle">
        <div className="Headlef" onClick={togo}>
          返回
        </div>
        <div className="Headmid">{props.name}</div>
        <div className="Headrig" onClick={togo}>
          切换城市
        </div>
      </div>
      <section>
        <div className="Section">
          <input
            type="text"
            placeholder="输入学校、商务楼、地址"
            className="zhi"
            required
          />
          <button onClick={submitTo}>提交</button>
        </div>
        <p style={{ display: isBool ? "none" : "block" }}>搜索历史</p>

        {/* 第一个 */}
        <div
          className="city_jilu"
          style={{ display: isBool ? "block" : "none" }}
        >
          {props.souval.length
            ? props.souval.map((v, i) => {
                return (
                  <p key={i} onClick={() => souSuo(v)}>
                    <span>{v.name}</span>
                    <text>{v.address}</text>
                  </p>
                );
              })
            : "搜索地址不存在"}
        </div>
        {/* 第二个 */}
        <div className="nullfn" style={{ display: isBool ? "none" : "block" }}>
          <div className="city_jilu">
            {list &&
              list.map((v, i) => {
                return (
                  <p key={i} onClick={() => souSuo(v)}>
                    <span>{v.name}</span>
                    <text>{v.address}</text>
                  </p>
                );
              })}
          </div>
          <div>
            <span onClick={btnKong}>清空所有</span>
          </div>
        </div>
      </section>
    </div>
  );
}
