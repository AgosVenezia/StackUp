const myfunction = require("./myfunction");

test("checks length of array", () => {
 expect(myfunction(5).length).toBe(5);
});
test("checks if 1 in array", () => {
 expect(myfunction(5)).toContain(1);
});