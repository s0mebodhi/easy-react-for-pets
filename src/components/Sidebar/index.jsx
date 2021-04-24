import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Питомцы</SidebarLink>
        <SidebarLink to='/'>Птицы</SidebarLink>
        <SidebarLink to='/'>ВСЕ</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarBtn><a href='/'>ГДЕ ЗАБРАТЬ?</a></SidebarBtn>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
