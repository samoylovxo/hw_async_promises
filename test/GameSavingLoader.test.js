/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */

import GameSavingLoader from '../src/js/GameSavingLoader';

test('Created key Saving', async () => {
  const gameSavingLoader = new GameSavingLoader();

  await gameSavingLoader.load().then((saving) => {
    gameSavingLoader.saving = saving;
  });

  expect(gameSavingLoader).toEqual({
    saving: '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}',
  });
});

test('Is Promise returned?', async () => {
  const gameSavingLoader = new GameSavingLoader();

  expect(await gameSavingLoader.load()).toEqual(
    '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'
  );
});
