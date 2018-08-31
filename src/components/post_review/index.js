import React, { Component } from 'react';
import { Input, Icon, Form,Button,Upload } from 'antd';
import { MdAccountBalance } from "react-icons/md";
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
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div style={{ padding: '2em' }}>
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
const WrappedPostReview = Form.create()(PostReview);
export default WrappedPostReview