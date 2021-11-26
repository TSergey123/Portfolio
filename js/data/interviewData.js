export const interviewData = [
  { interviewTitle: 'Google Books Api', interviewImage: 'react.png', interviewLink: 'https://tsergey123.github.io/my-new-app/', },
  { interviewTitle: 'React Native ToDoList', interviewImage: 'react.png', interviewLink: 'https://tsergey123.github.io/react-native-todolist-portfolio/index.html', },
];

export const createInterviewData = (i) => {
  return {
    interviewTitle: interviewData[i].interviewTitle,
    interviewImage: interviewData[i].interviewImage,
    interviewLink: interviewData[i].interviewLink,

  }
};