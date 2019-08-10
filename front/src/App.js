import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUser } from './auth/store/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getUser());
  },[])

  return (
    <div className="App" />
  );
}

export default App;
