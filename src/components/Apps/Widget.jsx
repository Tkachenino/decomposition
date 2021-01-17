import PropTypes from 'prop-types';

const Widget = ({title, button, children}) => {

  const widgetButton = <button>{button}</button>;

  return (
    <div>
      <h2>{title} {button ? widgetButton : null}</h2>
      {children}
    </div>
  )
}

Widget.propTypes = {
  title: PropTypes.string,
  button: PropTypes.string,
  children: PropTypes.element,
};

export default Widget;