/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-empty-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable arrow-body-style */
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  constructor() {}

  load() {
    return read()
      .then((resolve) => {
        return json(resolve);
      })
      .then((resolve) => {
        return JSON.parse(resolve);
      });
  }
}
