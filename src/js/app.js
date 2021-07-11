/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import GameSavingLoader from './GameSavingLoader';

new GameSavingLoader().load().then(
  (saving) => saving,
  (error) => {
    throw new Error(`Произошла ошибка: ${error}`);
  }
);
