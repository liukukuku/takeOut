import { connect } from "react-redux";
import React, { useEffect, useState } from 'react'
import { SearchFoot } from "@/actions/footlist_H";
import qs from 'qs'
export default connect(
    (state) => {
      console.log(state)
      return {
          arr:state.footList.arr
      }
    },
    {
        SearchFoot
    }
  )(FooterLists);

 
  function FooterLists(props) {
    let [objOne,setobjOne] = useState({})
    let [objTwo,setobjTwo] = useState({})
    useEffect(() => {
        // console.log(qs.parse((props.location.search).substr(1)))
        let obj = qs.parse((props.location.search).substr(1))
        props.SearchFoot("?restaurant_id="+obj.id)
        
        // setobjOne
        console.log( qs.parse(localStorage.getItem("dataOne")) )
        // 头部数据
        setobjTwo(qs.parse(localStorage.getItem("dataOne")))

    }, [])
    // 主体数据
    console.log(props.arr)
    console.log(objTwo.piecewise_agent_fee, 1)
    return (
        <div>
            <header>
                <dl>
                    <dt><img src={"//elm.cangdu.org/img/"+objTwo.image_path} /></dt>
                    <dd>
                        
                        <p>{objTwo.name}</p>
                        <p>商家配送/分钟送达/ {objTwo?.piecewise_agent_fee?.tips}</p>
                        <p></p>
                    </dd>
                </dl>
            </header>
        </div>
    )
}


