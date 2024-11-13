import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MediaUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    if (!file) return toast.error("No file selected");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:5000/api/media", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Media uploaded successfully");
    } catch (error) {
      toast.error("Media upload failed");
    }
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-md border-2 border-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-center">
        Upload Your Media
      </h2>

      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4 p-3 border-2 border-gray-300 rounded-lg hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
      />

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Upload Media
      </button>

      <p className="mt-4 text-gray-500 text-sm text-center">
        Choose an image or video file to upload.
      </p>
    </div>
  );
};

export default MediaUpload;
