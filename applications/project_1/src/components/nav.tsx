import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/fetchForm">Fetched Data Form</Link>
      <Link to="/dependent">Fetched Data Form</Link>
      <Link to="/country">Country and district</Link>
      <Link to="/field-array-disable">Field Array Hide Button</Link>
    </div>
  );
};

export default Nav;
