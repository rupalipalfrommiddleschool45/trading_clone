import React from 'react'
function Pricing() {
    return (
        
        <div className='container mt-5 p-3  '>
          
        <div className='row align-items-center'>
          <div className='col-md-6 mt-5 fs-5'>
            <h1 className=' mb-4 text-muted fs-2'>Unbeatable pricing </h1>
            <p  className='fs-5 text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            <a href='' style={{textDecoration:"none"}}> See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className='col-6 mt-5'>
            <div className='row'>
           <div className='col-4' >
           <img src='media/images/pricing-eq.svg'></img>
           <small className='text-muted'>Free account opening</small>
           </div>
           <div className='col-4 '><img src='media/images/pricing-eq.svg'></img>
           <small class="text-muted">Free equity delivery and direct mutual funds</small>
           </div>
            <div className='col-4 '>
            <img src='media/images/other-trades.svg'></img>
            <small class="text-muted">Intraday and F&amp;O</small>
            </div>
            </div>

          </div>
        </div>
          </div>
      );
}

export default Pricing;