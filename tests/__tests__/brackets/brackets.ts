import { runFile, insp } from '../../helpers/testsHelper';


let pjs = runFile(import.meta.url, 'brackets.code');

test('result = -5000', () => {
  expect(pjs.engine.results[0]).toBe(-5000);
});

test('result = 0', () => {
    expect(pjs.engine.results[1]).toBe(0)
})