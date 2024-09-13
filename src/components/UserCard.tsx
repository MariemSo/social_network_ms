import React from "react";

interface UserCardProps {
  name: string;
  profilePicture?: string;
  statusMessage?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  profilePicture = "https://via.placeholder.com/150",
  statusMessage = "No status message",
}) => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img
          src={profilePicture}
          alt={`${name}'s profile picture`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          {statusMessage}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-4">
        <button
          className="select-none rounded-lg bg-[#56A3A6] py-2 px-4 text-center align-middle font-sans text-sm font-bold text-white shadow-md transition-all hover:bg-[#5694A8] active:bg-[#569FA8] focus:outline-none"
          // onClick={onAddFriend}
        >
          Add Friend
        </button>
        <button
          className="select-none rounded-lg bg-[#1f2937] py-2 px-4 text-center align-middle font-sans text-sm font-bold text-white shadow-md transition-all hover:bg-[#2B3B50] active:bg-[#1F2538] focus:outline-none"
          // onClick={onDeleteFriend}
        >
          Delete Friend
        </button>
      </div>
    </div>
  );
};
export default UserCard;
