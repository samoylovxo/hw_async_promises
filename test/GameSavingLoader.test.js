/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */

import GameSavingLoader from '../src/js/GameSavingLoader';

test('Created key Saving', async () => {
  const gameSavingLoader = new GameSavingLoader();

  await gameSavingLoader.load().then((saving) => {
    gameSavingLoader.saving = saving;
  });

  expect(gameSavingLoader).toEqual({
    saving: {
      created: 1546300800,
      id: 9,
      userInfo: {
        id: 1,
        level: 10,
        name: 'Hitman',
        points: 2000,
      },
    },
  });
});

test('Is Promise returned?', async () => {
  const gameSavingLoader = new GameSavingLoader();

  expect(await gameSavingLoader.load()).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  });
});
