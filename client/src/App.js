import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { retrievePosts } from './actions/posts';
import Form from './components/form/Form';
import Posts from './components/posts/Posts';

function App() {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrievePosts());
  }, [currentId, dispatch]);

  return (
    <div className="App">
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </div>
  );
};

export default App;
