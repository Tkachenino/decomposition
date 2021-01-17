import {useState} from 'react';

const SearchInput = () => {
  const [value, setValue] = useState('');

  const changeValue = (e) => {
    setValue(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault();
  }

  return (
    <form className='SearchInput' onSubmit={submit}>
      <div>LOGO</div>
      <input value={value} onChange={changeValue}/>
      <button type='submit'>Найти</button>
    </form>

  )
}

export default SearchInput;