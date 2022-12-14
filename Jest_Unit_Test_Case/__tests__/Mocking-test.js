import { addTwoNumbers } from "../src/mathUtils/Mocking";
import { track } from "../src/mathUtils/analyticsUtils";

jest.mock('../src/mathUtils/analyticsUtils');

test ('add Two Numbers', () => {
    expect(addTwoNumbers(1, 2)).toEqual(3);
    expect(track).toBeCalledWith('addNumberstwo');
});