import React from 'react';
import ToDoApp from './Component/toDoApp';

const App = () => {
  return (
    <div className="App" style={{display: "flex", justifyContent:"center"}}>
      <ToDoApp />
    </div>
  );
};

export default App;