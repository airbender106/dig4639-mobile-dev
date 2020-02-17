import { Sum, AddList } from './MyMath.js'

describe(AddList () => {

test('Adds a list of numbers together', () => {
  let input = [1,2,3,4,5];
  let result = 13;
  expect(AddList(input)).toBe(result);
  let input = [15,5,8,-10];
  let result = 18;
  expect(AddList(input)).toBe(result);
  })
})
describe("Sum", () => {

test('Whether undefined is returned on invalid type', () =>{
  expect(Sum(1, "Test")).toBeUndefined()
})
test('adds 1 + 2 to equal 3', () => {
  expect(Sum(1, 2)).toBe(3)
})
it('produce the sum of 10 + 20, Which Should be 30', () =>{
expect(Sum(10, 20)).toBe(30)})
})

// ICE 

// Examples for Null
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Examples for zero
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
