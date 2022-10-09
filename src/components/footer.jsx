import React from 'react'

const footer = () => {
    return (
        <div>
            <div id='footer' style={{overflowX:'hidden'}}>

                <div className="row d-flex justify-content-center text-center gy-4 h-100">
                    <div className="col-md-8 align-self-end">
                    info@refurbs.pk | CT-8, Ground floor office , Zee Plaza, Block D, Gulberg, Islamabad
                    </div>
                    <div className="col-md-4  align-self-end">
                    <a href="mailto:refurbs.pk@gmail.com" style={{color:'white'}}>Email rightnow</a> &nbsp; OR &nbsp; <a href="tel:+923046263413"  style={{color:'white'}}> place a call</a>   
                    </div>
                    <div className="col-md-6">
                    <p>© 2022 Refrubs.pk. All rights reserved.</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer
