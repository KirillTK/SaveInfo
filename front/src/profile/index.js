import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from '../auth/actions';


const Profile = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUser());
  },[dispatch])

  return (
    <div/>
  );
};

export default Profile;
