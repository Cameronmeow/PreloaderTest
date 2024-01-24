import React from 'react'
import './PreLoader.css'

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnime
    },[]);
    return (
        <div className="PreLoader"> 
            <div classname="texts-container">
                <span>Developer</span>
                <span>Curator,</span>
                <span>Vibe</span>
            </div>
        </div>
    )
    
}

export default PreLoader