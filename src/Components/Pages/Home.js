import React from 'react';
import TextField from '@material-ui/core/TextField';
import "./../../assets/CSS/main.css"
import "./../../assets/CSS/schools.css"
import "./../../assets/CSS/animate.min.css"

//import "./assets/CSS/all.min.css"
import "./../../assets/CSS/bootstrap.min.css"
import  "./../../assets/CSS/css2.css"
import logo from "./../../assets/imgs/logo.svg"
import frontpic from "./../../assets/imgs/img-1.png"

import botho from "./../../assets/imgs/botho.jpg"
import ub from "./../../assets/imgs/ub.jpg"
import limko from "./../../assets/imgs/limko.jpg"
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

export const Header = () => {

    return (

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


    )
}

const Acceptance = () => {
    return (
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
                  industry’s standard.
                </p>
                <div style={{padding:10 ,paddingLeft:23}} class="hero__btns-container">
                <a style={{borderRadius:25 , backgroundColor:'#0a1f44' , textTransform:"capitalize" , fontWeight:500}} class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
                  <span>Will you get Accepted?</span>
                </a>
              </div>
                <div class="block-20__person">
                  <div class="mb-2">
                    <img class="block-20__person-avatar" src={ub}></img>
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="block-20__person-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="block-20__person-name my-1">University Of Botswana</span>
                   
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
                  industry’s standard.
                </p>
                <div style={{padding:10 ,paddingLeft:23}} class="hero__btns-container">
                <a style={{borderRadius:25 , backgroundColor:'#0a1f44' , textTransform:"capitalize" , fontWeight:500}} class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
                  <span>Will you get Accepted?</span>
                </a>
              </div>
                <div class="block-20__person">
                  <div class="mb-2">
                    <img class="block-20__person-avatar" src={botho}></img>
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="block-20__person-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="block-20__person-name my-1">Botho University</span>
          
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
                  industry’s standard.
                </p>
                <div style={{padding:10 ,paddingLeft:23}} class="hero__btns-container">
                <a style={{borderRadius:25 , backgroundColor:'#0a1f44' , textTransform:"capitalize" , fontWeight:500}} class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
                  <span>Will you get Accepted?</span>
                </a>
              </div>
                <div class="block-20__person">
                  <div class="mb-2">
                    <img class="block-20__person-avatar" src={limko}></img>
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="block-20__person-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="block-20__person-name my-1">Limkokwing University</span>
              
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
                  industry’s standard.
                </p>
                <div style={{padding:10 ,paddingLeft:23}} class="hero__btns-container">
                <a style={{borderRadius:25 , backgroundColor:'#0a1f44' , textTransform:"capitalize" , fontWeight:500}} class="hero__btn btn btn-primary mb-2 mb-lg-0" href="#">
                  <span>Will you get Accepted?</span>
                </a>
              </div>
                <div class="block-20__person">
                  <div class="mb-2">
                    <img class="block-20__person-avatar" src={botho}></img>
                  </div>
                  <div class="flex-grow-1 d-flex flex-column">
                    <span class="block-20__person-rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </span>
                    <span class="block-20__person-name my-1">Botho University</span>
            
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
    
    )
}

const contactUs = () => {
    return (
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
    
    )
}

export const Footer = () =>{
    return (

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
        <p class="block-41__copyrights">&copy; 2020 Kutlo Sekwamote. All Rights Reserved.</p>
      </div>
    </div>
  </div>
    )
}

function Home() {

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
                <Header/>
   
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


            <Acceptance/>



            <contactUs/>

            
            <Footer/>

 



  

    </div>
  );
}

export default Home
