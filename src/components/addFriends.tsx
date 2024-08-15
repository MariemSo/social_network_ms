import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, deleteFriend } from "@/redux/reducers/userAuthSlice";
import { RootState } from "@/redux/store";

const AddFriends = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector(
    (state: RootState) => state.userAuth.authState.auth.currentUserId
  );
  const currentUser = useSelector((state: RootState) =>
    state.userAuth.userState.users.find((user) => user.id === currentUserId)
  );
  const users = useSelector(
    (state: RootState) => state.userAuth.userState.users
  );
  const [friendName, setFriendName] = useState<string>("");

  const handleAddFriend = (e: React.FormEvent) => {
    e.preventDefault();
    const friend = users.find(
      (user) => user.name.toLowerCase() === friendName.toLowerCase()
    );
    if (friend && currentUserId) {
      dispatch(addFriend({ userId: currentUserId, friendId: friend.id }));
      setFriendName("");
    }
  };

  const handleDeleteFriend = (friendId: number) => {
    if (friendId && currentUserId) {
      dispatch(deleteFriend({ userId: currentUserId, friendId }));
    }
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
      <div className="p-6">
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-4">
          Add Friend
        </h5>
        <form onSubmit={handleAddFriend} className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="Enter friend name"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-green-600 px-3 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Add
          </button>
        </form>
        <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-4">
          Manage Friends
        </h5>
        <div className="divide-y divide-gray-200">
          {currentUser?.friends.map((friendId) => {
            const friend = users.find((user) => user.id === friendId);
            return (
              <div
                key={friendId}
                className="flex items-center justify-between pb-3 pt-3 last:pb-0"
              >
                <div className="flex items-center gap-x-3">
                  <img
                    src={
                      friend?.profilePicture ||
                      "https://via.placeholder.com/150"
                    }
                    alt={friend?.name}
                    className="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                  />
                  <div>
                    <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                      {friend?.name}
                    </h6>
                    <p className="block font-sans text-sm font-light leading-normal text-gray-700 antialiased">
                      {friend?.statusMessage || "No status message"}
                    </p>
                  </div>
                </div>
                <button
                  className="inline-flex justify-center rounded-md bg-red-600 px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  onClick={() => handleDeleteFriend(friendId)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AddFriends;
