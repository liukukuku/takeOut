import React from 'react'
import './styles.less'
function Index() {
    function ClassName(even) {
        even.currentTarget.children[0].className="list"
    }
    return (
        <>
            <ul className="Headsort">
                <li onClick={ClassName}><span></span>分类</li>
                <li onClick={ClassName}><span></span>排序</li>
                <li onClick={ClassName}><span></span>筛选</li>
            </ul>
        </>
    )
}

export default Index
