// example-expo/data/messages.js

export const messagesData = [
  {
    _id: 1,
    text: "Hello there!",
    createdAt: new Date(),
    user: {
      _id: 2,
      name: "React Native",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  {
    _id: 2,
    text: "Hi! How can I help?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "Developer",
      avatar: "https://placeimg.com/140/140/any",
    },
  },
  // Add more static messages as needed
];
