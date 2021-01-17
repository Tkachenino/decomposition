import PropTypes from 'prop-types';

const PodcastItem = ({source, about}) => {
  return (
    <div className="PopularItem">
      <span><b>{source}</b></span> - <span style={{opacity: 0.3}}>{about}</span>
    </div>
  )
}

PodcastItem.propTypes = {
  source: PropTypes.string,
  about: PropTypes.string
};

export default PodcastItem;