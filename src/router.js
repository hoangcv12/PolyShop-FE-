import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/admin/home';
import IndexPro from 'pages/admin/products';
import Add from 'pages/admin/products/add';
import Edit from 'pages/admin/products/edit';
import Signin from 'pages/admin/signin';
import Weblayout from 'layout/weblayout';
import Adminlayout from 'layout/adminlayout';
import AdminRoute from 'auth/adminRoute';
import Index from 'pages/admin/category';
import Auth from 'pages/admin/authorizing';

export default function router() {
    return (
        <Router>
            <Switch>

               <AdminRoute path="/admin/:path?">
                    <Adminlayout  >
                        <Switch>
                            <Route exact path="/admin">
                                <Home />
                            </Route>
                            <Route exact path="/admin/products">
                                <IndexPro />
                            </Route>
                            <Route exact path="/admin/products/add">
                                <Add />
                            </Route>
                            <Route exact path="/admin/products/:id">
                                <Edit />
                            </Route>
                            <Route exact path="/admin/categorys">
                                <Index/>
                            </Route>
                            <Route exact path="/admin/authorizing">
                                <Auth/>
                            </Route>
                        </Switch>
                    </Adminlayout>
                    </AdminRoute>
                    
                <Weblayout>
                    <Switch>
                        <Route exact path="">
                            <Signin />
                        </Route>
                    </Switch>
                </Weblayout>

            </Switch>
        </Router>

    )
}
