import TestSample from "../../src/components/view/TestSample";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Sampleコンポーネント", () => {
  test("should first", () => {
    render(<TestSample />);
    const linkElement = screen.getByText("Nextjs+Jestのサンプルサプリ");
    expect(linkElement).toBeInTheDocument();
  });
});