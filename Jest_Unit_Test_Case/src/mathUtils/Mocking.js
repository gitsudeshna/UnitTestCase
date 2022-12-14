import { track } from "./analyticsUtils";

export function addTwoNumbers(x, y) {
    track('addNumberstwo');
    return x + y;
}