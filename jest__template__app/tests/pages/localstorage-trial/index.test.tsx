import LocalStorageTrial from "../../../src/pages/localstorage-trial";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("LocalStorageMockテスト", () => {

  test('LocalStorage格納確認テスト', () => {

    const initialRender = render(<LocalStorageTrial />);

    const setButton = screen.getByTestId('input-button');
    fireEvent.click(setButton)

    const getButton = screen.getByTestId('output-button');
    fireEvent.click(getButton)
  
    screen.debug();  // 確認用

    const message = screen.getByText("テストアイテム");
    expect(message).toBeInTheDocument();

  });

})

