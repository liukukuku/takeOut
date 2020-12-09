import React, { useEffect } from "react";
import "./style.less";
import { connect } from "react-redux";
import { Getrestaurants } from "@/actions/Actions_getrestaurants";
export default connect(
    (state) => ({data: state.Reducer_getrestaurants}), {
  Getrestaurants,
})(Index);
function Index(props) {
  const { Getrestaurants,data } = props;
  async function get() {
    await Getrestaurants({ latitude: 31.22967, longitude: 121.4762 })
    console.log(data)
  }
  useEffect(()=>{
    get()
  }, []);
  return <div>111</div>;
}
