import React from 'react'
function Hero() {
    return (
        
            <div className='container p-5 mb-5'>
                <div className='row text-center'>
                    <img src='media/images/homeHero.png' className='mb-5'></img>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='p-2 btn btn-primary mt-5 fs-5 mb-5' style={{ width: "20%", margin: "0 auto" ,backgroundColor:"#387ed1",color:"#FFF" ,borderRadius:"3px" }}>Signup for free</button>
                </div>
            </div>
        
    );
}

export default Hero;