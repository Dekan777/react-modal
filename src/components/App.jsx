import css from './App.module.css';
import Modal from 'react-modal';
import React from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const App = () => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  return (
    <div className={css.container}>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
          <input />

          <button>Search</button>
        </form>
      </Modal>
    </div>
  );
};
