import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { updateStatusMessage } from "@/redux/reducers/userAuthSlice"; // Assume you have this action

const StatusForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentUserId = useSelector(
    (state: RootState) => state.userAuth.authState.auth.currentUserId
  );
  const currentUser = useSelector((state: RootState) =>
    state.userAuth.userState.users.find((user) => user.id === currentUserId)
  );

  const [newStatusMessage, setNewStatusMessage] = useState("");

  const handleStatusUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newStatusMessage && currentUserId) {
      dispatch(
        updateStatusMessage({
          userId: currentUserId,
          statusMessage: newStatusMessage,
        })
      );
      setNewStatusMessage("");
    }
  };

  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="p-6 flex flex-col items-center justify-center">
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Enter new Status"
            value={newStatusMessage}
            onChange={(e) => setNewStatusMessage(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button
          className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={handleStatusUpdate}
          type="button"
        >
          Update Status
        </button>
      </div>
    </div>
  );
};

export default StatusForm;
