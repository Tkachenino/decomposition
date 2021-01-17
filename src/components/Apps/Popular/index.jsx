import {useState} from 'react';
import {nanoid} from 'nanoid';
import Widget from '../Widget';
import PopularItem from './PopularItem';


const Popular = () => {
  const [popular] =useState([
    {topic: 'Недвижемость', about: 'о сталинках', id: nanoid()},
    {topic: 'Маркет', about: 'люстры и светильники', id: nanoid()},
    {topic: 'Авто.ру', about: 'Привод 4х4', id: nanoid()},
  ])
  return (
    <Widget title='Посещаемое'>
       <div className="Popular">
        {popular.map(({id, ...itemInfo}) => (
          <PopularItem key={id} {...itemInfo} />
          ))}
      </div>
    </Widget>

  )
   
}

export default Popular;