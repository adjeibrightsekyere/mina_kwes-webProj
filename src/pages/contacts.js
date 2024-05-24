import React from "react";
import cobweb from '../assets/cobweb.png'
import Nav from "../components/navbar";

function Contacts(){

    const backgroundStyle ={
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${cobweb})`,
        width: '100%',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: '#1a1a1a'
        
    }
    return(
        <div className="h-screen"
        style={backgroundStyle}> 
            <Nav />
            <div>
                <di>

                </di>
            </div>
        </div>
    )
}
export default Contacts;