import React from "react";
import 'react-native';
import renderer from 'react-test-renderer';
import { addNumber } from "../src/mathUtils/mathUtils";

it('SnapShot', () => {
  const snap = renderer.create(<addNumber/>).toJSON();
  expect(snap).toMatchSnapshot();
})

test('Add Two Number', () => {
  expect(addNumber(1,2)).toEqual(3);    //toBetruthy, toBeFalsy, toBeDefined, not.toBeDefined()
})
