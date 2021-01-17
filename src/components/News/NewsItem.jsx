import PropTypes from 'prop-types';

const NewsItem = ({href, src, text}) => {
  return (
    <li className='NewsItem'>
      <a href={href}>
        <img src={src} width='10' height='10' style={{borderRadius:'50px'}} alt='prev'/>
        <p>{text}</p>
      </a>
      
    </li>
  )
}

NewsItem.propTypes = {
  href: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string
};

export default NewsItem;