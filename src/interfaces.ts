interface IUser {
  id: number;
  name: string;
  profilePicture?: string;
  statusMessage?: string;
  friends?: number[];
}

interface IAuth {
  isLoggedIn: boolean;
  currentUserId: number | null;
}

interface UserState {
  users: IUser[];
}

interface AuthState {
  auth: IAuth;
  error: string | null;
}

interface RootState {
  userState: UserState;
  authState: AuthState;
}

const initialUserState: UserState = {
  users: [],
};

const initialAuthState: AuthState = {
  auth: {
    isLoggedIn: false,
    currentUserId: null,
  },
  error: null,
};
