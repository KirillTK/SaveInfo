import React from 'react';
import { Form, Icon, Upload } from 'antd';

const FormItem = Form.Item;

const createAntUpload = AntComponent => (props) => {
  const { field, listType, form, hasFeedback } = props;
  const touched = form.touched[field.name];
  const hasError = form.errors[field.name];
  const touchedError = hasError && touched;

  const onChange = value => form.setFieldValue(field.name, value);

  const customRequest = ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  return (
    <div className="field-container">
      <FormItem
        hasFeedback={
          !!((hasFeedback) || (hasFeedback && touched))
        }
        help={touchedError ? hasError : false}
      >
        <AntComponent
          {...field}
          {...props}
          onChange={onChange}
          listType={listType}
          customRequest={customRequest}
        >
          <div>
            <Icon type="plus"/>
            <div className="ant-upload-text">Upload</div>
          </div>
        </AntComponent>
      </FormItem>
    </div>
  );
};

export default createAntUpload(Upload);









