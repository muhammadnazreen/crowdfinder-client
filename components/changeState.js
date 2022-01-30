import React, { useEffect, useState } from 'react';

const changeState = (value) => {
    const [ isJoined, setJoined ] = useState(true);
    if(value == 0)
    {
        isJoined
    }
    
    else if(value == 1)
    {
        setJoined(true)
    }

    else if(value == 2)
    {
        setJoined(false)
    }
}

export default changeState;