import { NextPage } from "next";
import { useRecoilState } from "recoil";
import {TrialRecoil} from "../../Store/TrialRecoil"

export const RecoilTrial:NextPage = () => {

  const [ recoilOnlyState, setRecoilOnlyState ] = useRecoilState(TrialRecoil);  

  const updateRecoilValue = () => {
    setRecoilOnlyState("Recoil 変数に値設定済み");
  }

  return(
  <>
    <button data-testid="update-recoil-value" onClick={()=>updateRecoilValue()}>Recoil 変数の値変更</button>
    <p>{recoilOnlyState}</p>
  </>
  )
}

export default RecoilTrial;
