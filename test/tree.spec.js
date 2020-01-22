import { treeable, isArray } from '../src/index';

test('treeable is ok', () => {
  expect(treeable()).toBeTruthy();
});

test('isArray is ok',() =>{
  expect(isArray()).toBeTruthy();
})