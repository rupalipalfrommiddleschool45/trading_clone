import React from 'react'
function Stats() {
    return ( 
      <div className='container p-1' >
          <div className='row p-1'>
            <div className='col-6 p-1' >
               <h1 className='mb-5  fs-2'>Trust with confidence</h1>
               <h2 className='fs-5'>Customer-first always</h2>
               <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>        
           <h2 className='fs-5'>No spam or gimmicks</h2>
           <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
           <h2 className='fs-5'>The Zerodha universe
           </h2>
           <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
           <h2 className='fs-5'>Do better with money</h2>
           <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>


            </div>
            <div className='col-6 p-1'>
               <img src='media/images/ecosystem.png' style={{width:"100%"}}></img>
               <div className='text-center'>
                  <a href='' style={{textDecoration:"none"}} className='mx-5'> Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                  <a href='' style={{textDecoration:"none"}}>Try kite</a>
               </div>
            </div>
            </div> 
        </div>
     );
}

export default Stats;