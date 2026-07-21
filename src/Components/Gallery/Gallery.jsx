import React, { useState } from 'react';
import './Gallery.css';

import pic1 from '../../assets/pic1.jpeg';
import pic2 from '../../assets/pic2.jpeg';
import pic3 from '../../assets/pic3.jpeg';
import pic4 from '../../assets/pic4.jpeg';
import pic5 from '../../assets/pic5.jpeg';
import img3 from '../../assets/img3.jpeg';
import pic6 from '../../assets/pic6.jpeg';
import pic7 from '../../assets/pic7.jpeg';
import pic11 from '../../assets/pic11.jpeg';
import pic12 from '../../assets/pic12.jpeg';
import pic13 from '../../assets/pic13.jpeg';
import pic14 from '../../assets/pic14.jpeg';
import pic15 from '../../assets/pic15.jpeg';
import pic16 from '../../assets/pic16.jpeg';


const images = [pic1, pic2, pic3, pic4, pic5, img3, pic6, pic7, pic11, pic12, pic13, pic14, pic15, pic16];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scale, setScale] = useState(1);

  const openImage = (img) => {
    setSelectedImage(img);
    setScale(1);
  };

  const closeImage = () => setSelectedImage(null);

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prev) => {
      const newScale = e.deltaY < 0 ? prev + 0.1 : prev - 0.1;
      return Math.min(Math.max(newScale, 1), 3);
    });
  };

  return (
    <div className="resort" id="gallery">
      <div className="gallery">
        {(showAll ? images : images.slice(0, 3)).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="gallery"
            onClick={() => openImage(img)}
          />
        ))}
      </div>

      {!showAll && (
        <div className="view-more">
          <button onClick={() => setShowAll(true)}>View More</button>
        </div>
      )}

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="lightbox" onWheel={handleWheel}>
          <span className="close" onClick={closeImage}>×</span>
          <img
            src={selectedImage}
            alt="preview"
            className="lightbox-img"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
