import React from 'react';
import CopyButton from '../CopyButton/CopyButton';
import "./UrlBox.css"


const UrlBox = ({ urls }) => {
    let shortened = `https://microurl.onrender.com/${urls.shortId}`
    return (

        <div className='urlBox'>
            <h3><b className='redirectUrl'>Your Url : {urls.redirectURL}</b> </h3>
            <h4>Shorten Url : <span className='urlSpan'>{shortened}</span> <CopyButton text={shortened} /></h4>
            <h5>Visited through the Shorten Url : <b>{urls.visitHistory.length}</b> </h5>
        </div>
    );
}

export default UrlBox;
