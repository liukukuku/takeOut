import React from 'react'
import FootRoute from '@/components/FootRoute'
import HeadTitle from "@/components/HeadTitle";
import {Button,Input} from 'antd'
import './styles.less'
import { connect } from 'react-redux';

export default connect(state=>{
    console.log(state)
},{

})(Search)

function Search() {

    return (
        <div>
            <HeadTitle val={"搜索"}></HeadTitle>
            <section>
                <div className="s_one">
                    <Input type="text" placeholder="请输入商家或美食名称"/>
                    <Button type="primary" onClick="">提交</Button>
                </div>
            </section>
            <FootRoute/>
        </div>
    )
}

