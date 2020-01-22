import {createMap } from './../src/common.ts'
test('createMap is ok',() =>{
  expect(createMap()).toBe({});
})