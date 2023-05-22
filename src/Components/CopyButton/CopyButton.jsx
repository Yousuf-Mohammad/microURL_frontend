import React from 'react';

const CopyButton = ({ text }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard:', text);
                // You can add a success message or perform other actions here
            })
            .catch((error) => {
                console.error('Error copying text to clipboard:', error);

            });
    };

    return (
        <button onClick={handleCopy}>Copy</button>
    );
};

export default CopyButton;