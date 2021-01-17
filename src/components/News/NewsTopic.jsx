import PropTypes from 'prop-types';

const NewsTopic = ({news}) => {
  return (
    <div>
      {news.map(({id, href, alt, description})=> (
        <button key={id} href={href} alt={alt}>{description}</button>
      ))}
    </div>
  )
}

NewsTopic.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    href: PropTypes.string,
    alt: PropTypes.string,
    description: PropTypes.string
  }))
};

export default NewsTopic;