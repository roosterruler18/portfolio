import React from 'react';
import { NavLink as ReactRouterNavLink, NavLinkProps } from 'react-router-dom';

interface CustomNavLinkProps extends NavLinkProps {
    activeClassName: string;
}

const NavLink: React.FC<CustomNavLinkProps> = ({ activeClassName, ...props }) => (
    <ReactRouterNavLink {...props} />
);

export default NavLink;
