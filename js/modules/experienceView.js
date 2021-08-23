export const createExperienceItem = (createExperienceCard) => {
  const {
    jobTitle,
    jobPosition,
    jobTerm,
    jobImage,
  } = createExperienceCard

  return `<li class="experience__item slider__item">
          <img class="experience__image slider__image" src="img/experience/${jobImage}" alt="${jobTitle}">
          <h2 class="experience__title">${jobTitle}</h2>
          <p class="experience__text">${jobPosition}</p>
          <p class="experience__text">${jobTerm}</p>
        </li>`
};