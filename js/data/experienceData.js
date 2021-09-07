export const experienceData = [
  { jobTitle: 'Рсхб-интех', jobPosition: 'Руководитель направления автоматизации', jobTerm: 'октябрь 2019 - по настоящее время', jobImage: 'rshb.png' },
  { jobTitle: 'Технопрогресс', jobPosition: 'Старший инженер по автоматизации', jobTerm: 'апрель 2017 - октябрь 2019', jobImage: 'technoprogress.png' },
  { jobTitle: 'Тинькофф страхование', jobPosition: 'Инженер по тестированию', jobTerm: 'февраль 2017 - апрель 2017', jobImage: 'tinkoff.png' },
  { jobTitle: 'Сбербанк технологии', jobPosition: 'Тестировщик ПО', jobTerm: 'июль 2016 - январь 2017', jobImage: 'sberbank.png' },
  { jobTitle: 'МТС', jobPosition: 'Младший тестировщик', jobTerm: 'март 2016 - июль 2016', jobImage: 'mts.png' }
];

export const createExperienceData = (i) => {
  return {
    jobTitle: experienceData[i].jobTitle,
    jobPosition: experienceData[i].jobPosition,
    jobTerm: experienceData[i].jobTerm,
    jobImage: experienceData[i].jobImage,
  }
};