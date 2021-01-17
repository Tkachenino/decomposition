import {useState} from 'react';
import {nanoid} from 'nanoid';
import NewsItem from './NewsItem';

const NewsList = () => {
  const [news] = useState([
    {href: '#', src: 'https://picsum.photos/id/237/200/300', text: 'Песель первый раз смотрит', id: nanoid()},
    {href: '#', src: 'https://picsum.photos/id/237/200/300', text: 'Песель первый раз смотрит', id: nanoid()},
    {href: '#', src: 'https://picsum.photos/id/237/200/300', text: 'Песель первый раз смотрит', id: nanoid()},
  ]);

  return (
    <ul>
      {news.map(({id, ...newItem}) => (
          <NewsItem  key={id} {...newItem} />
      ))}
    </ul>
  )
}

export default NewsList;