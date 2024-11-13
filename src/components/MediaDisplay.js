import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "./MediaDisplay.css"

const MediaDisplay = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch media from the backend
  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:5000/api/media', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMedia(data); // Store media data in state
      } catch (error) {
        toast.error('Error loading media');
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  console.log("============",media)
  // Render a loading state while fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render media files
  return (
    <div className="media-container">
      {media.length > 0 ? (
        media.map((item) => (
          <div key={item._id} className="media-item">
            {item.type.startsWith('image') ? (
              <img src={`http://localhost:5000${item.url}`} alt="uploaded" className="media-image" />
            ) : (
              <video controls className="media-video">
                <source src={`http://localhost:5000${item.url}`} type={item.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))
      ) : (
        <p>No media uploaded yet.</p>
      )}
    </div>
  );
};

export default MediaDisplay;
