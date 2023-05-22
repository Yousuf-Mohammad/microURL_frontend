import React from 'react';
import "./CopyButton.css"

const CopyButton = ({ text }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard:', text);

            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);

            });
    };

    return (
        <button className='copy' onClick={handleCopy}>Copy</button>
    );
};

export default CopyButton;