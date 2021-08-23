import { createExperienceData, experienceData } from './data/experienceData.js';
import { createProjectsData, projectsData } from './data/projectsData.js';
import { createSkillData, skillData } from './data/skillData.js';
import { createExperienceItem } from './modules/experienceView.js';
import { createProjectItem } from './modules/projectsView.js';
import { createSkillItem } from './modules/skillView.js';
import { moveLeft, moveRight } from './utils/moveSlider.js';
import { render } from './utils/render.js';

const experienceList = document.querySelector('.experience__list');
for (let i = 0; i < experienceData.length; i++) {
 render(experienceList, createExperienceItem(createExperienceData(i)));
};

const projectList = document.querySelector('.projects__list');
for (let i = 0; i < projectsData.length; i++) {
 render(projectList, createProjectItem(createProjectsData(i)));
};

const skillList = document.querySelector('.skills__list');
for (let i = 0; i < skillData.length; i++) {
 render(skillList, createSkillItem(createSkillData(i)));
};

//experience Slider
const experienceRightButton = document.querySelector('.experience__slider-button--right');
const experienceLeftButton = document.querySelector('.experience__slider-button--left');
const experienceItem = document.querySelector('.experience__item');
const experienceItemsLength = document.querySelectorAll('.experience__item').length;
const allExperienceItemsWidth = experienceItem.offsetWidth * experienceItemsLength - experienceItem.offsetWidth;

experienceRightButton.addEventListener("click", function () {
  moveRight(allExperienceItemsWidth, experienceItem, experienceList);
});

experienceLeftButton.addEventListener("click", function () {
  moveLeft(allExperienceItemsWidth, experienceItem, experienceList);
});


// project Slider
const projectRightButton = document.querySelector('.projects__slider-button--right');
const projectLeftButton = document.querySelector('.projects__slider-button--left');
const projectItem = document.querySelector('.projects__item');
const projectItemsLength = document.querySelectorAll('.projects__item').length;
const allProjectItemsWidth = projectItem.offsetWidth * projectItemsLength - projectItem.offsetWidth;

projectRightButton.addEventListener("click", function () {
  moveRight(allProjectItemsWidth, projectItem, projectList);
});

projectLeftButton.addEventListener("click", function () {
  moveLeft(allProjectItemsWidth, projectItem, projectList);
});

// skill Slider
const skillRightButton = document.querySelector('.skill__slider-button--right');
const skillLeftButton = document.querySelector('.skill__slider-button--left');
const skillItem = document.querySelector('.skills__item');
const skillItemsLength = document.querySelectorAll('.skills__item').length;
const allskillItemsWidth = skillItem.offsetWidth * skillItemsLength - skillItem.offsetWidth;

skillRightButton.addEventListener("click", function () {
  moveRight(allskillItemsWidth, skillItem, skillList);
});

skillLeftButton.addEventListener("click", function () {
  moveLeft(allskillItemsWidth, skillItem, skillList);
});

