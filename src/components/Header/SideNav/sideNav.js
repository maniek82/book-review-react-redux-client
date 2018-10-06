import React from 'react';
import SideNav from 'react-simple-sidenav';
import SideNavItems from './SideNavItems';
const Nav = (props) => {
    return ( 
        <SideNav
        showNav = {props.showNav}
        onHideNav = {props.onHideNav}
        navStyle = {{
            background: '#242424',
            maxWidth: '220px',
        }}
        
        itemStyle      =  {{color: 'white', listStyle: 'none', background: '#242424'}}
        itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
        >
        <SideNavItems/>
        </SideNav>
     );
}
 
export default Nav;