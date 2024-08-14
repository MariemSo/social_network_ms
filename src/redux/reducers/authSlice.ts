import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type registerUser = {
  name: string;
  profilePicture?: string;
  statusMessage?: string;
};
const initialState: RootState = {
  userState: {
    users: [
      {
        id: 1,
        name: "John Doe",
        profilePicture: "/images/john.jpg",
        statusMessage: "Feeling great!",
        friends: [2, 3],
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePicture: "/images/jane.jpg",
        statusMessage: "Loving life!",
        friends: [1],
      },
      {
        id: 3,
        name: "Alice Johnson",
        profilePicture: "/images/alice.jpg",
        statusMessage: "Excited for the weekend!",
        friends: [1],
      },
    ],
  },
  authState: {
    auth: {
      isLoggedIn: false,
      currentUserId: null,
    },
    error: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action: PayloadAction<registerUser>) => {
      const userRegistered = state.userState.users.find(
        (user) => user.name === action.payload.name
      );
      if (userRegistered) {
        state.authState.error = "You might consider A new Name 😉";
      } else {
        const newId = state.userState.users.length + 1;
        const newUser: IUser = {
          id: newId,
          name: action.payload.name,
          profilePicture: action.payload.profilePicture,
          statusMessage: action.payload.statusMessage || "New to the app!",
          friends: [],
        };
        //push the new user to userState
        state.userState.users.push(newUser);

        // Update the auth state
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
        state.authState.error = " You probably want to register First 😉";
        return state;
      } else {
        state.authState.auth.isLoggedIn = true;
        state.authState.auth.currentUserId = userRegistered.id;
        state.authState.error = null;
      }
    },
  },
});

export const { register, logIn } = authSlice.actions;
export default authSlice.reducer;
