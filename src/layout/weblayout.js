import Footer from 'components/admin/footer'
import Nav from 'components/admin/nav'
import React from 'react'

export default function Weblayout(props) {
   
    return (

        <div>
         
            {props.children}    
            
        </div>
    )
}
