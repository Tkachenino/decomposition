import {useState} from 'react';
import SearchInput from './SearchInput';
import SearchTopic from './SearchTopic';

const Search = () => {
  const [topic] = useState([
    {name: 'Видео'},
    {name: 'Картинки'},
    {name: 'Новости'},
    {name: 'Маркет'},
    {name: 'Переводчик'}
  ])

  return (
    <div className="Search">
      <SearchTopic topic={topic}/>
      <SearchInput />
    </div>
  )
}

export default Search;