
import RecoilTrial from "../../../src/pages/recoil-trial";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { useRecoilValue } from "recoil";
import { RecoilRoot } from 'recoil';


describe("Recoil テスト", () => {

  test('Recoil 格納確認テスト', () => {

    const initialRender = render(
      <RecoilRoot>
        <RecoilTrial />
      </RecoilRoot>  
      );

    screen.debug(); // 確認用

    const setButton = screen.getByTestId('update-recoil-value');
    fireEvent.click(setButton);

    screen.debug(); // 確認用

    const message = screen.getByText("Recoil 変数に値設定済み");
    expect(message).toBeInTheDocument();

  });

})

