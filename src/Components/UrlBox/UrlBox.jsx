import React from 'react';
import CopyButton from '../CopyButton/CopyButton';
import "./UrlBox.css"


const UrlBox = ({ urls }) => {
    let shortened = `https://microurl.onrender.com/${urls.shortId}`
    return (

        <div>
            <h3>Your Url : {urls.redirectURL}</h3>
            <p>Shorten Url : <span>{shortened}</span> <CopyButton text={shortened} /></p>
            <p>Visited through the Shorten Url : {urls.visitHistory.length}</p>
        </div>
    );
}

export default UrlBox;
