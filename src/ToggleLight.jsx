import React, { useState } from 'react';

const ToggleLight = () => {
    const [Darkmode, SetDarkmode] = useState(false);

    const togglemode = () => {
        SetDarkmode(!Darkmode)
    };
    return (
        <div className={`bg-${Darkmode?"black":"white"}`}>
            <button onClick={togglemode} className='toggle-button'>
                Switch to Mode
                </button>
            <h1 className={`text-${Darkmode?"white":"black"}`}>{Darkmode ? "Dark Mode" : "Light Mode"}</h1>
        </div>
    );
};

export default ToggleLight;