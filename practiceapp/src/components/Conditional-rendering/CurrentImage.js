import React from 'react';
import Daytime from './Daytime';
import Nighttime from './Nighttime';


function CurrentImage() {   
    const time = new Date().getHours();   
    return (   
        time >= 6 && time <= 18   
            ? <Daytime />   
            : <Nighttime />   
    );  
}
export default CurrentImage;