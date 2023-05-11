import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">Home</NavLink>
      <NavLink className={css.link} to="/phonebook">Phonebook</NavLink>
      <NavLink className={css.link} to="/login">Log In</NavLink>
      <NavLink className={css.link} to="/register">Register</NavLink>
    </nav>
  );
};
