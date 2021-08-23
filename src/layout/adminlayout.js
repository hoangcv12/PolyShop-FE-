import Footer from 'components/admin/footer'
import Nav from 'components/admin/nav'
import React from 'react'

export default function Adminlayout(props) {
    return (
        <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}
