import React from 'react'
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center mt-5 justify-content-space-around text-muted'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/smallcaseLogo.png" alt="" />

                    <p>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} alt="" />

                    <p>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/streakLogo.png" style={{ width: "50%" }} alt="" />

                    <p>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.



                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/dittoLogo.png" style={{ width: "50%" }} alt="" />

                    <p>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/tijori.svg" style={{ width: "50%" }} alt="" />

                    <p>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src="media/images/zerodhaFundhouse.png" style={{ width: "50%" }} alt="" />

                    <p>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.</p>
                </div>
                <button className='p-2 btn btn-primary mt-4 fs-5 mb-5 text-center' style={{ width: "20%", margin: "0 auto",backgroundColor:"#387ed1",color:"#FFF" ,borderRadius:"3px"}}>Signup for free</button>
            </div>
          
        </div>
    );
}

export default Universe;