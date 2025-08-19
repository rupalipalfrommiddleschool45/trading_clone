import React from 'react'
function LeftSection({
    imgUrl, productName, productDescription, tryDemo, learnMore, gogglePlay, appStore
}) {
    return (
        <div className='container  mt-5 '>
            <div className='row between v-align mt-5'>
                <div className='col-7 '>
                    <img src={imgUrl}></img>
                </div>
                <div className='col-5 p-5 mt-5'> 
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div>
                        <a href='' style={{textDecoration:"none"}}>{tryDemo} &nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{marginLeft:"50px" , textDecoration:"none"}}>{learnMore}&nbsp;<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                        <a href={gogglePlay}>
                            <img src="media/images/googlePlayBadge.svg"></img>"
                        </a>
                        <a href={appStore}>
                            <img src='media/images/appstoreBadge.svg' style={{marginLeft:"50px"}}></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;