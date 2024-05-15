import { NavLink, Outlet } from 'react-router-dom';
import style from './MainLayout.module.scss';
import { BurgerBtn, Logo } from 'components/Icons';
import { SideBar } from 'components/Sidebar/Sidebar';
import { useToggleSidebar } from 'hooks/useToggleSidebar';
import { PageContainer } from 'components/PageContainer/PageContainer';

const MainLayout = () => {
  const { isOpenSidebar, toggleSidebar, handleSidebar } = useToggleSidebar();
  return (
    <>
      <header className={style.headerWrapper}>
        <BurgerBtn width="16px" height="18px" onClick={toggleSidebar} />
        <NavLink to="/">
          <Logo />
        </NavLink>
      </header>
      <SideBar isOpenSidebar={isOpenSidebar} handleSidebar={handleSidebar} />
      <PageContainer isOpenSidebar={isOpenSidebar}>
        <Outlet />
      </PageContainer>
    </>
  );
};

export default MainLayout;
