import React from 'react';
import style from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { Catalog, Favorites, Home } from '../Icons';
import { openSideBar } from '../../utils/OpenSideBar';

export const SideBar = ({ handleSidebar, isOpenSidebar }) => {
  return (
    <div
      className={style.sidebar}
      style={{ width: openSideBar(isOpenSidebar) }}
    >
      <NavLink to="/" onClick={handleSidebar}>
        <Home /> Home
      </NavLink>
      <NavLink to="/catalog" onClick={handleSidebar}>
        <Catalog /> Catalog
      </NavLink>
      <NavLink to="/favorites" onClick={handleSidebar}>
        <Favorites /> Favorites
      </NavLink>
    </div>
  );
};
