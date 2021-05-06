import AccentTypographyBuild from './accent-typography-builder.js';

export default () => {
  document.body.addEventListener(`screenChanged`, () => {
    const introTitle = new AccentTypographyBuild(`.intro__title`, `is-animated`, 300, 100);
    introTitle.destroyAnimation();
    setTimeout(() => {
      introTitle.runAnimation();
    }, 300);
    const introDate = new AccentTypographyBuild(`.intro__date`, `is-animated`, 100, 50);
    introDate.destroyAnimation();
    setTimeout(() => {
      introDate.runAnimation();
    }, 300);
    const sliderTitle = new AccentTypographyBuild(`.slider__item-title`, `is-animated`, 300, 100);
    sliderTitle.destroyAnimation();
    setTimeout(() => {
      sliderTitle.runAnimation();
    }, 300);
    const prizesTitle = new AccentTypographyBuild(`.prizes__title`, `is-animated`, 300, 100);
    prizesTitle.destroyAnimation();
    setTimeout(() => {
      prizesTitle.runAnimation();
    }, 500);
    const rulesTitle = new AccentTypographyBuild(`.rules__title`, `is-animated`, 300, 100);
    rulesTitle.destroyAnimation();
    setTimeout(() => {
      rulesTitle.runAnimation();
    }, 300);
    const gameTitle = new AccentTypographyBuild(`.game__title`, `is-animated`, 300, 100);
    gameTitle.destroyAnimation();
    setTimeout(() => {
      gameTitle.runAnimation();
    }, 300);
  });
};
