import React from 'react'
import "./style.less";
import { Rate } from "antd";
function Index(props) {
    return (
        <div>
            {
                props.data.map((v, i) => {
                    return (
                      <dl className="Restaurants_dlist" key={v.id}>
                        <dt>
                          <img src={"//elm.cangdu.org/img/" + v.image_path} alt="" />
                        </dt>
                        <dd>
                          <div className="titleClass">
                            <span className="brand">品牌</span>
                    <b className="result">{v.name}</b>
                            <span className="surely">
                              <span>保</span>
                              <span>准</span>
                              <span>票</span>
                            </span>
                          </div>
                          <div className="gradeBox">
                            <Rate allowHalf defaultValue={v.rating} style={{fontSize:"0.2rem"}}/>
                            <span className="grade">{v.rating}</span>
                    <span className="month_sales">月售{v.recent_order_num}单</span>
                            <span className="deliveryBox">
                              <span className="delivery_style">蜂鸟专送</span>
                              <span className="delivery_style2">准时达</span>
                            </span>
                          </div>
                          <div className="distribution">
                    <span>¥20起送 / {v.piecewise_agent_fee.tips}</span>
                            <span>
                    <span className="kilometre">{v.distance}</span><span className="hourse">{v.order_lead_time}</span>
                            </span>
                          </div>
                        </dd>
                      </dl>
                    );
                  })
            }
        </div>
    )
}

export default Index
