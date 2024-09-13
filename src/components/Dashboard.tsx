import React from "react";
import { useAppSelector } from "@/redux/store";

const Dashboard = () => {
  // Get current user ID from the state
  const currentUserId = useAppSelector(
    (state) => state.userAuth.authState.auth.currentUserId
  );

  // Get the list of users from the state
  const users = useAppSelector((state) => state.userAuth.userState.users);

  // Find the current user based on the ID
  const currentUser = users.find((user) => user.id === currentUserId);

  // Map over the current user's friends and find their details in users array
  const friends = currentUser
    ? currentUser.friends
        .map((friendId) => users.find((user) => user.id === friendId))
        .filter((friend) => friend !== undefined && friend !== null)
    : []; // Filter undefined friends

  if (friends.length === 0) {
    return <p>No friends found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
      {friends.map((friend) => (
        <div key={friend?.id} className="bg-white rounded-lg shadow-md w-full">
          <div className="flex items-center p-4">
            <img
              src={friend?.profilePicture || "https://via.placeholder.com/150"}
              alt={`${friend?.name}'s profile`}
              className="w-14 h-14 rounded-full object-cover mr-3"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{friend?.name}</h4>
              <p className="text-sm text-gray-500">Posted 2 hours ago</p>
            </div>
          </div>

          <div className="px-4 pb-4">
            <p className="text-gray-700 text-base">
              {friend?.statusMessage || "No status message"}
            </p>
          </div>

          <div className="flex justify-around py-2 border-t border-gray-200">
            <button className="flex items-center space-x-2 text-gray-700 hover:text-red-500">
              <i className="fas fa-heart"></i>
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-500">
              <i className="fas fa-comment"></i>
              <span>Comment</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
