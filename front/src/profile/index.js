import React from 'react';
import { Layout} from 'antd';
import SaveItem from './components/save-item';


const styles = ({
  container: {
    backgroundColor: 'white',
    padding: '15px',
    margin: '15px',
  }
});

const Profile = () => {

  return (
    <Layout style={styles.container}>
      <SaveItem/>
    </Layout>
  );
};

export default Profile;
