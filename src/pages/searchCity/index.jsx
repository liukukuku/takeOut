import React from "react";
import './styles.less'
function SearchCity() {
  return (
    <div>
      <div className="HeadTitle">
        <div className="Headlef">返回</div>
        <div className="Headmid">天津</div>
        <div className="Headrig">切换城市</div>
      </div>
      <div className="Section">
          <input type="text" placeholder="输入学校、商务楼、地址"/>
          <button>提交</button>
      </div>
      <p>搜索历史</p>
      <div className="city_jilu">
          123
      </div>
      <p className="nullfn">
         <span>清空所有</span>
          </p>
    </div>
  );
}

export default SearchCity;
