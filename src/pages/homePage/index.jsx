import { connect } from "react-redux";
import React, { useEffect } from "react";
import qs from "qs";
import { HomePgs, HomePgs1, HomePgs2 } from "@/actions/homePg";
import HeadTitle from "@/components/HeadTitle";

import "./styles.less";

export default connect(
  (state) => {
    console.log(state);
    return {
      val: state.home.val,
      val1: state.home.val1,
      val2: state.home.val2,
    };
  },
  {
    HomePgs,
    HomePgs1,
    HomePgs2,
  }
)(HomePage);

function HomePage(props) {
  useEffect(() => {
    let obj = {
      type: "guess",
    };
    let obj1 = {
      type: "hot",
    };
    let obj2 = {
      type: "group",
    };
    let str = qs.stringify(obj);
    let str1 = qs.stringify(obj1);
    let str2 = qs.stringify(obj2);

    props.HomePgs(str);
    props.HomePgs1(str1);
    props.HomePgs2(str2);
  }, []);
  

  const cityGo = (val) => {
    // console.log(val)
    localStorage.setItem("Id",val.id)
    props.history.push("/searchCity?"+val.id)
  }
  return (
    <div className="wrap">
      <header>

      <HeadTitle />
      </header>
      <section>

      <div className="home_city_guess">
        <p>当前定位城市</p>
        <p>定位不准时，请在城市列表选择</p>
      </div>
      {/* 定位城市 */}
      <div className="home_city" 
        onClick={()=>cityGo(props.val)
      }>{props.val.name}</div>
      {/* 热门城市 */}
      <div className="home_city_hot">
        <p>热门城市</p>
        <div>
          {props.val1.length &&
            props.val1.map((v, i) => {
              return <p key={v.id} onClick={()=>cityGo(v)}> {v.name}</p>;
            })}
        </div>
      </div>

      <div className="home_city_group">
        {props.val2.length &&
          props.val2.map((v, i) => {
            return (
              <div key={i}>
                <p className="ying">{v.name}</p>
                <div>
                  {v.data.map((j, k) => {
                    return <p onClick={()=>cityGo(j)} key={j.id}>{j.name}</p>;
                  })}
                </div>
              </div>
            );
          })}
      </div>
      </section>
    </div>
  );
}
