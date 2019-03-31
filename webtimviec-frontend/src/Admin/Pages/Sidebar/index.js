import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <ul class="sidebar navbar-nav bg-sidebar">

                <ul class="title-admin">Admin</ul>

                <NavLink to="">
                <li class="nav-item  nav-item-bg">
                    <a class="nav-link" >
                        <i class="fas fa-fw fa-table"></i>
                        <span>Dashboard</span></a>
                </li>
                </NavLink>
                <NavLink to="/admin/jobtable" activeClassName="active">
                    <li class="nav-item nav-item-bg">
                        <a class="nav-link">
                            <i class="fas fa-fw fa-table"></i>
                            <span>Job</span></a>
                    </li>
                </NavLink>
                <NavLink to="/admin/usertable" activeClassName="active">
                    <li class="nav-item nav-item-bg">
                        <a class="nav-link">
                            <i class="fas fa-fw fa-table"></i>
                            <span>User</span></a>
                    </li>
                </NavLink>
                <NavLink to="/admin/recruitertable" activeClassName="active">
                <li class="nav-item nav-item-bg">
                    <a class="nav-link" >
                        <i class="fas fa-fw fa-table"></i>
                        <span>Recruiter</span></a>
                </li>
                </NavLink>

                <NavLink to="/admin/skilltable">
                <li class="nav-item nav-item-bg">
                    <a class="nav-link" >
                        <i class="fas fa-fw fa-table"></i>
                        <span>Skill - Status</span></a>
                </li>
                </NavLink>

                <NavLink to="">                
                <li class="nav-item nav-item-bg">
                    <a class="nav-link" >
                        <i class="fas fa-fw fa-table"></i>
                        <span>City</span></a>
                </li>
                </NavLink>

                <NavLink to="">                
                <li class="nav-item nav-item-bg">
                    <a class="nav-link" >
                        <i class="fas fa-fw fa-table"></i>
                        <span>Profession</span></a>
                </li>
                </NavLink>
            </ul>
        );
    }
}

export default Sidebar;