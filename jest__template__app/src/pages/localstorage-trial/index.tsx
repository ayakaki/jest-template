import { NextPage } from "next";
import {useState} from "react";

export const LocalStorageTrial: NextPage = () => {

  const [localStorageItem, setLocalStorageItem] = useState<string | null>()
 
  const inputLocalStorage = () =>{
    console.log("ローカルストレージに格納した");
    localStorage.setItem('trialItem', 'テストアイテム');
  }

  const outputLocalStorage = () =>{
    console.log("ローカルストレージから取り出した");
    setLocalStorageItem(localStorage.getItem('trialItem'));
  }
  
  return(
    <>
      <p><button data-testid='input-button' onClick={()=>(inputLocalStorage())}>ローカルストレージに格納するよ</button></p>
      <p><button data-testid='output-button' onClick={()=>(outputLocalStorage())}>ローカルストレージから取り出すよ</button></p>
      <p data-testid='view-area'>{localStorageItem}</p>
    </>
  )
}

export default LocalStorageTrial;