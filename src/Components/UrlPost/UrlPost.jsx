import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./UrlPost.css"
import CopyButton from '../CopyButton/CopyButton';

const UrlPost = () => {

    const [formData, setFormData] = useState({
        url: " ",

    });
    const [shortId, setShortId] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post('https://microurl.onrender.com/url', formData)
            .then(res => {
                setShortId(res.data.id)
            })
    };

    ////////////////////////////////////////////////////////////////////

    let shortenUrl = `https://microurl.onrender.com/${shortId}`


    return (
        <div>
            <h1 className='heading'>Drop Your URL to get a shortened version </h1>
            <p>(Please do not give space before or in between the link)</p>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="url"
                    placeholder="Your URL"
                    value={formData.url.trim()}
                    onChange={handleChange}
                    className='postBox'
                />


                <button className='submitButton' type="submit">Submit</button>
            </form>

            {shortId ? <div><h4>Shorten URL : <span className='shortLink'>{shortenUrl}</span> <CopyButton text={shortenUrl} /></h4> </div> : null}
        </div>
    );
}

export default UrlPost;
