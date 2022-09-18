import { NextPage} from "next";
import TestSample from "../../components/view/TestSample";
import FormTrial from "../../components/view/FormTrial"

export const Trial = () => {

  return (
    <>
      <h1>Jest トライアルページ</h1>
      <TestSample />
      <FormTrial />
    </>
  )

}

export default Trial;