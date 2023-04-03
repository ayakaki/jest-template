import Trial from "../../../src/pages/trial";
import { render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


describe("Trialページ", () => {
  test("スナップショットテスト", () => {
    const html = render(<Trial />);
    expect(html).toMatchSnapshot();
  });

});