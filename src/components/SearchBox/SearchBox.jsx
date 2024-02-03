import css from './SearchBox.module.css';
import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export const SearchBox = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = inputRef.current.value;

    if (!inputValue.trim()) {
      toast.error('Please enter a value');
      return;
    }

    onSearch(inputValue);
    evt.target.reset();
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <div className={css.inputContainer}>
          <input
            ref={inputRef}
            type="text"
            autoComplete="off"
            autoFocus={true}
            placeholder=""
            className={css.inputField}
            defaultValue={''}
          />
          <button type="submit" className={css.submitButton}>
            Search
          </button>
        </div>
        <Toaster containerStyle={{ marginTop: 85 }} />
      </form>
    </div>
  );
};
