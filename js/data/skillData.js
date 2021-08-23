export const skillData = [
  { skillImage: 'stress.png', skillText: 'Работал в Тинькофф банке :)', skillTitle: 'Стрессоустойчивый' },
  { skillImage: 'selfOrg.png', skillText: 'Больше года работаю удаленно и отлично структурировал свой график', skillTitle: 'Самоорганизованный' },
  { skillImage: 'communic.png', skillText: 'Легко нахожу общий язык с командой', skillTitle: 'Коммуникабельный' },
  { skillImage: 'programming.png', skillText: 'Жалею, что не стал заниматься этим раньше', skillTitle: 'Очень люблю программирование' },

];

export const createSkillData = (i) => {
  return {
    skillImage: skillData[i].skillImage,
    skillTitle: skillData[i].skillTitle,
    skillText: skillData[i].skillText,
  }
};
