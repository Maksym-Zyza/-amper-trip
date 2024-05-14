//
import { Outlet } from 'react-router-dom';

// const sideBarPages = [
//   {
//     name: 'Home',
//     path: '/',
//   },
//   {
//     name: 'Catalog',
//     path: '/catalog',
//   },
//   {
//     name: 'Favorites',
//     path: '/favorites',
//   },
// ];

const MainLayout = () => {
  return (
    <>
      <header>
        Header
        {/* <SideBar sideBarPages={sideBarPages} />
        <Navigation sideBarPages={sideBarPages} />
        <Logo /> */}
      </header>
      <Outlet />
    </>
  );
};

export default MainLayout;
