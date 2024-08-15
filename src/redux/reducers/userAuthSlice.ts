import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState as originalInitialState } from "../initialState";

type registerUser = {
  name: string;
  profilePicture?: string;
  statusMessage?: string;
};

// Initial state combining userState and authState
const initialState = {
  userState: originalInitialState.userState,
  authState: originalInitialState.authState,
};

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    // Auth-related actions
    register: (state, action: PayloadAction<registerUser>) => {
      const userRegistered = state.userState.users.find(
        (user) => user.name === action.payload.name
      );
      if (userRegistered) {
        state.authState.error = "You might consider a new Name 😉";
      } else {
        const newId = state.userState.users.length + 1;
        const newUser = {
          id: newId,
          name: action.payload.name,
          profilePicture: action.payload.profilePicture,
          statusMessage: action.payload.statusMessage || "New to the app!",
          friends: [],
        };
        state.userState.users.push(newUser);

        state.authState.auth.isLoggedIn = true;
        state.authState.auth.currentUserId = newId;
        state.authState.error = null;
      }
    },
    logIn: (state, action: PayloadAction<{ name: string }>) => {
      const userRegistered = state.userState.users.find(
        (user) => user.name === action.payload.name
      );
      if (!userRegistered) {
        state.authState.error = "You probably want to register first 😉";
      } else {
        state.authState.auth.isLoggedIn = true;
        state.authState.auth.currentUserId = userRegistered.id;
        state.authState.error = null;
      }
    },
    logOut: (state) => {
      state.authState.auth.isLoggedIn = false;
      state.authState.auth.currentUserId = null;
    },
    // User-related actions
    addFriend: (
      state,
      action: PayloadAction<{ userId: number; friendId: number }>
    ) => {
      const user = state.userState.users.find(
        (user) => user.id === action.payload.userId
      );
      const friend = state.userState.users.find(
        (user) => user.id === action.payload.friendId
      );
      if (user && friend && !user.friends.includes(friend.id)) {
        user.friends.push(friend.id);
        friend.friends.push(user.id);
      }
    },
    deleteFriend: (
      state,
      action: PayloadAction<{ userId: number; friendId: number }>
    ) => {
      const user = state.userState.users.find(
        (user) => user.id === action.payload.userId
      );
      const friend = state.userState.users.find(
        (user) => user.id === action.payload.friendId
      );
      if (user && friend) {
        user.friends = user.friends.filter((id) => id !== friend.id);
        friend.friends = friend.friends.filter((id) => id !== user.id);
      }
    },
    updateStatusMessage: (
      state,
      action: PayloadAction<{ userId: number; statusMessage: string }>
    ) => {
      const user = state.userState.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        user.statusMessage = action.payload.statusMessage;
      }
    },
    updateProfilePicture: (
      state,
      action: PayloadAction<{ userId: number; profilePicture: string }>
    ) => {
      const user = state.userState.users.find(
        (user) => user.id === action.payload.userId
      );
      if (user) {
        user.profilePicture = action.payload.profilePicture;
      }
    },
  },
});

export const {
  register,
  logIn,
  logOut,
  addFriend,
  deleteFriend,
  updateStatusMessage,
  updateProfilePicture,
} = userAuthSlice.actions;

export default userAuthSlice.reducer;
