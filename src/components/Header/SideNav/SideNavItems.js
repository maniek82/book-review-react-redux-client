import React from 'react';
import {Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';




const SideNavItems = () =>{
    
     const items = [
    {
        type:'navItem',
        icon: 'home',
        text: 'Home',
        link: '/',
        restricted: false

    },
    {
        type:'navItem',
        icon: 'file-text-o',
        text: 'My Profile',
        link: '/user',
        restricted: false

    },
    {
        type:'navItem',
        icon: 'file-text-o',
        text: 'Add admins',
        link: '/user/register',
        restricted: false

    },
    {
        type:'navItem',
        icon: 'sign-in',
        text: 'Login',
        link: '/login',
        restricted: false

    },
    {
        type:'navItem',
        icon: 'file-text-o',
        text: 'My reviews',
        link: '/user/user-reviews',
        restricted: false

    },
    {
        type:'navItem',
        icon: 'file-text-o',
        text: 'Add reviews',
        link: '/user/add',
        restricted: false

    },
    {
        type:'navItem',
        icon: 'sign-out',
        text: 'Logout',
        link: '/user/logout',
        restricted: false

    }
    
]

   const element = (item,i) => (
       
    <Link to={item.link} key={i}>
        <div  className={item.type}>
                <FontAwesome name={item.icon}/>
                {item.text}
        </div>
    </Link>
    )


   const showItems = () => (
       
       items.map((item,i)=> {
        
        return (
           element(item,i)
        )
        })
        
   )


    return (
        <div>
            {showItems()}
        </div>
    );

    
}
 
export default SideNavItems;