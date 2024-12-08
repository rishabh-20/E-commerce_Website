import React, { useState } from 'react'

const HertIcon = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };
    return (
        <div onClick={toggleLike}>
            {liked ? (
                <span className="text-red-500">❤️</span>
            ) : (
                <span className="text-gray-300">🤍</span>
            )}
        </div>
    )
}

export default HertIcon;