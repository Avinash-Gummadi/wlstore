import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function About() {
  return (
    <div>
      <Header />
      <div className="hero-slant overlay" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url('images/hero-min.jpg')` }}>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-7 intro text-center">
              <h1 className="text-white font-weight-bold mb-4" data-aos="fade-up" data-aos-delay="0">About Us</h1>
              <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
              <p data-aos="fade-up" data-aos-delay="200"><a href="https://google.com" className="btn btn-primary">Get Started</a></p>
            </div>
          </div>
        </div>
        <div className="slant" style={{ backgroundImage: `url('images/slant.svg')` }}></div>
      </div>

      <div className="site-section about-section ">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4">
              <h2 className="section-title mb-4">A small river named Duden flows</h2>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p className="mt-4"><a href="https://google.com" className="btn btn-primary btn-md">Book now</a></p>
            </div>
            <div className="col-lg-7 pl-lg-5 position-relative ">


              <div className="section-stack">
                <div className="image-stack">
                  <div className="image-stack__item image-stack__item--top">
                    <img src="images/img_h_2-min.jpg" alt=""></img>
                  </div>
                  <div className="image-stack__item image-stack__item--bottom">
                    <img src="images/img_h_3-min.jpg" alt=""></img>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
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


      <div className="site-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img src="images/img_v_2-min.jpg" alt="" className="img-fluid rounded"></img>
            </div>
            <div className="col-lg-6 pl-lg-5">
              <h3 className="mb-4 font-weight-bold">Who We Are</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. </p>
              <ul className="list-check list-unstyled primary">
                <li>Far far away, behind the word mountains</li>
                <li>Vokalia and Consonantia there</li>
                <li>Separated they live</li>
                <li>Semantics a large language ocean</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section slider-team-wrap bg-light">
        <div className="container">

          <div className="row mb-5 align-items-center">
            <div className="col-md-6">
              <h2 className="font-weight-bold">Our Awesome Team</h2>
            </div>
            <div className="col-md-6 text-left text-md-right">
              <div className="slider-nav">
                <a href="https://google.com" className="js-prev js-custom-prev-v2"><span className="icon-arrow_back"></span></a>
                <a href="https://google.com" className="js-next js-custom-next-v2"><span className="icon-arrow_forward"></span></a>

              </div>
            </div>
          </div>

          <div className="slider-team owl-carousel no-nav owl-3-slider">
            <div className="team">
              <div className="pic">
                <img src="images/person_1-min.jpg" alt="" className="img-fluid"></img>
              </div>
              <h3><a href="https://google.com"><span className="">Jeremy</span> Walker</a></h3>
              <span className="d-block position">CEO, Founder, Atty.</span>
              <p>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="https://google.com" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>
            <div className="team">
              <div className="pic">
                <img src="images/person_2-min.jpg" alt="" className="img-fluid"></img>
              </div>
              <h3><a href="https://google.com"><span className="">Lawson</span> Arnold</a></h3>
              <span className="d-block position">CEO, Founder, Atty.</span>
              <p>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="https://google.com" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>

            <div className="team">
              <div className="pic">
                <img src="images/person_3-min.jpg" alt="" className="img-fluid"></img>
              </div>
              <h3><a href="https://google.com"><span className="">Patrik</span> White</a></h3>
              <span className="d-block position">CEO, Founder, Atty.</span>
              <p>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="https://google.com" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>

            <div className="team">
              <div className="pic">
                <img src="images/person_4-min.jpg" alt="" className="img-fluid"></img>
              </div>
              <h3><a href="https://google.com"><span className="">Kathryn</span> Ryan</a></h3>
              <span className="d-block position">CEO, Founder, Atty.</span>
              <p>Separated they live in.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className="mb-0"><a href="https://google.com" className="more dark">Learn More <span className="icon-arrow_forward"></span></a></p>
            </div>

          </div>
        </div>
      </div>
      <div className="site-section overlay site-cover-2" style={{ backgroundImage: `url('images/img_v_3-min.jpg')` }}>
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
