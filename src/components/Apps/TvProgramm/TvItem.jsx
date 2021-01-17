import PropTypes from 'prop-types';

const TvItem = ({time, prgoramm}) => {
  return (
    <div className="TvItem">
      <span>{time}</span>
      <span>{prgoramm}</span>
    </div>
  )
}

TvItem.propTypes = {
  time: PropTypes.string,
  prgoramm: PropTypes.string
};

export default TvItem;