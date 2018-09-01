import React, {Component} from 'react';
import { AutoComplete, Icon ,Input} from 'antd';

const dataSource = ['วัดพระแก้ว', 'ประตูท่าแพ', 'อ่างแก้วแพรวพราวรื่นรม'];

const Complete=()=> {
  return (
      <div className="head">
    <AutoComplete
      style={{ width: 200 }}
      dataSource={dataSource}
      placeholder="ค้นหา"
      filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
    >
     <Input suffix={<Icon type="search" className="certain-category-icon" />}></Input>
    </AutoComplete>
   
    </div>
  );
}
export default Complete