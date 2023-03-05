import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default function Portfolio() {
  return (
    <div>
      <Header />
    <div className="hero-slant overlay" data-stellar-background-ratio="0.5" style={{backgroundImage: `url('images/hero-min.jpg')`}}>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-7 intro text-center">
            <h1 className="text-white font-weight-bold mb-4" data-aos="fade-up" data-aos-delay="0">Append Portfolio</h1>
            <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="100">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
            <p data-aos="fade-up" data-aos-delay="200"><a href="https://google.com" className="btn btn-primary">Get Started</a></p>
            
          
          </div>
          
          
        </div>

        
      </div>

      <div className="slant" style={{backgroundImage: `url('images/slant.svg')`}}></div>
    </div>

    <div className="site-section" id="portfolio-section">
      <div className="container">

        <div className="filters" data-aos="fade-up" data-aos-delay="100">
          <ul>
            <li className="active" data-filter="*">All</li>
            <li data-filter=".packaging">Packaging</li>
            <li data-filter=".mockup">Mockup</li>
            <li data-filter=".typography">Typography</li>
            <li data-filter=".photography">Photography</li>
          </ul>
        </div>

        <div className="filters-content mb-5" data-aos="fade-up" data-aos-delay="200">
          <div className="row grid">
            <div className="isotope-card col-sm-4 all mockup">
              <a href="images/img_v_4-min.jpg" data-fancybox="gal">
                <img src="images/img_v_4-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>Card Vol. 3</h3>
                  <div className="cat">Mockup</div>
                </div>
              </a>
            </div>

            <div className="isotope-card col-sm-4 all mockup">
              <a href="images/img_h_1-min.jpg" data-fancybox="gal">
                <img src="images/img_h_1-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>Card Vol. 3</h3>
                  <div className="cat">Mockup</div>
                </div>
              </a>
            </div>
            <div className="isotope-card col-sm-4 all mockup">
              <a href="images/img_h_8-min.jpg" data-fancybox="gal">
                <img src="images/img_h_8-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>Card Vol. 3</h3>
                  <div className="cat">Mockup</div>
                </div>
              </a>
            </div>
            <div className="isotope-card col-sm-4 all typography">
              <a href="images/img_h_2-min.jpg" data-fancybox="gal">
                <img src="images/img_h_2-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>House Design</h3>
                  <div className="cat">Typography</div>
                </div>
              </a>

            </div>                            
            <div className="isotope-card col-sm-4 all mockup">
              <a href="images/img_h_3-min.jpg" data-fancybox="gal">
                <img src="images/img_h_3-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>WoW</h3>
                  <div className="cat">Mockup</div>
                </div>
              </a>
            </div>
            <div className="isotope-card col-sm-4 all packaging">
              <a href="images/img_h_4-min.jpg" data-fancybox="gal">
                <img src="images/img_h_4-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>Seat</h3>
                  <div className="cat">Packaging</div>
                </div>
              </a>
            </div>
            <div className="isotope-card col-sm-4 all typography">
              <a href="images/img_h_5-min.jpg" data-fancybox="gal">
                <img src="images/img_h_5-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>Seat</h3>
                  <div className="cat">Packaging</div>
                </div>
              </a>
            </div>
            <div className="isotope-card col-sm-4 all photography">
              <a href="images/img_v_1-min.jpg" data-fancybox="gal">
                <img src="images/img_v_1-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>House Design</h3>
                  <div className="cat">Photography</div>
                </div>
              </a>
            </div>
            <div className="isotope-card col-sm-4 all photography">
              <a href="images/img_v_2-min.jpg" data-fancybox="gal">
                <img src="images/img_v_2-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>House Design</h3>
                  <div className="cat">Photography</div>
                </div>
              </a>

            </div>

            <div className="isotope-card col-sm-4 all photography">
              <a href="images/img_v_8-min.jpg" data-fancybox="gal">
                <img src="images/img_v_8-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>House Design</h3>
                  <div className="cat">Photography</div>
                </div>
              </a>

            </div>
            <div className="isotope-card col-sm-4 all photography">
              <a href="images/img_v_3-min.jpg" data-fancybox="gal">
                <img src="images/img_v_3-min.jpg" alt="" className="img-fluid"></img>
                <div className="contents">
                  <h3>House Design</h3>
                  <div className="cat">Photography</div>
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>
    </div>
        

    <div className="testimonial-section bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 mb-5 section-title" data-aos="fade-up" data-aos-delay="0">
            
            <h2 className="mb-4 font-weight-bold heading">Testimonials</h2>
            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
            <p><a href="https://google.com" className="btn btn-primary">Product Tour</a></p>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            
            <div className="testimonial--wrap">
              <div className="owl-single owl-carousel no-dots no-nav">
                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <div className="photo mr-3">
                      <img src="images/person_4-min.jpg" alt="" className="img-fluid"></img>
                    </div>
                    <div className="author">
                      <cite className="d-block mb-0">Kaila Woodland</cite>
                      <span>Owner, Greenland, Inc.</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.&rdquo;</p>
                  </blockquote>
                </div>  

                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <div className="photo mr-3">
                      <img src="images/person_1-min.jpg" alt="" className="img-fluid"></img>
                    </div>
                    <div className="author">
                      <cite className="d-block mb-0">Kaila Woodland</cite>
                      <span>Owner, Greenland, Inc.</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.&rdquo;</p>
                  </blockquote>
                </div>  

                <div className="testimonial-item">
                  <div className="d-flex align-items-center mb-4">
                    <div className="photo mr-3">
                      <img src="images/person_2-min.jpg" alt="" className="img-fluid"></img>
                    </div>
                    <div className="author">
                      <cite className="d-block mb-0">Kaila Woodland</cite>
                      <span>Owner, Greenland, Inc.</span>
                    </div>
                  </div>
                  <blockquote>
                    <p>&ldquo;Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.&rdquo;</p>
                  </blockquote>
                </div>  
              </div>
              <div className="custom-nav-wrap">
                <a href="https://google.com" className="custom-owl-prev"><span className="icon-keyboard_backspace"></span></a>
                <a href="https://google.com" className="custom-owl-next"><span className="icon-keyboard_backspace"></span></a>
              </div>
            </div>

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
