export const createProjectItem = (createProjectCard) => {
  const {
    projectLink,
    projectImage,
    projectTitle,
    projectText
  } = createProjectCard

  return `<li class="projects__item slider__item">
            <a class="project__link" href="${projectLink}">
              <img class="project__image slider__image" src="./img/projects/${projectImage}" alt="${projectTitle}">
            </a>
           <a class="project__title-link" href="${projectLink}"> <h2 class="project__title">${projectTitle}</h2> </a>
            <p class="project__text">${projectText}</p>
          </li>`
};