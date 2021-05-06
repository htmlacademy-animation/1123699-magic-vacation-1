export default class AccentTypographyBuild {
  constructor(
      elementSelector,
      classForActivate,
      wordDelay = 0,
      delay = 0
  ) {
    this.TIME_SPACE = 300;
    this.DELAY_VARS = 3;

    this.elementSelector = elementSelector;

    if (typeof this.elementSelector === `string`) {
      this.element = document.querySelector(this.elementSelector);
    } else {
      this.element = this.elementSelector;
    }

    this.classForActivate = classForActivate;
    this.wordDelay = wordDelay;
    this.delay = delay;

    this.prepareText();
  }

  createElement(letter, letterIndex, wordIndex) {
    const span = document.createElement(`span`);

    span.textContent = letter;
    this.timeOffset = Math.floor(Math.random() * this.TIME_SPACE);
    span.style.transitionDelay = `${(this.DELAY_VARS - letterIndex % this.DELAY_VARS) * this.delay + wordIndex * this.wordDelay}ms`;

    return span;
  }

  prepareText() {
    if (!this.element) {
      return;
    }

    const text = this.element.textContent.trim().split(` `);

    const {length} = text;
    const content = text.reduce((fragmentParent, word, wordIndex) => {
      const wordElement = Array.from(word).reduce((fragment, letter, letterIndex) => {
        fragment.appendChild(this.createElement(letter, letterIndex, wordIndex));

        return fragment;
      }, document.createDocumentFragment());

      const wordContainer = document.createElement(`span`);

      wordContainer.classList.add(`split`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);

      // Add Space text node:
      if (wordIndex < length - 1) {
        fragmentParent.appendChild(document.createTextNode(` `));
      }
      return fragmentParent;
    }, document.createDocumentFragment());

    this.element.innerHTML = ``;
    this.element.appendChild(content);
  }

  runAnimation() {
    if (!this.element) {
      return;
    }

    this.element.classList.add(this.classForActivate);
  }

  destroyAnimation() {
    this.element.classList.remove(this.classForActivate);
  }
}
