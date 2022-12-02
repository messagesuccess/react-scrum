import React, { } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './header'
import LeftMenu from './Left_menu'
export default function Layout() {
    const location = useLocation()
    let path = location.pathname === '/project'
    return (
        <div className="layout_wrap">
            <div className="header_wrap">
                <Header />
            </div>
            <div className="layout_wrap_project">
                {path ? null : (
                    <div className="project_side_menu_wrap">
                        <LeftMenu />
                    </div>
                )}

                <div className="project_wrap">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
