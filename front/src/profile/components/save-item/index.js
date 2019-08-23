import React from 'react';
import { Form, Icon, Layout } from 'antd';
import { Field, Formik } from 'formik';
import AntUpload from '../../../utils/components/form-field/upload';
import { AntInput, AntTextArea } from '../../../utils/components/form-field';

const styles= ({
  container: {
    backgroundColor: 'white',
  }
});

const SaveItem = () => {

  const saveItem = values => console.log({ values });

  const renderForm = ({ handleSubmit }) => (
    <Form onSubmit={handleSubmit}>
      <Field
        component={AntUpload}
        name="files"
        listType='picture-card'
        hasFeedback
      />
      <Field
        component={AntInput}
        name='label'
        type='text'
        label='Title'
        prefix={<Icon type="book" />}
      />
      <Field
        component={AntTextArea}
        name='text'
        type='text'
        label='Text'
      />

      <div className="submit-container">
        <button className="ant-btn ant-btn-primary" type="submit">
          Save
        </button>
      </div>
    </Form>
  );

  return (<Layout style={styles.container}>
    <Formik onSubmit={saveItem} render={renderForm}/>
  </Layout>);
};

export default SaveItem;