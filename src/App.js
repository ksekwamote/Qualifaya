import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./assets/CSS/main.css"
import "./assets/CSS/schools.css"
import "./assets/CSS/animate.min.css"
//import "./assets/CSS/all.min.css"
import "./assets/CSS/bootstrap.min.css"
import  "./assets/CSS/css2.css"
import logo from "./assets/imgs/logo.svg"
import frontpic from "./assets/imgs/img-1.png"
import Caras from "./Components/Fragments/Caras"
import Graduate from "./assets/imgs/adobe.jpeg"
import botho from "./assets/imgs/botho.jpg"
import ub from "./assets/imgs/ub.jpg"
import limko from "./assets/imgs/limko.jpg"
import Schools_1 from "./Components/Fragments/Schools_1"
import Schools_2 from "./Components/Fragments/Schools_1"
import Autocomplete from '@material-ui/lab/Autocomplete';

const colleges = [
   {school:'University Of Botswana'},
   {school:'Botho University'},
   {school:'Botswana International University of Science and Technology (BUIST)'},
   {school:'Boitekanelo College'},
   {school:'Gaborone College Of Law'}
]

const courses = [
  {module:'Bachelor Of Science'},
  {module:'Bachelor Of Computer Science'},
  {module:'Bachelor Of Medicine'},
  {module:'Bachelor Of Pharmacy'},
  {module:'Bachelor Of Law'}
]



function App() {

  const defaultProps = {
    options: colleges,
    getOptionLabel: (option) => option.school,
  };

  const defaultCourse = {
    options: courses,
    getOptionLabel: (option) => option.module,
  };


  const flatProps = {
    options: colleges.map((option) => option.school),
  };

  const CourseProps ={
    options: colleges.map((option) => option.module),
  }

  

  const [value, setValue] = React.useState(null);

  return (
    <div className="App">
            
            <header class="hero container-fluid border-bottom">
    <nav class="hero-nav container px-4 px-lg-0 mx-auto">
      <ul class="nav w-100 list-unstyled align-items-center p-0">
        <li class="hero-nav__item">
          <h4 style={{fontFamily:"Adobe Gothic Std B",color:"#e01705"}}>Quali<span style={{color:"#0a1f44"}}>faya &#127891;</span></h4>
        </li>
        <li id="hero-menu" class="flex-grow-1 hero__nav-list hero__nav-list--mobile-menu ft-menu">
          <ul class="hero__menu-content nav flex-column flex-lg-row ft-menu__slider animated list-unstyled p-2 p-lg-0">
            <li class="flex-grow-1">
              <ul class="nav nav--lg-side list-unstyled align-items-center p-0">
                <li class="hero-nav__item">
                  <a href="#contact-us" class="hero-nav__link">Contact Us</a>
                </li>
                <li class="hero-nav__item">
                  <a href="#faq" class="hero-nav__link">FAQ</a>
                </li>
                <li class="hero-nav__item">
                  <a href="#pricing" class="hero-nav__link">Pricing</a>
                </li>
                <li class="hero-nav__item">
                  <a href="#testimonials" class="hero-nav__link">Testimonials</a>
                </li>
                <li class="hero-nav__item">
                  <a href="#features" class="hero-nav__link">Features</a>
                </li>
                <li class="hero-nav__item">
                  <a href="#product" class="hero-nav__link">Product</a>
                </li>
              </ul>
            </li>
          </ul>
          <button onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            class="ft-menu__close-btn animated">
            <svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </li>
        <li class="d-lg-none flex-grow-1 d-flex flex-row-reverse hero-nav__item">
          <button onclick="document.querySelector('#hero-menu').classList.toggle('ft-menu--js-show')"
            class="text-center px-2">
            <i class="fas fa-bars"></i>
          </button>
        </li>
      </ul>
    </nav>
    <div class="hero__content container mx-auto">
      <div class="row px-0 mx-0 align-items-center">
        <div class="col-lg-6 px-0">
          <h1 style={{color:'#0a1f44'}} class="hero__title mb-3">
            OUR PRODUCT IS <span style={{color:"#e01705"}} class="highlight">BETTER</span> THAN OTHER
          </h1>
          <p class="hero__paragraph mb-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard
          </p>
          
        </div>
        <div style={{marginRight:50}} class="col-lg-5 mt-5 mt-lg-0 mx-0">
          <div class="hero__img-container">
          <form  noValidate autoComplete="off">
        
              <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} id="standard-basic" label="Institution" />
        )}
      />
    <br></br>
              <Autocomplete
        {...defaultCourse}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField {...params} id="standard-basic" label="Course" />
        )}
      />
              
           </form>
      <br></br>   <br></br>  
           <div style={{padding:10}} class="hero__btns-container">
            <a style={{borderRadius:25 , backgroundColor:'#0a1f44' , textTransform:"capitalize" , fontWeight:500}} class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
              <span>Check Accreditation</span>
            </a>
         
          </div>
          </div>
        </div>
      </div>
    </div>
  </header>



    <Schools_1/>

    <Schools_2/>


  <div id="product" class="block-5 space-between-blocks">
    <div class="container">

      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <p class="block__pre-title mb-2">WHY CHOOSING US</p>
        <h1 class="block__title mb-3">Easy Process With <span class="highlight">Best Features</span></h1>
        <p class="block__paragraph mb-0">

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard
        </p>
      </div>
      <div class="row align-items-center flex-column-reverse flex-lg-row px-2">

        <div class="col-lg-4">
          <div class="card-2 d-flex flex-row flex-lg-row-reverse">
            <div>
              <span class="card-2__symbol mx-auto">
                <i class="fas fa-heartbeat"></i>
              </span>
            </div>
            <div class="px-2"></div>
            <div>
              <h3 class="card-2__title mb-2">Heart Rate Monitor</h3>
              <p class="card-2__paragraph">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div class="card-2 d-flex flex-row flex-lg-row-reverse">
            <div>
              <span class="card-2__symbol mx-auto">
                <i class="fas fa-briefcase-medical"></i>
              </span>
            </div>
            <div class="px-2"></div>
            <div>
              <h3 class="card-2__title mb-2">Blood Pressure Manager</h3>
              <p class="card-2__paragraph">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div class="card-2 d-flex flex-row flex-lg-row-reverse">
            <div>
              <span class="card-2__symbol mx-auto">
                <i class="fas fa-bell"></i>
              </span>
            </div>
            <div class="px-2"></div>
            <div>
              <h3 class="card-2__title mb-2">Alarm Alert</h3>
              <p class="card-2__paragraph">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
   
        <div class="col-lg-4 my-5 text-center">
          <img src="assets/imgs/img-2.png" class="w-75"></img>
        </div>
  
        <div class="col-lg-4">
          <div class="card-2 d-flex">
            <div>
              <span class="card-2__symbol mx-auto">
                <i class="fas fa-map-marker-alt"></i>
              </span>
            </div>
            <div class="px-2"></div>
            <div>
              <h3 class="card-2__title mb-2">Location Finder</h3>
              <p class="card-2__paragraph">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div class="card-2 d-flex">
            <div>
              <span class="card-2__symbol mx-auto">
                <i class="fas fa-fingerprint"></i>
              </span>
            </div>
            <div class="px-2"></div>
            <div>
              <h3 class="card-2__title mb-2">Fingerprint Lock</h3>
              <p class="card-2__paragraph">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
          <div class="card-2 d-flex">
            <div>
              <span class="card-2__symbol mx-auto">
                <i class="fas fa-mobile"></i>
              </span>
            </div>
            <div class="px-2"></div>
            <div>
              <h3 class="card-2__title mb-2">Camera and Bluetooth</h3>
              <p class="card-2__paragraph">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="features" class="block-11 space-between-blocks">
    <div class="container">
     
      <div class="block__header col-lg-8 col-xl-7 mx-auto text-center">
        <p class="block__pre-title mb-2">GET MORE DETAILS</p>
        <h1 class="block__title mb-3">Awesome Technical <span class="highlight">Specs</span></h1>
        <p class="block__paragraph mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard
        </p>
      </div>
      <div class="row align-items-center justify-content-center flex-column-reverse flex-lg-row px-2">
        <div class="col-lg-4 col-xl-5 p-lg-5">
          <img class="w-100" src="assets/imgs/img-3.png"></img>
        </div>
        <div class="col-lg-8 col-xl-6">
          <div class="row">
            <div class="col-md-6 mb-2-1rem">
              <div class="card-1 card-1--selected text-center">
                <span class="card-1__symbol mx-auto mb-4">
                  <i class="fas fa-camera-retro"></i>
                </span>
                <h3 class="card-1__title mb-2">Camera Available</h3>
                <p class="card-1__paragraph">
                  Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s
                  standard.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-2-1rem">
              <div class="card-1 text-center">
                <span class="card-1__symbol mx-auto mb-4">
                  <i class="fas fa-leaf"></i>
                </span>
                <h3 class="card-1__title mb-2">Eco Friendly</h3>
                <p class="card-1__paragraph">
                  Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s
                  standard.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-2-1rem">
              <div class="card-1 text-center">
                <span class="card-1__symbol mx-auto mb-4">
                  <i class="fas fa-cog"></i>
                </span>
                <h3 class="card-1__title mb-2">Readable in Sunlight</h3>
                <p class="card-1__paragraph">
                  Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s
                  standard.
                </p>
              </div>
            </div>
            <div class="col-md-6 mb-2-1rem">
              <div class="card-1 text-center">
                <span class="card-1__symbol mx-auto mb-4">
                  <i class="fas fa-database"></i>
                </span>
                <h3 class="card-1__title mb-2">30 Days Battery Time</h3>
                <p class="card-1__paragraph">
                  Lorem Ipsum is simply dummy text of
                  the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s
                  standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="testimonials" class="block-20 space-between-blocks">
    <div class="container">
      <div class="block__header col-lg-8 col-xl-7 mx-auto text-center px-0">
        <h1 class="block__title mb-3">What Buyers Says About Us</h1>
        <p class="block__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard
        </p>
      </div>
      <div class="row px-2 pt-4">
        <div class="col-lg-4">
          <div class="testimonial-card-1 mb-5">
            <p class="testimonial-card-1__paragraph mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard

              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen.
            </p>
            <div class="block-20__person">
              <div class="mb-2">
                <img class="block-20__person-avatar" src="assets/imgs/profile-2.png"></img>
              </div>
              <div class="flex-grow-1 d-flex flex-column">
                <span class="block-20__person-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
                <span class="block-20__person-name my-1">Ali Boukeroui</span>
                <span class="block-20__person-info">indiehackers.com</span>
              </div>
            </div>
            <span class="testimonial-card-1__quote-symbol">
              <i class="fas fa-quote-left"></i>
            </span>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-card-1 mb-5">
            <p class="testimonial-card-1__paragraph mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen.
            </p>
            <div class="block-20__person">
              <div class="mb-2">
                <img class="block-20__person-avatar" src="assets/imgs/profile-2.png"></img>
              </div>
              <div class="flex-grow-1 d-flex flex-column">
                <span class="block-20__person-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
                <span class="block-20__person-name my-1">Ali Boukeroui</span>
                <span class="block-20__person-info">indiehackers.com</span>
              </div>
            </div>
            <span class="testimonial-card-1__quote-symbol">
              <i class="fas fa-quote-left"></i>
            </span>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="testimonial-card-1 mb-5">
            <p class="testimonial-card-1__paragraph mb-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen.
            </p>
            <div class="block-20__person">
              <div class="mb-2">
                <img class="block-20__person-avatar" src="assets/imgs/profile-2.png"></img>
              </div>
              <div class="flex-grow-1 d-flex flex-column">
                <span class="block-20__person-rating">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
                <span class="block-20__person-name my-1">Ali Boukeroui</span>
                <span class="block-20__person-info">indiehackers.com</span>
              </div>
            </div>
            <span class="testimonial-card-1__quote-symbol">
              <i class="fas fa-quote-left"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="pricing" class="block-17 px-4 space-between-blocks">
    <div class="container">
      <div class="block-17__header col-lg-8 col-xl-7 mx-auto text-center px-0">
        <h1 class="block__title mb-3">PRICING</h1>
        <p class="block__paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard
        </p>
      </div>
      <div class="block-17__card row flex-column-reverse flex-lg-row justify-content-center">
        <div class="testimonial-card-3 text-center col-lg-6 px-0 d-flex align-items-center justify-content-center">
          <div class="px-4 px-lg-5">
            <img class="person__avatar" src="assets/imgs/profile-2.png"></img>
            <p class="testimonial-card-3__paragraph my-4">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the
              industry’s standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <div class="flex-grow-1 d-flex flex-column mb-3">
              <span class="person__name">Ali Boukeroui</span>
              <span class="person__info my-1">indiehackers.com</span>
              <span class="person__rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
          <span class="testimonial-card-3__quote-symbol">
            <i class="fas fa-quote-left"></i>
          </span>
        </div>
        <div class="cta-card col-lg-5 px-0">
          <div class="plan-card text-center">
            <h6 class="plan-card__name mb-0">Free Shipping</h6>
            <p class="discount mt-3 mb-0 d-flex align-items-center justify-content-center">
              <span class="discount__old-price mx-2">$300</span>
              <span class="discount__percentage mx-2">50% off</span>
            </p>
            <p class="plan-card__price my-2">$149</p>
            <span class="plan-card__duration">90 Days Money Back Guarenteed</span>
            <ul class="plan-features list-unstyled mt-5 mb-0">
              <li class="plan-features__li">
                <span class="plan-features__li-icon mx-1">
                  <svg class="bi bi-check2-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    <path fill-rule="evenodd"
                      d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z" />
                  </svg>
                </span>
                <span class="mx-3">The Watch</span>
              </li>
              <li class="plan-features__li">
                <span class="plan-features__li-icon mx-1">
                  <svg class="bi bi-check2-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    <path fill-rule="evenodd"
                      d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z" />
                  </svg>
                </span>
                <span class="mx-3">+Bonus: Accessories</span>
              </li>
              <li class="plan-features__li">
                <span class="plan-features__li-icon mx-1">
                  <svg class="bi bi-check2-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                    <path fill-rule="evenodd"
                      d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z" />
                  </svg>
                </span>
                <span class="mx-3">Lifetime Mobile App</span>
              </li>
              <li class="mt-5">
                <a href="#" class="d-block btn btn-primary px-5 mx-auto">
                  Buy Now
                </a>
                <small class="d-block mt-2 text-center">208 Left. Discount ends after 2 weeks</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="faq" class="block-39 space-between-blocks">
    <div class="container">

      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title">Frequently Asked Questions</h1>
      </div>
      <div class="row px-2">
        <div class="col-lg-6">
          <div class="content-block">
            <h4 class="content-block__title">
              What caused that horrible financial crisis in 2008?
            </h4>
            <p class="content-block__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen
              book.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content-block">
            <h4 class="content-block__title">
              Why does Southwest only fly 737’s?
            </h4>
            <p class="content-block__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen
              book.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content-block">
            <h4 class="content-block__title">
              How are interest rates adjusted?
            </h4>
            <p class="content-block__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen
              book.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="content-block">
            <h4 class="content-block__title">
              What’s up with the IMF bailing out all of these countries?
            </h4>
            <p class="content-block__paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen
              book.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div id="contact-us" class="block-28 space-between-blocks border-top border-bottom">
    <div class="container">
      <div class="row h-100">
        <div class="col-lg-6 h-100 block-28__content-side">
          <div class="contact-info">
            <h5 class="contact-info__title mb-3">Get in Touch</h5>
            <p class="contact-info__paragraph mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard
              dummy text ever since the 1500s.
            </p>
            <div class="mb-5">
              <h6 class="contact-info__title-2 mb-3">COLLABORATE</h6>
              <p class="d-flex flex-column">
                <span class="contact-info__item mb-2">Support@example.com</span>
                <span class="contact-info__item">Fax: (099) 453-1357</span>
              </p>
            </div>
            <div class="mb-5">
              <h6 class="contact-info__title-2 mb-3">COLLABORATE</h6>
              <p class="d-flex flex-column">
                <span class="contact-info__item mb-2">
                  <i class="fas fa-phone"></i><span class="mx-2">Support@example.com</span>
                </span>
                <span class="contact-info__item">
                  <i class="fas fa-envelope"></i><span class="mx-2">Fax: (099) 453-1357</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 h-100 block-28__form-side">
          <form onsubmit="submitContactForm(event)" class="contact-form text-center">
            <div class="contact-form__header mb-5">
              <h6 class="contact-form__title mb-3">Contact Us</h6>
              <p class="contact-form__paragraph mb-0 mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>
            <input type="text" class="contact-form__input" placeholder="Full Name"></input>
            <input type="email" class="contact-form__input" placeholder="Email"></input>
            <textarea class="contact-form__input" placeholder="Message"></textarea>
            <button class="btn btn-primary w-100">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  </div>



  <div class="block-32 space-between-blocks">
    <div class="container">
     
      <div class="col-lg-8 col-xl-7 mx-auto text-center mb-5">
        <h1 class="block__title mb-3">Buy Now And Save 50%</h1>
        <p class="block__paragraph mb-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard
        </p>
      </div>
      <div class="text-center">
        <a href="#" class="btn btn-primary">Buy Now</a>
      </div>
    </div>
  </div>



  <div class="block-44 py-5">
    <div class="container">
      <div class="row px-0 mx-0 justify-content-center align-items-center">
        <div class="block-44__logo-container">
          <img class="block-44__logo" src="assets/imgs/logo.svg"></img>
        </div>
        <ul class="block-44__list list-unstyled justify-content-center mb-0">
          <li class="block-44__li-1">
            <a href="#" class="block-44__link">Affiliate</a>
          </li>
          <li class="block-44__li-1">
            <a href="#" class="block-44__link">Entreprise</a>
          </li>
          <li class="block-44__li-1">
            <a href="#" class="block-44__link">Products</a>
          </li>
          <li class="block-44__li-1">
            <a href="#" class="block-44__link">Account</a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="block-44__divider"></hr>
    <div class="container">
      <div class="row flex-column flex-md-row px-2 justify-content-center">
        <div class="flex-grow-1">
          <ul class="block-44__extra-links d-flex list-unstyled p-0">
            <li class="mx-2">
              <a href="#" class="block-44__link m-0">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="mx-2">
              <a href="#" class="block-44__link m-0">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li class="mx-2">
              <a href="#" class="block-44__link m-0">
                <i class="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
        <p class="block-41__copyrights">&copy; 2020 YourBrandName. All Rights Reserved.</p>
      </div>
    </div>
  </div>

    </div>
  );
}

export default App
