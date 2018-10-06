import React, {Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';
import Nav from './SideNav/sideNav'

class Header extends Component {

    state = {
        showNav: false
      }
  
    onHideNav = () => {
        this.setState({
            showNav: false
        })
    }
    onShowNav = () => {
        this.setState({
            showNav: true
        })
    }
    render() { 
        return ( 
            <header>
                <div className="open-nav">
                    <FontAwesome name="bars"
                    style = {{
                        color: "#fff",
                        padding: '10px',
                        cursor: 'pointer'
                    }}
                    onClick={()=>this.onShowNav()}
                    />
                </div>
                <Nav 
                showNav = {this.state.showNav}
                onHideNav ={()=> this.onHideNav()}
                
                />
                <Link to="/" className="logo">
                    The Books Review
                </Link>
                

            </header>
         );
    }
}
 
export default Header;