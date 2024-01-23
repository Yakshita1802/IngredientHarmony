import React, { useState } from 'react';

const ImageCapture = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedRecipeType, setSelectedRecipeType] = useState('');

  const handleCapture = () => {
    // Logic to capture image using the phone camera
    // You can use the react-camera library or any other library of your choice
    // Set the captured image to the state
    // Example: setCapturedImage(capturedImageData);
  };

  const handleUpload = (e) => {
    // Logic to handle image upload from phone library
    // Set the uploaded image to the state
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCapturedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRecipeTypeChange = (e) => {
    // Handle the change in the dropdown menu
    setSelectedRecipeType(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Image Capture</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Select Recipe Type:</label>
        <select
          value={selectedRecipeType}
          onChange={handleRecipeTypeChange}
          style={{ marginLeft: '10px' }}
        >
          <option value="">Select</option>
          <option value="indian">Indian</option>

          <option value="italian">Italian</option>
          <option value="chinese">Chinese</option>
          <option value="mexican">Mexican</option>
          <option value="american">American</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="french">French</option>
          <option value="japanese">Japanese</option>
          <option value="thai">Thai</option>
          <option value="greek">Greek</option>
          <option value="spanish">Spanish</option>
          <option value="brazilian">Brazilian</option>
          <option value="korean">Korean</option>
          <option value="moroccan">Moroccan</option>
          {/* Add more recipe types as needed */}
        </select>
      </div>
      {capturedImage && (
        <div style={{ marginBottom: '20px' }}>
          <p>Preview:</p>
          <img src={capturedImage} alt="Captured" style={{ maxWidth: '100%' }} />
        </div>
      )}
      <button
        onClick={handleCapture}
        style={{ padding: '10px', fontSize: '16px', marginRight: '10px' }}
      >
        Capture Image
      </button>
      <input type="file" accept="image/*" onChange={handleUpload} />
    </div>
  );
};

export default ImageCapture;
