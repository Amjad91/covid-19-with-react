import React from "react";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';


function AppInfo(){


    return (
      <div>
      <section id="info">       
         <span className="separator">Information about Covid-19</span>
         <div className="container info-covid">
         <a href="http://www.freepik.com" style={{float: "left"}}>Designed by Freepik</a>
         </div>
      </section>

    <section id="Appinfo">
    <span className="separator"><PhoneIphoneIcon /> Apps provided by Saudi Ministry of Health</span>
    <div className="container app">
       <div className="row">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <div className="card type-card" style={{width: '18rem'}}>
            <div className="card-body">
              <img src="/images/app1.png"/>
              <h5 className="card-title">Tatamman</h5>
              <p className="card-text">
              It aims to reinforce the commitment of all persons directed to quarantine by enabling continuous communication and follow-up to them.
              and to open direct communication channel, as part of the efforts of the various entities that made preserving human health at the forefront of their interests and priorities.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.tetaman.home&hl=ar" className="btn btn-lg btn-block btn-outline-dark align-self-end">Download</a>
            </div>
         </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <div className="card type-card" style={{width: '18rem'}}>
             <div className="card-body">
                <img src="/images/app2.png" />
                <h5 className="card-title">Mawid</h5>
                <p className="card-text">Enable patient to book their appointments across primary health care centers and manage them by canceling
                or rescheduling. As well as managing their referral appointments.
                COVID-19 test which help to self-assesses the symptoms of Coronavirus for you and your relatives, and then provides you the correct guidance for your condition.
                </p>
                <br></br><a href="https://play.google.com/store/apps/details?id=moh.gov.sa.mawid" class="btn btn-lg btn-block btn-outline-dark align-self-end">Download</a>
              </div>
           </div>
          </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center">
          <div className="card type-card" style={{width: '18rem'}}>
            <div className="card-body">
               <img src="/images/app3.png" />
               <h5 className="card-title">Your Health Online</h5>
               <p className="card-text">
               For your safety, the International Medical Center launched the "Your Health Online" service for video and audio communication with the hospital doctors, so that you can book your appointments and get medical advice in the fastest and easiest way.

               For reservations check the hospital website.
              </p>
              <a href="https://patientportal.imc.med.sa/imcportal/" className="btn btn-lg btn-block btn-outline-dark align-self-end">Website</a>
            </div>
          </div>
        </div>
       </div>
      </div>
     </section>
     </div>
     )
}

export default AppInfo;
