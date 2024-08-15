const initialState: RootState = {
  userState: {
    users: [
      {
        id: 1,
        name: "John Doe",
        profilePicture:
          "https://img.freepik.com/premium-photo/portrait-young-handsome-bald-nerd-man-with-eyeglasses-isolated-white-black-white_251136-87232.jpg",
        statusMessage: "Feeling great!",
        friends: [2, 3],
      },
      {
        id: 2,
        name: "Jane Smith",
        profilePicture:
          "https://images.pexels.com/photos/4156467/pexels-photo-4156467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Loving life!",
        friends: [1],
      },
      {
        id: 3,
        name: "Alice Johnson",
        profilePicture:
          "https://images.pexels.com/photos/27255535/pexels-photo-27255535/free-photo-of-woman-in-white-dress-standing-in-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Excited for the weekend!",
        friends: [1],
      },
      {
        id: 4,
        name: "Robert Brown",
        profilePicture:
          "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Just finished a great workout!",
        friends: [2, 6],
      },
      {
        id: 5,
        name: "Emily Davis",
        profilePicture:
          "https://images.pexels.com/photos/2739750/pexels-photo-2739750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Reading a fantastic book!",
        friends: [3, 7],
      },
      {
        id: 6,
        name: "Michael Wilson",
        profilePicture:
          "https://images.pexels.com/photos/6325964/pexels-photo-6325964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Coding away!",
        friends: [4, 8],
      },
      {
        id: 7,
        name: "Sophia Martinez",
        profilePicture:
          "https://images.pexels.com/photos/2728264/pexels-photo-2728264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Exploring the outdoors!",
        friends: [5, 9],
      },
      {
        id: 8,
        name: "David Taylor",
        profilePicture:
          "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Enjoying some music!",
        friends: [6, 10],
      },
      {
        id: 9,
        name: "Olivia Anderson",
        profilePicture:
          "https://images.pexels.com/photos/3839192/pexels-photo-3839192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Trying out a new recipe!",
        friends: [7, 11],
      },
      {
        id: 10,
        name: "Khamiss Lee",
        profilePicture:
          "https://images.pexels.com/photos/3088526/pexels-photo-3088526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Planning my next adventure!",
        friends: [8, 12],
      },
      {
        id: 11,
        name: "Ava King",
        profilePicture:
          "https://images.pexels.com/photos/4992382/pexels-photo-4992382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Loving the new season!",
        friends: [9, 13],
      },
      {
        id: 12,
        name: "William Clark",
        profilePicture:
          "https://images.pexels.com/photos/2860902/pexels-photo-2860902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Just started a new project!",
        friends: [10, 14],
      },
      {
        id: 13,
        name: "Isabella",
        profilePicture:
          "https://images.pexels.com/photos/2867823/pexels-photo-2867823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Enjoying a peaceful weekend!",
        friends: [11, 15],
      },
      {
        id: 14,
        name: "Liam Walker",
        profilePicture:
          "https://images.pexels.com/photos/1170974/pexels-photo-1170974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Listening to my favorite podcast!",
        friends: [12, 16],
      },
      {
        id: 15,
        name: "Charlotte Harris",
        profilePicture:
          "https://images.pexels.com/photos/2914286/pexels-photo-2914286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Trying out a new hobby!",
        friends: [13],
      },
      {
        id: 16,
        name: "Noah Young",
        profilePicture:
          "https://images.pexels.com/photos/2860740/pexels-photo-2860740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Busy with work, but feeling good!",
        friends: [14],
      },
      {
        id: 17,
        name: "Melissa Hedi",
        profilePicture:
          "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        statusMessage: "Busy with work, but feeling good!",
        friends: [14, 1],
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

export { initialState };
