import React, { useState } from 'react';
import './App.css';

import Modal from './Modal'

function App() {
  const [show, setShow] = useState(false)
  return (
        <>
          <button  onClick={() => setShow(true)}>Open</button>
          <Modal onClose={() => setShow(false)} show={show} />
          <button onClick={() => setShow(false)}>Close</button>
        </>
  );
}

export default App;
