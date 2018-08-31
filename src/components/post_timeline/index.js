import React, { Component } from 'react';
import { Input, Icon, Form,Button,Upload } from 'antd';
import { MdAccountBalance } from "react-icons/md";
const { TextArea } = Input;
const FormItem = Form.Item;

class PostTimeline extends Component {
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
        <Input placeholder="ชื่อทริป" prefix={ <MdAccountBalance style={{ color: 'rgba(0,0,0,.25)' }}></MdAccountBalance> } />
        </FormItem>
       
        <FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload  name="logo" action="/upload.do" listType="picture">
              <Button style={{ color: 'rgba(0,0,0,.25)' }}>
                <Icon type="upload" /> อัพโหลดรูปภาพของคุณ
              </Button>
            </Upload>
          )}
        </FormItem>

         <FormItem
         {...formItemLayout}>
         <TextArea placeholder="บรรยายรายละเอียด เกี่ยวกับทริปของคุณ"
          autosize={{ minRows: 6, maxRows: 6 }} />
        </FormItem>
       
      </div>
    )
  }
}
const WrappedPostTimeline = Form.create()(PostTimeline);
export default WrappedPostTimeline