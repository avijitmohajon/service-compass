import React from 'react';
import Lottie from 'lottie-react';
import loader from '../assets/loader1.json';

const Loading = () => {
    return (
        <div className=''>
             <Lottie className="w-full h-64 "  animationData={loader} loop={true} />
        </div>
    );
};

export default Loading;