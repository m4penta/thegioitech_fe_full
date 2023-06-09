import { NavLink } from 'react-router-dom';

export const NavItem = ({ path, icon, name }) => {
  return (
    <div className='nav-item'>
      <NavLink exact to={'/' + path} className='nav-item-link'>
        <span>{icon}</span>
        <span>{name}</span>
      </NavLink>
    </div>
  );
};
