import React from 'react';

const Card = (props) => {
    return (
        <div className="bg-gray-600 mx-2 md:w-1/2 sm:w-[95%] shadow-md mb-8 shadow-gray-900  border-1 rounded-md">
            {props.children}
        </div>
    )
}

export default Card