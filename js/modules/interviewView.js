export const createInterviewItem = (createinterviewCard) => {
  const {
    interviewLink,
    interviewImage,
    interviewTitle,
  } = createinterviewCard

  return `<li class="interview__item slider__item">
            <a class="interview__link" href="${interviewLink}">
              <img class="interview__image slider__image" src="./img/projects/${interviewImage}" alt="${interviewTitle}">
            </a>
           <a class="interview__title-link" href="${interviewLink}"> <h2 class="interview__title">${interviewTitle}</h2> </a>
          </li>`
};