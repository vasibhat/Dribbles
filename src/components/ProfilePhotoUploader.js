import React from 'react';
import { Link } from 'react-router-dom';

const ProfilePhotoUploader = () => {
  const loadFile = (event) => {
    const output = document.getElementById('preview_img');

    output.src = URL.createObjectURL(event.target.files[0]);

    output.onload = () => {
      URL.revokeObjectURL(output.src);
    };
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col relative">
      <Link to="/" className="absolute top-0 right-0 m-4">
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">&lt;</button>
      </Link>
      <img
        src="https://cdn.dribbble.com/userupload/9750980/file/original-abb9e2f8242f871c34d0727ba7868aa7.png?resize=1024x769"
        alt="Dribble Logo"
        className="absolute top-0 left-0 w-44 h-36 m-4 lg:w-32 lg:h-28" 
      />

      <form className="flex flex-col items-center space-y-7">
        <h2 className="text-4xl font-bold text-center">Welcome! Let's create your profile</h2>
        <h2 className="text-xl font text-gray-400 text-center">Lets others get to know you better! You can do this later</h2>
        <h2 className="text-3xl font-bold">Add an avatar</h2>
        <div className="shrink-0">
          <img id='preview_img' className="h-36 w-36 object-cover rounded-full" src="https://t3.ftcdn.net/jpg/05/21/45/18/240_F_521451892_hB7R2GEpwwPZQ2J0pZYOSg142e6905aE.jpg" alt="Current profile" />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            onChange={loadFile}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-gray-400 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:bg-gray-200"
          />
        </label>
        <h2 className="text-2xl font-bold mt-12">Add your location</h2>
        <input
          type="text"
          className="block w-full text-sm text-slate-500 py-2 px-4 focus:outline-none focus:border-indigo-500 border-b border-gray-300"
          placeholder="Enter a location..."
        />
        <Link to="/cards"> 
          <button className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-16 rounded">Next</button>
        </Link>
      </form>
    </div>
  );
};

export default ProfilePhotoUploader;
