import TestSample from "../../../../src/components/view/TestSample";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";


describe("Sampleコンポーネント", () => {
  test("スナップショットテスト2", () => {
    const html = render(<TestSample />);
    expect(html).toMatchSnapshot();
  });


});