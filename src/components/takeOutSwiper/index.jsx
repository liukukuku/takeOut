import React, { Component } from "react";
import Swiper from "swiper/js/swiper.js";
import "swiper/css/swiper.css";
import { connect } from "react-redux";
import { Getentry } from "@/actions/Actions_getentry";
import { NavLink } from 'react-router-dom'
import "./style.less";
export class index extends Component {
  state = {
    data: [],
    obj: [],
  };
  async componentDidMount() {
    await this.props.Getentry();
    let datas = this.props.Reducer_getentry.data;
    let obj = [];
    let i = 0;
    while (datas.length > 0) {
      if (datas.length>=8) {
        obj[i] = datas.splice(0, 8);
      } else {
        obj[i] = datas;
        break;
      }
      i++;
    }
    this.setState({
      obj: obj,
    });
    console.log(obj)
    new Swiper(".swiper-container", {
      loop: true, //无缝轮播
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }

  render() {
    const { obj } = this.state;
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {obj.map((m, p) => {
            return (
              <div className="swiper-slide" key={p}>
                {obj[p].map((v, i) => {
                  return (
                    <NavLink to={'/restaurants/'+v.id} key={v.id}>
                      <dl>
                        <dt>
                          <img
                            src={"https://fuss10.elemecdn.com" + v.image_url}
                            alt=""
                          />
                        </dt>
                        <dd>{v.title}</dd>
                      </dl>
                    </NavLink>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    );
  }
}
export default connect(({ Reducer_getentry }) => ({ Reducer_getentry }), {
  Getentry,
})(index);
