import React from 'react'
import headerImage from './../images/header8.png'
import Typed from 'react-typed'
import { useState, useEffect, useRef } from 'react'
import Data from '../components/data'
import {AiFillPlusCircle} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'
import {BsFillUmbrellaFill} from 'react-icons/bs'
import {GoTools} from 'react-icons/go'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BiTimer} from 'react-icons/bi'
import {GiMoneyStack} from 'react-icons/gi';
import {FaToolbox} from 'react-icons/fa'
import bookImage from './../images/book.webp'
<style>
@import url('https://fonts.googleapis.com/css2?family=Sail&display=swap');
</style>



  
const Homepage = () => {

    const[clicked, setClicked] = useState(false);
    const[clickedTwo, setClickedTwo] = useState(false);
    const [popup, setPopup] = useState(false);
    const modalRef = useRef();

    const toggle = (id) =>{
        if(clicked===id){
            return setClicked(null)
        }
         setClicked(id)
    }
    const toggleTwo = (id) =>{
        if(clickedTwo===id){
            return setClickedTwo(null)
        }
         setClickedTwo(id)
    }
    
      useEffect(()=>{
          document.addEventListener('mousedown', (event)=>{
              if (!modalRef.current.contains(event.target)){
                  setPopup(false)
              }
          })
      })

    return (
        <div>
         {/*------------------------------------Header-------------------------------------*/}
          <section id="header" style={{overflowX:'hidden'}}>
           <img className='header-image' src={headerImage} style={{width:'27%'}} alt="" />
           <div className='info'>
            <h1 className='main-info'>Home Maintenance & Refurbishing Services</h1>
            <Typed
            className='typed-text'
            strings={['Want to fix your home at ease', 
            'We provide plumbing, electric, janitorial(tank wash) services',
            'Or want to refurbish or construct home',
            'We also offer renovation and construction services to our clients',
            'One stop-solution for all your problems at home'
            ]} 
            typeSpeed={40}
            backSpeed={80}
            loop
            />
            <p><button className='btn-header' onClick={()=>setPopup(true)}>Book Us</button></p>
         </div> 
         
         </section>

{/*------------------------------------Services-------------------------------------*/}
         <section id="services" className="my-5" style={{overflowX:'hidden'}}>
          <div className="services py-3">
              <h2 className='text-center' style={{color:'#00C9AF'}}>SERVICES</h2>
        <div className="row justify-content-center">
          {Data.slice(0, 6).map((card) => (
            <div className="col-lg-4 col-md-6 col-sm-6 gy-5">
              <div className="card my-2 h-100 services-card border text-center">
                <img src={card.img} className="card-img-top pt-4 m-auto" alt="..." style={{width:'50%'}} />
                <div className="card-body">
                  <h4 className="card-title"  style={{color:'#00C9AF'}}>{card.title}</h4>
                  <p className="card-text">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>   
      </section>

        
{/*------------------------------------Why us-------------------------------------*/}
<section id='why-us' style={{height:'90vh'}}>
   <div className='why-us'>
       <div className="row">
           <div className="col-lg-6">
               <div className="sticks">
               <h2 style={{color:'#00C9AF'}}>|</h2>
               <h2 style={{color:'#00C9AF'}}>|</h2>
               </div>
           <h2 style={{color:'#00C9AF'}}>Reason to Choose Us</h2>
           <div className="sticks">
           <h2 style={{color:'#00C9AF'}}>|</h2>
               <h2 style={{color:'#00C9AF'}}>|</h2>
               </div>
           </div>
           <div className="col-lg-6">
               <div className="row">
                   <div className="col-lg-6 gy-5">
                       <BsFillUmbrellaFill/> Reliable Service
                   </div>
                   <div className="col-lg-6 gy-5">
                   <FaToolbox/>Trained Staff
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-6   gy-5">
                   <BiTimer/>Expeditiouse Service
                   </div>
                   <div className="col-lg-6  gy-5">
                   <RiCustomerService2Fill/>  Customer-centric
                   </div>
               </div>
               <div className="row">
                   <div className="col-lg-6 gy-5">
                   <GiMoneyStack/> Budgetted Choice
                   </div>
                   <div className="col-lg-6 gy-5">
                    <GoTools/>Equipped Workers
                   </div>
               </div>
               </div>
           </div>
       </div>
</section>
   
{/*------------------------------------Bookings-------------------------------------*/}
<section id='book-us' style={{background:'white', height:'100vh', overflowX:'hidden'}} className='d-flex align-items-center' >
   <div className="book-us">
       <div className="row h-100 d-flex">
           <div className=" column1 col-lg-4 col-md-6 col-sm-6 order-lg-1 order-md-2 order-sm-2 align-self-center">
              <ul>
               <li>Make a call and address your issue</li>
               <li>Our maintenance worker will come to your place
                    and fix the issue</li>
               <li>Pay when the job is done</li>
               <li>Expect a feedback call to ensure satisfaction</li>
               </ul> 
           </div>
           <div className="col-lg-5 column2 col-md-6 col-sm-6 order-lg-2 order-md-3 order-sm-3">
           <img src={bookImage} className="bookingimg" alt="" style={{maxWidth:'80%'}} />
           </div>
           <div className="col-lg-3 column3 col-md-12 col-sm-12 order-lg-3 order-md-1 order-sm-1 text-center">
               <div className='sticks'>
               <h2 className='displaynone' style={{color:'#00C9AF'}}>|</h2>
               <h2 className='displaynone' style={{color:'#00C9AF'}}>|</h2>
               </div>
               
            <h2 style={{color:'#00C9AF'}}>Book Us</h2>
            <h2 className='displaynone' style={{color:'#00C9AF'}}>|</h2>
               <h2 className='displaynone' style={{color:'#00C9AF'}}>|</h2>   
           </div>
           <div className="col-lg-12 column1 order-4 text-center">
               <h6>Call us Now at 03046263413</h6>
               
           </div>
       </div>
   </div>
</section>
{/*-----------------------------------------------popup-----------------------------*/}
<div className='popup-up'  style={{visibility: popup ? 'visible' : 'hidden'}}>
            <form ref={modalRef} action="https://formsubmit.co/refurbs.pk@gmail.com" method="POST" className='popup'>
            <label>
                Name:<br/>
            <input type="text" name="name" required style={{marginRight: '2%'}}/>
            </label>
            <br/>
            <label>
                Email: <br/>
            <input type="email" name="email"required/>
            </label>            
            <br/>
            <label> 
            Subject: <br/>
            <select name="cars" id="cars" form="carform">
            <option>Electrical work</option>
            <option>Plumbing work</option>
            <option>Paint</option>
            <option>Janitorial Services</option>
            <option>Masonry work</option>
            <option>Renovation/Construction work</option>
            </select>
            </label>
            <br/>
            
            <label> 
                Your Message:<br/>
            <textarea name='textarea' style={{width:'350px', height:'100px'}}/>
            </label>
            <br/>
             <input type="hidden" name="_next" value="http://refurbs.pk/thankyou"/>
            <button type="submit" className='px-2 py-1' style={{background:'#191E34', color:'white'}}>Send</button>
            <p style={{color:'red', fontSize:'12px'}}>Note: For urgent queries call us now at 03319833816</p>
             </form>
             
             </div>
             
</div>

 )
}

export default Homepage
