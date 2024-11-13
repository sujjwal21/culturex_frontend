import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const MediaUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const token = localStorage.getItem('token');
    if (!file) return toast.error('No file selected');

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:5000/api/media', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      toast.success('Media uploaded successfully');
    } catch (error) {
      toast.error('Media upload failed');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Media</button>
      {/* <MediaDisplay/> */}
    </div>
  );
};

export default MediaUpload;
