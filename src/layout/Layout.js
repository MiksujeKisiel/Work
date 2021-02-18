import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import GlobalStyle from '../assets/style/GlobalStyle';
// import Footer from '../components/Items/Footer/Footer';


const Layout = ({children, loggedIn}) =>{
    return(
        <>
       <Navbar loggedIn={loggedIn}/>
       <GlobalStyle/>
       {children}
    
        </>
    )
}





export default Layout

