import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/najwan.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Name:{resumeData.name}</span>
                     <br></br>
       						   <span>Address:{resumeData.address}
                    </span>
                    
                    <span>{resumeData.website}</span>
                    <br></br>
                    <span>phoneNumber:{resumeData.phoneNumber}</span>
                    <br></br>
                    <span>Email:{resumeData.email}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
