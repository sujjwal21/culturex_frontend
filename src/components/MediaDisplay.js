import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


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
        setMedia(data); 
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
  {media.length > 0 ? (
    media.map((item) => (
      <div
        key={item._id}
        className="relative overflow-hidden inline-block m-2 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
      >
        {item.type.startsWith('image') ? (
          <img
            src={`http://localhost:5000${item.url}`}
            alt="uploaded"
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        ) : (
          <video controls className="w-full h-full rounded-lg object-cover transition-transform duration-300 ease-in-out transform hover:scale-110">
            <source src={`http://localhost:5000${item.url}`} type={item.type} />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    ))
  ) : (
    <p className="col-span-full text-center text-gray-500">No media uploaded yet.</p>
  )}
</div>

  );
};

export default MediaDisplay;
