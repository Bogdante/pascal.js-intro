import { runFile, insp } from '../../helpers/testsHelper';


let pjs = runFile(import.meta.url, 'vars.code');

test('result = 2', () => {
  expect(pjs.engine.results[0]).toBe(2);
});

test('result = 2', () => {
  expect(pjs.engine.results[1]).toBe(2);
});


test('result = 0', () => {
    expect(pjs.engine.results[2]).toBe(0)
})


test('result = 0', () => {
    expect(pjs.engine.results[3]).toBe(0)
})