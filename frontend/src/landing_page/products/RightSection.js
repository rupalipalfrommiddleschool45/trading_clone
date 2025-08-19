import React from 'react'
function RightSection({
    imgUrl, productName, productDescription,  learnMore,
}) {
    return (
        <div className='container  mt-5 '>
            <div className='row between v-align  mt-5'>
               <div className='col-4 p-5 mt-5' style={{paddingTop:"65px"}}> 
                    <h1 style={{color:"#424242"}}>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                         <a href='' style={{ textDecoration:"none"}}>{learnMore} &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                   
                </div>
                <div className='col-8 '>
                    <img src={imgUrl}></img>
                </div>
            </div>
        </div>
    );
}

export default RightSection;