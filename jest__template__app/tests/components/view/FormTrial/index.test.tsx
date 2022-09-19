import FormTrial from "../../../../src/components/view/FormTrial";
import { act } from 'react-dom/test-utils'
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from 'axios';


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

  test('入力完了→画面遷移', async () => {

    // post 用モック作成
    axios.post = jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: 
          {
            "id": 53,
            "myName": "鈴木花子",
            "age": 78,
            "sex": 2
          },
        })
      );

    // 画面描画
    const initialRender = render(<FormTrial />);

    // input要素取得
    const inputElementMyName = screen.getByTestId('name-input');

    const inputElementAge = screen.getByTestId('age-input');
    const inputElementSex = screen.getByTestId('sex-input');

    // API の POST 処理設定
    await act(async () => {
      fireEvent.change(inputElementMyName, {target: {value: '鈴木花子'}})
      fireEvent.change(inputElementAge, {target: {value: '78'}})
      fireEvent.change(inputElementSex, {target: {value: '2'}})

      // 「送信する」ボタン押下
      const sendButton = screen.getByRole('button', {name: "送信する"});
      fireEvent.click(sendButton)
    })

    // HTTP PUTの呼び出し回数の確認
    expect(axios.post).toBeCalledTimes(1)

    // HTTP PUTの入力引数の確認
    const apiPath = process.env.NEXT_PUBLIC_API_HOST + '/mock/trial';

    expect(axios.post).toBeCalledWith(apiPath, {
      myName: '鈴木花子',
      age: 78,
      sex: 2,
    })

  })

});
