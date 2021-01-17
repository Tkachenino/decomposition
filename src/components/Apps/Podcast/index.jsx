import {useState} from 'react';
import {nanoid} from 'nanoid';
import Widget from '../Widget';
import PodcastItem from './PodcastItem';


const Podcast = () => {
  const [podcasts] =useState([
    {source: 'Успех', about: 'Управление как исскуство', id: nanoid()},
    {source: 'earthTV', about: 'Ночь. Мир в это время', id: nanoid()},
    {source: 'Совершенно секретно', about: 'Об Андрее', id: nanoid()},
  ])
  return (
    <Widget title='Эфир'>
       <div className="Podcast">
        {podcasts.map(({id, ...itemInfo}) => (
          <PodcastItem key={id} {...itemInfo} />
          ))}
      </div>
    </Widget>

  )
   
}

export default Podcast;