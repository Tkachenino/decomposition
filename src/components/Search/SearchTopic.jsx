import PropTypes from 'prop-types';

const SearchTopic = ({topic}) => {
  return (
    <div>
      {topic.map(({name})=> (
        <button key={name}>{name}</button>
      ))}
    </div>
  )
};

SearchTopic.propTypes = {
  topic: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  }))
};

export default SearchTopic;