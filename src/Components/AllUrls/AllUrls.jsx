import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AllUrls.css"
import UrlBox from '../UrlBox/UrlBox';

const AllUrls = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://microurl.onrender.com/")
            .then(res => {
                setData(res.data.entry)

            })
            .catch(error => {
                console.log(error);
            });
    });

    return (
        <div>
            {data.map(urls => <UrlBox
                key={urls._id}
                urls={urls}></UrlBox>)}
        </div>
    );
}

export default AllUrls;
