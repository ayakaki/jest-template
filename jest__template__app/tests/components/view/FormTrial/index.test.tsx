import FormTrial from "../../../../src/components/view/FormTrial";

import { fireEvent, render, screen, wrapper } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


const sel = (id:string) => `[data-tesidt="${id}"]`

describe('FormTrial コンポーネント', () => {

  test('スナップショットテスト', () => {
    const initialRender = render(<FormTrial />);

    expect(initialRender).toMatchSnapshot();
  })

  test('入力チェック', () => {
    // 画面描画
    const initialRender = render(<FormTrial />);

    // 「送信する」ボタン押下
    const sendButton = screen.getByRole('button', {name: "送信する"});
    fireEvent.click(sendButton)

    // 要素取得（バリデーションメッセージ）
    const vallidationMessageMyName = screen.getByText("ユーザ名を入力してください。");
    const vallidationMessageAge = screen.getByText("年齢を入力してください。");
    const vallidationMessageSex = screen.getByText("性別を選択してください。");

    // 描画チェック
    expect(vallidationMessageMyName).toBeInTheDocument();
    expect(vallidationMessageAge).toBeInTheDocument();
    expect(vallidationMessageSex).toBeInTheDocument();

  })

  test('入力完了→画面遷移', () => {
    // 画面描画
    const initialRender = render(<FormTrial />);

    // input要素取得
    const inputElementMyName = screen.getByTestId('name-input');

    const inputElementAge = screen.getByTestId('age-input');
    const inputElementSex = screen.getByTestId('sex-input');

    // 情報入力
    fireEvent.change(inputElementMyName, {target: {value: '鈴木花子'}})
    fireEvent.change(inputElementAge, {target: {value: '78'}})
    fireEvent.change(inputElementSex, {target: {value: '2'}})

    // 「送信する」ボタン押下
    const sendButton = screen.getByRole('button', {name: "送信する"});
    fireEvent.click(sendButton)



  })

});
