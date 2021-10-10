const { formatDate } = require("./date");

test("format date correctly", () => {
  expect(formatDate("2021-06-19T10:10:28.354Z")).toBe("June 19, 2021");
});
