import { useState } from 'react';

export const useToggleSidebar = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => setIsOpenSidebar(!isOpenSidebar);
  const closeSidebar = () => setIsOpenSidebar(false);
  const handleSidebar = () =>
    isOpenSidebar ? toggleSidebar() : closeSidebar();
  return { isOpenSidebar, toggleSidebar, handleSidebar };
};
