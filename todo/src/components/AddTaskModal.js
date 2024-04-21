import React from 'react';
import './AddTaskModal.css';

function AddTaskModal({ onClose }) {
    const handleClose = () => {
        onClose(); // Call the onClose function passed as a prop to close the modal
      };

  return (
    <div id="myModal" className="modal" style={{ display: 'block' }}> {/* Ensure the modal is displayed */}
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span> {/* Close button */}
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default AddTaskModal;
