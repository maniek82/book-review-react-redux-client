import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import Layout from './hoc/layout'
import BookView from './components/book/book'
import Login from './containers/admin/login';
import Auth from  './hoc/auth';
import User from './components/admin/index';

const Routes = () => {
    return ( 
        <Layout>
           <Switch>
            <Route path="/" exact component={Auth(Home)}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/user" exact component={Auth(User)}/>
            <Route path="/books/:id" exact component={BookView}/>
        </Switch>
        </Layout>
        
     );
}
 
export default Routes;