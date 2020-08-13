import React from 'react';
import { Link } from 'react-router-dom';


class AboutUs extends React.Component{
    render(){
        return(
            <div className="aboutUs">
                <div>
                    <p>Company: ThoughtWorks Local</p>
                    <p>Location: Xi'an</p>
                </div>
                <div>
                    <p>For me information, please</p>
                    <p>view our<Link to="/">website</Link>.</p>
                    <p>view our <Link exact to='/' style={{color:'red'}}>website</Link></p>
                </div>
            </div>
        )
    }
}

export default AboutUs;