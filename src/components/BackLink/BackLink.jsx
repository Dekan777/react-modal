import { FaAngleDoubleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <FaAngleDoubleLeft size="18" color="orangered" />
      {children}
    </Link>
  );
};
