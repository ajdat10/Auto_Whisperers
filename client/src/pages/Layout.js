import React from 'react';
import Nav from '../components/Nav'

const Layout = (props) => {
   return (
       <div>
           <header>
               <Nav 
               currentUser={props.currentUser}/>
           </header>
           <section>
                {props.children}
           </section>
       </div>
   )
}

export default Layout