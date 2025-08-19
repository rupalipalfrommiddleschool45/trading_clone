import React from 'react'
function Footer() {
    return ( 
      <footer style={{backgroundColor:"rgb(250,250,250)"}}>
      <div className='container border-top mt-7'>

      <div className='row mt-5'>
        <div className='col'>
          <img src='media/images/logo.svg' style={{width:"50%"}}></img>
          <p>© 2010 - 2025, Zerodha Broking Ltd.<br/>All rights reserved.</p>
        </div>
        <div className='col' style={{lineHeight:"1"}}>
          <p className='fw-bold fs-5 text-muted'>Company</p>
          <a className='nav-link text-muted' href=''> About</a> <br/>
          <a className='nav-link text-muted' href=''>Products</a> <br/>
          <a className='nav-link text-muted' href=''>Pricing</a> <br/>
          <a className='nav-link text-muted' href=''> Referral programme</a> <br/>
          <a className='nav-link text-muted' href=''> Careers</a> <br/>
          <a className='nav-link text-muted' href=''>Zerodha.tech</a> <br/>
          <a className='nav-link text-muted' href=''>Open source</a> <br/>
          <a className='nav-link text-muted' href=''> Press & media</a> <br/>
         <a className='nav-link text-muted'  href=''> Zerodha Cares (CSR)</a> <br/>
   
     </div>
        <div className='col ' style={{lineHeight:"1"}}>
          <p className='fw-bold fs-5 text-muted'>Support</p>
          <a className='nav-link text-muted' href="">Contact us</a> <br/>
          <a className='nav-link text-muted ' href="">Support portal</a><br/>
          <a className='nav-link text-muted 'href="">Z-Connect blog</a><br/>
          <a className='nav-link text-muted' href="">List of charges</a><br/>
          <a className='nav-link text-muted' href="">Downloads & resources</a><br/>
          <a className='nav-link text-muted ' href="">Videos</a><br/>
          <a className='nav-link text-muted' href="">Market overview</a><br/>
          <a className='nav-link text-muted ' href="">How to file a complaint?</a><br/>
          <a className='nav-link text-muted' href="">Status of your complaints</a><br/>

        </div>
        <div className='col' style={{lineHeight:"1"}}>
          <p className='fw-bold fs-5 text-muted'>Account</p>
          <a className='nav-link text-muted' href=''>Open an account</a><br/>
          <a className='nav-link text-muted'  href=''>Fund transfer</a><br/>
        </div>
      </div>
      <div className='mt-5 ' style={{fontSize:".65rem"}}>
     <p className=' text-muted'> Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p> 
<p className=' text-muted'>
Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

<p className=' text-muted'>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

<p className=' text-muted'>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

<p className=' text-muted'> Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

<p className=' text-muted'>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
      </div>
      <div className="d-flex justify-content-center footer-links flex-wrap text-muted">
      
                <a className="nav-link active"  href="#">NSE</a>
                
                <a className="nav-link  active" href="#">BSE​</a>
              
                <a className="nav-link  active" href="#">MCX</a>
              
                <a className="nav-link  active" href="#">Terms & conditions</a>
             
                <a className="nav-link  active" href="#">Policies & procedures </a>
              
                <a className="nav-link  active" href="#">Privacy policy </a>
             
                <a className="nav-link  active" href="#">Disclosure </a>
             
                <a className="nav-link  active" href="#"> For investor's attention</a>
              
                <a className="nav-link  active" href="#">Investor charter</a>
             
      </div>
      </div>
      </footer>
     );
}

export default Footer;