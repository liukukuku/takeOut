import React, { useEffect } from "react";
import "./style.less";
import { connect } from "react-redux";
import { Getrestaurants } from "@/actions/Actions_getrestaurants";
export default connect(
    (state) => ({state}), {
  Getrestaurants,
})(Index);
function Index(props) {
  const { Getrestaurants,state } = props;
  async function Getrestaurants(params) {
    await Getrestaurants({ latitude: 31.22967, longitude: 121.4762 })
    console.log(props)
  }
  useEffect(() => {
    Getrestaurants()
  }, []);
  return <div>111</div>;
}
