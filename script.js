function createElement(tag, classes, textContent) {
  const element = document.createElement(tag);
  classes.forEach((cls) => element.classList.add(cls));
  if (textContent) element.textContent = textContent;
  return element;
}

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    const whiteBox = document.getElementById('white-box');
    data.forEach((item, index) => {
      const categoryDiv = createElement('div', [
        'category',
        `category-${index}`,
      ]);

      const iconImg = createElement('img', ['icon']);
      iconImg.src = item.icon;
      categoryDiv.appendChild(iconImg);

      const categoryTitle = createElement(
        'div',
        ['category-title', `category-${index}`],
        item.category,
      );
      categoryDiv.appendChild(categoryTitle);

      const scoreDiv = createElement('div', [
        'score',
        'score-margin',
        `score-${index}`,
      ]);
      const scoreSpan = createElement('span', ['bold', 'black'], item.score);
      const scoreTextSpan = createElement('span', ['score-text'], ' / ');
      const hundredSpan = createElement('span', ['hundred'], '100');

      [scoreSpan, scoreTextSpan, hundredSpan].forEach((el) =>
        scoreDiv.appendChild(el),
      );
      categoryDiv.appendChild(scoreDiv);
      whiteBox.appendChild(categoryDiv);
    });

    const button = createElement('button', ['btn'], 'Continue');
    whiteBox.appendChild(button);
  });
