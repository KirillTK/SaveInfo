import React from 'react';
import { Tag, Input, Icon, Form } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';


const FormItem = Form.Item;

const createAntTags = AntComponent => (props) => {
  const { field, form, hasFeedback, onPressEnter, onBlur, ref, tags} = props;
  const touched = form.touched[field.name];
  const hasError = form.errors[field.name];
  const touchedError = hasError && touched;

  const onChange = value => form.setFieldValue(field.name, value);

  const showInput = () => {};

  const inputVisible = true;

  return (
    <div className="field-container">
      <FormItem
        hasFeedback={
          !!((hasFeedback) || (hasFeedback && touched))
        }
        help={touchedError ? hasError : false}
      >
        <div>
          <div style={{ marginBottom: 16 }}>
            <TweenOneGroup
              enter={{
                scale: 0.8,
                opacity: 0,
                type: 'from',
                duration: 100,
                onComplete: e => {
                  e.target.style = '';
                },
              }}
              leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
              appear={false}
            >
              {tags}
            </TweenOneGroup>
          </div>
          {inputVisible && (
            <AntComponent
              ref={ref}
              type="text"
              size="small"
              style={{ width: 78 }}
              onChange={onChange}
              onBlur={onBlur}
              onPressEnter={onPressEnter}
            />
          )}
          {!inputVisible && (
            <Tag onClick={showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
              <Icon type="plus" /> New Tag
            </Tag>
          )}
        </div>
      </FormItem>
    </div>);
};

export const AntTags = createAntTags(Input);