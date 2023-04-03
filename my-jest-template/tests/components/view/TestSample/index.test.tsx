import TestSample from "../../../../src/components/view/TestSample";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";

// リクエストのクエリパラメータを設定
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {
        id: "001",
        next_url: "/../../test/contract/QuestionnaireAfterContract/After",
      },
      asPath: "/",
      basePath: "/",
      isLocaleDomain: true,
      isReady: true,
      push: jest.fn(),
      prefetch: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
      isPreview: false,
    };
  },
}));

describe("TestSampleコンポーネント", () => {

  test("スナップショットテスト2", () => {
    const {asFragment} = render(<TestSample />);
    expect(asFragment()).toMatchSnapshot();
  });

  // test("画面遷移テスト", async () => {
  //   const { page } = await getPage({
  //     route: '/jump-dst-direct',
  //   })
  //   render(page)
 
  //   userEvent.click(screen.getByTestId('jump-dst-direct-flg'))
  //   expect(await screen.findByText('好きな食べ物はりんごです。')).toBeInTheDocument()

  // })


});