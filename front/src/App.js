import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './auth/store/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUser());
  },[dispatch])

  return (
    <div className="App"/>
  );
};

export default App;
