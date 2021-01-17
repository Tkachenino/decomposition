
import {useState} from 'react';
import {nanoid} from 'nanoid';
import NewsTopic from './NewsTopic';
import NewsList from './NewsList';

const News = () => {
  const [news] = useState([
    {id: nanoid(), href: '#', alt: 'Russia', description: "Local news"},
    {id: nanoid(), href: '#', alt: 'Germany', description: "Germany news"}
  ])

  return (
    <div className='News'>
      <NewsTopic news={news}/>
      <NewsList />
    </div>
  )
}

export default News;