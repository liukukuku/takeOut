import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Getrestaurants } from "@/actions/Actions_getrestaurants";
import HeadTitle from "@/components/HeadTitle";
import HeadSort from "@/components/HeadSort";
import Restaurants from '@/components/Restaurants'
export default connect((state) => ({ data: state.Reducer_getrestaurants }), {
  Getrestaurants,
})(Index);
function Index(props) {
  const { Getrestaurants, data } = props;
  useEffect(() => {
    Getrestaurants({ latitude: 31.22967, longitude: 121.4762 });
  }, []);
  return (
    <div>
      <HeadTitle />
      <HeadSort />
      <section>
      <Restaurants data={data.data} />
      </section>
    </div>
  );
}
