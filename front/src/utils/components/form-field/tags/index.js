import React, { useState } from 'react';
import { Tag, Input, Icon, Form, Tooltip } from 'antd';


const FormItem = Form.Item;

const createAntTags = AntComponent => (props) => {
  const { field, form, hasFeedback, ref } = props;
  const touched = form.touched[field.name];
  const hasError = form.errors[field.name];
  const touchedError = hasError && touched;

  const [inputValue, setValue] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputVisible, setVisible] = useState(false);

  const onChange = event => {
    const { target: { value } } = event;
    setValue(value);
  };

  const saveTag = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      const newTags = [...tags, inputValue];
      setTags(newTags);
      form.setFieldValue(field.name, newTags);
    }
    setVisible(!inputVisible);
  };

  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
    form.setFieldValue(field.name, newTags);
  };

  const showInput = () => saveTag();

  const handleInputConfirm = () => saveTag();

  return (
    <div className="field-container">
      <FormItem
        hasFeedback={
          !!((hasFeedback) || (hasFeedback && touched))
        }
        help={touchedError ? hasError : false}
      >
        <div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag key={tag} closable={index !== 0} onClose={() => handleClose(tag)}>
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
          {inputVisible && (
            <AntComponent
              ref={ref}
              type="text"
              size="small"
              style={{ width: 78 }}
              onChange={onChange}
              onBlur={handleInputConfirm}
              onPressEnter={handleInputConfirm}
            />
          )}
          {!inputVisible && (
            <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
              <Icon type="plus"/> New Tag
            </Tag>
          )}
        </div>
      </FormItem>
    </div>);
};

export const AntTags = createAntTags(Input);