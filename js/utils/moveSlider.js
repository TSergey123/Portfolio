let offset = 0;

export const moveRight = (allItemsWidth, sliderItem, sliderLine) => {
  offset = offset + sliderItem.offsetWidth;
  if (offset > allItemsWidth) {
    offset = 0;
  }
  sliderLine.style.transform = 'translateX(' + (-offset) + 'px';
}

export const moveLeft = (allItemsWidth, sliderItem, sliderLine) => {
  offset = offset - sliderItem.offsetWidth;
  if (offset < 0) {
    offset = allItemsWidth;
  }
  sliderLine.style.transform = 'translateX(' + (-offset) + 'px';
}