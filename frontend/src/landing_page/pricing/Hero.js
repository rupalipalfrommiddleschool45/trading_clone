import React from 'react'
function Hero() {
    return ( 
        <div className='container mt-4 p-5'>
        <div className='row text-center mt-5 '>
        <h1>Charges
        </h1>
        <h4 className='text-muted mt-3 mb-5 fs-4'>
        List of all charges and taxes
        </h4>
    <div className='col-4 mt-5  '>
        <img  src='media/images/pricing0.svg' ></img>
        <h3>Free equity delivery</h3>
        <p className='text-muted mt-4' style={{lineHeight:"1.8em",fontSize:"1rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.

</p>
    </div>
    <div className='col-4 mt-5  '>
    <img  src='media/images/other-trades.svg'></img>
    <h3>Intraday and F&O trades
    </h3>
        <p className='text-muted mt-4'style={{lineHeight:"1.8em",fontSize:"1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
    </div>
    <div className='col-4 mt-5  '>
    <img  src='media/images/pricing0.svg'></img>
    <h3>Free direct MF
    </h3>
        <p className='text-muted mt-4'style={{lineHeight:"1.8em",fontSize:"1rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.

</p>
    </div>
        
    </div>
    </div>
     );
}

export default Hero;