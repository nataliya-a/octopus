import './App.css';
import TaskBar from './components/TaskBar';
import AddTaskModal from './components/AddTaskModal';
import React, { useState } from 'react';



function App() {
  const tasks = [
    {
      id: 1,
      title: "Buy Groceries",
      completed: false
    },
    {
      id: 2,
      title: "Wash Car",
      completed: false
    },
    {
      id: 3,
      title: "Do Laundry",
      completed: false
    }
  ];



  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }


  return (
    <div className="App">
      <div className="view-container">
      <div className="header-container">
        <h1>Today</h1>
        <div className="add-botton" onClick={openModal}>
          +
        </div>
        {isModalOpen && <AddTaskModal onClose={() => setIsModalOpen(false)} />}
      </div>
      <div className="list-container">
      <TaskBar tasks={tasks} />
      </div>
      </div>
    </div>
  );
}

export default App;
