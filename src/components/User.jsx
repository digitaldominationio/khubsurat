import React from "react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#f6f2ee] flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-8">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center gap-6">

          <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-[#1f3d3d]">
              Your Name
            </h2>
            <p className="text-gray-500">your@email.com</p>

            <button className="mt-4 px-5 py-2 bg-[#7a4e57] text-white rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        <hr className="my-8" />

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium">+91 XXXXXXXX</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Location</p>
            <p className="font-medium">Odisha</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;