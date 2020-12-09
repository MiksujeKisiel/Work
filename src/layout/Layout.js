import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import GlobalStyle from '../style/GlobalStyle';



const Layout = ({children}) =>{
    return(
        <div>
       <Navbar/>
       <GlobalStyle/>
       {children}

        </div>

    )
}

export default Layout