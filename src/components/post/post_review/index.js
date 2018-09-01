import React, { Component } from 'react';
import { Input, Icon, Form,Button,Upload } from 'antd';
import '../post.css';
const { TextArea } = Input;
const FormItem = Form.Item;


class PostReview extends Component {
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div className="layout-post">
        <FormItem
         {...formItemLayout}>
        <Input placeholder="หัวข้อรีวิว" prefix={ <Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }}/> } />
        </FormItem>
       

         <FormItem
         {...formItemLayout}>
         <TextArea placeholder="รายละเอียด"
          autosize={{ minRows: 6, maxRows: 6 }} />
        </FormItem>
       
      </div>
    )
  }
}
export default Form.create()(PostReview);