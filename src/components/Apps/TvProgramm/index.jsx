import {useState} from 'react';
import {nanoid} from 'nanoid';
import Widget from '../Widget';
import TvItem from './TvItem';

const TvProgramm = () => {

  const [programms] = useState([
    {time: '02:00', prgoramm: ' TNT.Best', id: nanoid()},
    {time: '03:00', prgoramm: ' TNT.NotTheBest', id: nanoid()},
    {time: '04:00', prgoramm: ' TNT.18+', id: nanoid()}
  ])

  return (
    <Widget title='Телепрограмма' button='Эфир'>
      <div>
        {programms.map(({id, ...program}) => (
          <TvItem key={id} {...program} />
        ))}
      </div>
    </Widget>
  )
}

export default TvProgramm;