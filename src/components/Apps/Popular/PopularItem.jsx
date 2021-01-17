import PropTypes from 'prop-types';

const PopularItem = ({topic, about}) => {
  return (
    <div className="PopularItem">
      <span><b>{topic}</b></span> - <span>{about}</span>
    </div>
  )
}

PopularItem.propTypes = {
  topic: PropTypes.string,
  about: PropTypes.string
};

export default PopularItem;