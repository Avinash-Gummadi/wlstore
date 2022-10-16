import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Elements() {
  return (
    <div>
      <Header />
    <div className="hero-slant overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: `url('images/hero-min.jpg')`}}>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 intro text-center">
            <h1 className="text-white font-weight-bold mb-4" data-aos="fade-up" data-aos-delay="0">Elements</h1>
            <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <p data-aos="fade-up" data-aos-delay="200"><a href="https://google.com" className="btn btn-primary">Get Started</a></p> 
          </div>          
        </div>        
      </div>

      <div className="slant" style={{backgroundImage: `url('images/slant.svg')`}}></div>
    </div>

    <div className="container pt-5 pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">01. Slider</h1>
      </div>
      <div className="col-lg-12">
        <div className="main-slider owl-single dots-absolute owl-carousel">
          <img src="images/img_h_1-min.jpg" alt="" className="img-fluid"></img>
          <img src="images/img_h_2-min.jpg" alt="" className="img-fluid"></img>
          <img src="images/img_h_3-min.jpg" alt="" className="img-fluid"></img>
        </div>
      </div>
    </div>
  </div>


  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">02. Accordion</h1>
      </div>
      <div className="col-lg-12">
        <div className="custom-accordion" id="accordion_1">
          <div className="accordion-item">
            <h2 className="mb-0">
              <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How to download and register?</button>
            </h2>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
              <div className="accordion-body">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">How to create your paypal account?</button>
            </h2>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
              <div className="accordion-body">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="mb-0">
              <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How to link your paypal and bank account?</button>
            </h2>

            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
              <div className="accordion-body">
                When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>

  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">03. Gallery</h1>
      </div>
      <div className="col-lg-12">
        <div className="row gutter-1 gallery">
          <div className="col-4">
            <a href="images/img_h_1-min.jpg" className="gal-item" data-fancybox="gal"><img src="images/img_h_1-min.jpg" alt="" className="img-fluid"></img></a>
          </div>
          <div className="col-4">
            <a href="images/img_h_2-min.jpg" className="gal-item" data-fancybox="gal"><img src="images/img_h_2-min.jpg" alt="" className="img-fluid"></img></a>
          </div>
          <div className="col-4">
            <a href="images/img_h_3-min.jpg" className="gal-item" data-fancybox="gal"><img src="images/img_h_3-min.jpg" alt="" className="img-fluid"></img></a>
          </div>
          <div className="col-4">
            <a href="images/img_h_4-min.jpg" className="gal-item" data-fancybox="gal"><img src="images/img_h_4-min.jpg" alt="" className="img-fluid"></img></a>
          </div>
          <div className="col-4">
            <a href="images/img_h_5-min.jpg" className="gal-item" data-fancybox="gal"><img src="images/img_h_5-min.jpg" alt="" className="img-fluid"></img></a>
          </div>
          <div className="col-4">
            <a href="images/img_h_6-min.jpg" className="gal-item" data-fancybox="gal"><img src="images/img_h_6-min.jpg" alt="" className="img-fluid"></img></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">04. Video</h1>
      </div>
      <div className="col-lg-7">
        <a href="https://vimeo.com/342333493" data-fancybox className="video-wrap">
          <span className="play-wrap"><span className="icon-play"></span></span>
          <img src="images/img_h_5.jpg" alt="" className="img-fluid rounded"></img>
        </a>
      </div>
    </div>
  </div>

  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">05. Form</h1>
      </div>
      <div className="col-lg-7">
        <form>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="text-black" for="fname">First name</label>
                <input type="text" className="form-control" id="fname"></input>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label className="text-black" for="lname">Last name</label>
                <input type="text" className="form-control" id="lname"></input>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label className="text-black" for="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label className="text-black" for="password">Password</label>
            <input type="password" className="form-control" id="password"></input>
          </div>
          <div className="form-group">
            <label className="text-black" for="message">Message</label>
            <textarea name="" className="form-control" id="message" cols="30" rows="5"></textarea>
          </div>
          <div className="form-group">
            <label className="text-black" for="select">Select</label>

            <select name="" id="select" className="custom-select">
              <option value="">Untree.co</option>
              <option value="">Offers high quality free template</option>
            </select>

          </div>
          <div className="form-group">
            <label className="control control--checkbox">
              <span className="caption">Custom checkbox</span>
              <input type="checkbox" checked="checked"/>
              <div className="control__indicator"></div>
            </label>
          </div>
          <button type="submit" className="btn btn-primary-hover-outline">Submit</button>
        </form>
      </div>
    </div>
  </div>

  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">06. Social Icons</h1>
      </div>
      <div className="col-lg-7">
        <ul className="list-unstyled social-icons light">
          <li><a href="https://google.com"><span className="icon-facebook"></span></a></li>
          <li><a href="https://google.com"><span className="icon-twitter"></span></a></li>
          <li><a href="https://google.com"><span className="icon-linkedin"></span></a></li>
          <li><a href="https://google.com"><span className="icon-google"></span></a></li>
          <li><a href="https://google.com"><span className="icon-play"></span></a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">07. Testimonials</h1>
      </div>
      <div className="col-lg-7">
        <div className="main-slider owl-single owl-carousel">
          <div className="testimonial mx-auto">
            <figure className="img-wrap">
              <img src="images/person_2.jpg" alt="" className="img-fluid"></img>
            </figure>
            <h3 className="name">Adam Aderson</h3>
            <blockquote>
              <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
            </blockquote>
          </div>

          <div className="testimonial mx-auto">
            <figure className="img-wrap">
              <img src="images/person_3.jpg" alt="" className="img-fluid"></img>
            </figure>
            <h3 className="name">Lukas Devlin</h3>
            <blockquote>
              <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
            </blockquote>
          </div>

          <div className="testimonial mx-auto">
            <figure className="img-wrap">
              <img src="images/person_4.jpg" alt="" className="img-fluid"></img>
            </figure>
            <h3 className="name">Kayla Bryant</h3>
            <blockquote>
              <p>&ldquo;There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.&rdquo;</p>
            </blockquote>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div className="container pb-5 mb-5 border-bottom">
    <div className="row">
      <div className="col-lg-12">
        <h1 className="h6 mb-3 text-black">08. Check List</h1>
      </div>
      <div className="col-lg-7">
        <ul className="list-unstyled list-check primary">
          <li>Far far away, behind the word</li>
          <li>Far from the countries Vokalia</li>
          <li>Separated they live in Bookmarksgrove</li>
        </ul>
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