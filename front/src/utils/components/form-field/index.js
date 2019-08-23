import React from 'react';
import { Form, Input } from 'antd';

const { TextArea } = Input;
const FormItem = Form.Item;

const createAntField = AntComponent => ({ field, form, hasFeedback, label, selectOptions, submitCount, prefix, type, ...props }) => {
  const touched = form.touched[field.name];
  const submitted = submitCount > 0;
  const hasError = form.errors[field.name];
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) =>
    form.setFieldValue(field.name, value);
  const onChange = value => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);
  return (
    <div className="field-container">
      <FormItem
        hasFeedback={
          !!((hasFeedback && submitted) || (hasFeedback && touched))
        }
        help={submittedError || touchedError ? hasError : false}
        validateStatus={submittedError || touchedError ? "error" : "success"}
      >
        <AntComponent
          {...field}
          {...props}
          onBlur={onBlur}
          type={type}
          onChange={type ? onInputChange : onChange}
          prefix={prefix}
          placeholder={label}
        />
      </FormItem>
    </div>
  );
};

export const AntInput = createAntField(Input);
export const AntTextArea = createAntField(TextArea);