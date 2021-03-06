import React from 'react';
import HomeSidebar from '../PostBlog/Home-Page/HomeSidebar/HomeSidebar';
import AllBlogs from './../PostBlog/Home-Page/AllBlogs/Allblogs';
import { Link, Outlet } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className='row'>
        <div className='col-lg-3 sidebar'>
     <NavLink as={Link} to="create"><li>Create-Admin</li></NavLink>
     <NavLink as={Link} to='admin'><li>Manage-AllBlogs</li></NavLink>
        </div>
        <div className='col-lg-9'>
            {<h4>This is Your Dashboard</h4>}
        <Outlet/>
        </div>
    </div>
    );
};

export default Dashboard;