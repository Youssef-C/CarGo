import React from "react";
import { Rating } from 'react-simple-star-rating';
import { useState } from "react";

export default function StarRating() {
    const [rating, setRating] = useState(0) // initial rating value
  
    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
      // Some logic
    }
  
    return (
      <div className='App'>
        <Rating onClick={handleRating} ratingValue={rating} transition={true} /* Rating Props */ />
      </div>
    )
  };