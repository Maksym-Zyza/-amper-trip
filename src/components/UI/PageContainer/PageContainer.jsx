import React from 'react';
import style from './PageContainer.module.scss';
import { openSideBar } from '../../../utils/sideBar';

export const PageContainer = ({ children, isOpenSidebar }) => {
  return (
    <div
      className={style.wrapper}
      style={{ marginLeft: openSideBar(isOpenSidebar) }}
      open={isOpenSidebar}
    >
      {children}
    </div>
  );
};
