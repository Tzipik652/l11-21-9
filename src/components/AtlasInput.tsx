import React, { useRef, FC, KeyboardEvent } from 'react';

interface AtlasInputProps {
  doApi: (value: string) => void;
}

const AtlasInput: FC<AtlasInputProps> = ({ doApi }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSearchClick = () => {
    if (inputRef.current) {
      doApi(inputRef.current.value);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputRef.current) {
      doApi(inputRef.current.value);
    }
  };

  return (
    <div className='bg-warning p-2'>
      <div className='col-md-6 d-flex'>
        <input
          ref={inputRef}
          onKeyDown={onKeyDown}
          placeholder='search for state...'
          type="text"
          className='form-control'
        />
        <button onClick={onSearchClick} className='btn btn-info'>Search</button>
      </div>
    </div>
  );
};

export default AtlasInput;
