export const projectsData = [
  { projectLink: 'https://tsergey123.github.io/what-to-watch/index.html', projectImage: 'react.png', projectTitle: 'Что посмотреть', projectText: 'Hooks, propTypes. Проект не закончен' },
  { projectLink: 'https://tsergey123.github.io/cinemaddict/', projectImage: 'js.png', projectTitle: 'Онлайн Кинотеатр', projectText: 'MVP, ООП' },
  { projectLink: 'https://tsergey123.github.io/Keksobooking/build/index.html', projectImage: 'js.png', projectTitle: 'КексоБукинг', projectText: 'API, DRY' },
  { projectLink: 'https://tsergey123.github.io/calorie-counter/', projectImage: 'js.png', projectTitle: 'Калькулятор калорий', projectText: 'Check it on github ;)' },
  { projectLink: 'https://tsergey123.github.io/infinity-carousel/', projectImage: 'js.png', projectTitle: 'Бесконечный слайдер', projectText: 'слайдер выполнен на чистом JS' },
];

export const createProjectsData = (i) => {
  return {
    projectLink: projectsData[i].projectLink,
    projectImage: projectsData[i].projectImage,
    projectTitle: projectsData[i].projectTitle,
    projectText: projectsData[i].projectText
  }
};