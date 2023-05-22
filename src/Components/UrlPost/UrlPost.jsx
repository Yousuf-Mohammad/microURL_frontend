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
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="url"
                    placeholder="Your URL"
                    value={formData.url}
                    onChange={handleChange}
                />


                <button type="submit">Submit</button>
            </form>

            {shortId ? <div><p>Shorten URL : <span>{shortenUrl}</span> <CopyButton text={shortenUrl} /></p> </div> : null}
        </div>
    );
}

export default UrlPost;
