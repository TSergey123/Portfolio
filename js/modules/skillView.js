export const createSkillItem = (createSkillCard) => {
  const {
    skillImage,
    skillTitle,
    skillText,
  } = createSkillCard

  return `<li class="skills__item slider__item">
            <img class="skills__image slider__image" src="./img/skills/${skillImage}" alt="${skillTitle}">
            <h2 class="skills__title slider__title">${skillTitle}</h2>
            <p class="skills__text slider__text">${skillText}</p>
          </li>`
};