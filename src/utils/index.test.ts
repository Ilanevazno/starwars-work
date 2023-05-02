import { camelCaseToTitles } from "./camelCaseToTitles";
import { extractIdFromUrl } from "./extractIdFromUrl";
import { insertIfObj } from "./insertIfObj";

describe("test utils", () => {
  test("extractIdFromUrl util", () => {
    const mockUrl = "https://swapi.dev/api/planets/1/";
    const mockIncorrectUrl = "https://swapi.dev/api/planets";

    expect(extractIdFromUrl(mockUrl)).toBe("1");
    expect(extractIdFromUrl(mockIncorrectUrl)).toBe(undefined);
  });

  test("camelCaseToTitles util", () => {
    const mockCamelCase = "mockStringValue";

    expect(camelCaseToTitles(mockCamelCase)).toBe("mock string value");
  });

  test("insertIfObj util", () => {
    const mockObject = {
      ...insertIfObj(true, {
        trueCase: "true case",
      }),
      ...insertIfObj(false, {
        falseCase: "false case",
      }),
    };

    expect("trueCase" in mockObject).toBe(true);
    expect("falseCase" in mockObject).toBe(false);
  });
});
