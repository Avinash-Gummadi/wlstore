import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Contact() {
  return (
    <div>
      <Header />
    <div className="hero-slant overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: `url('images/hero-min.jpg')`}}>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 intro text-center">
            <h1 className="text-white font-weight-bold mb-4" data-aos="fade-up" data-aos-delay="0">Contact</h1>
            <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <p data-aos="fade-up" data-aos-delay="200"><a href="https://google.com" className="btn btn-primary">Get Started</a></p>
            
          
          </div>
          
          
        </div>

        
      </div>

      <div className="slant" style={{backgroundImage: `url('images/slant-grey.svg')`}}></div>
    </div>

    <div className="section-grey bg-light">
      <div className="container bg-white p-5">

        <div className="block">
          <div className="row justify-content-center">


            <div className="col-md-12 col-lg-12 pb-4" data-aos="fade-up" data-aos-delay="200">


              <div className="row">
                <div className="col-lg-4">
                  <div  className="service-2 no-shadow link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                      </svg>
                    </div>
                    <div className="service-contents">
                      <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div  className="service-2 no-shadow link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
                      </svg>
                    </div>
                    <div className="service-contents">
                      <p>info@yourdomain.com</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div  className="service-2 no-shadow link horizontal d-flex active" data-aos="fade-left" data-aos-delay="0">
                    <div className="service-icon color-1 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg>
                    </div>
                    <div className="service-contents">
                      <p>+1 294 3925 3939</p>
                    </div>
                  </div>
                </div>
              </div>

              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="fname">First name</label>
                      <input type="text" className="form-control" id="fname"></input>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" for="lname">Last name</label>
                      <input type="text" className="form-control" id="lname"></input>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" for="email">Email address</label>
                  <input type="email" className="form-control" id="email"></input>
                </div>

                <div className="form-group">
                  <label className="text-black" for="message">Message</label>
                  <textarea name="" className="form-control" id="message" cols="30" rows="5"></textarea>
                </div>

                <button type="submit" className="btn btn-primary-hover-outline">Send Message</button>
              </form>

            </div>





          </div>

        </div>

      </div>


    </div>

    <div className="site-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h4 className="font-weight-bold">Our Clients</h4>
          </div>
        </div>

        <div className="owl-logos owl-carousel">
          <div className="item">
            <img src="images/logo-puma.png" alt="" className="img-fluid"></img>
          </div>
          <div className="item">
            <img src="images/logo-adobe.png" alt="" className="img-fluid"></img>
          </div>
          <div className="item">
            <img src="images/logo-google.png" alt="" className="img-fluid"></img>
          </div>
          <div className="item">
            <img src="images/logo-paypal.png" alt="" className="img-fluid"></img>
          </div>
          <div className="item">
            <img src="images/logo-adobe.png" alt="" className="img-fluid"></img>
          </div>
          <div className="item">
            <img src="images/logo-google.png" alt="" className="img-fluid"></img>
          </div>

        </div>
        
            
      </div>
      
    </div>
        
    
    <div className="site-section overlay site-cover-2" style={{backgroundImage: `url('images/img_v_3-min.jpg')`}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="text-white mb-4">Get this template for free! :)</h2>
            <p className="mb-0"><a href="https://untree.co/" rel="noopener" className="btn btn-primary">Get it for free!</a></p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}
