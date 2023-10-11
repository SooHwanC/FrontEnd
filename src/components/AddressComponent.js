import React, { useState } from 'react';

function AddressComponent() {
    const [address, setAddress] = useState('');

    const handleInputChange = (e) => {
        setAddress(e.target.value);
    }

    const showAddress = () => {
        alert("입력한 주소: " + address);
    }

    return (
        <div>
            <input
                type="text"
                value={address}
                onChange={handleInputChange}
            />
            <button onClick={showAddress}>주소 보기</button>
        </div>
    );
}

export default AddressComponent;
