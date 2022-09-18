import react, {useState, useEffect} from 'react';
import axios from 'axios';

export type member = {
  myName:string,
  age:string,
  sex:string
} 

export const FormTrial = () => {
  const [member, setMember] = useState<member>({myName:'', age:'', sex:'0'})
  const [validataMessageMyName, setValidataMessageMyName] = useState<string>('')
  const [validataMessageAge, setValidataMessageAge] = useState<string>('')
  const [validataMessageSex, setValidataMessageSex] = useState<string>('')


  // API パス設定
  const apiPath = process.env.NEXT_PUBLIC_API_HOST + '/mock/trial';

  // useEffect(()=>{
  //   console.log('myNameは', member.myName);
  //   console.log('age', member.age);
  //   console.log('sex', member.sex);

  // },[member])

  const submitForm = () =>{

    var validationFlg:boolean = false;

    // バリデーション
    if(member.myName){
      setValidataMessageMyName('');
    }else{
      setValidataMessageMyName('ユーザ名を入力してください。');
      validationFlg = true;
    }

    if(member.age){
      setValidataMessageAge('');
    }else{
      setValidataMessageAge('年齢を入力してください。');
      validationFlg = true;
    }

    if(member.sex == '0'){
      setValidataMessageSex('性別を選択してください。');
      validationFlg = true;
    }else{
      setValidataMessageSex('');
    }

    if(validationFlg){
      return
    }

    // API コール
    axios.post(apiPath, {
      "myName": member.myName,
      "age": Number(member.age),
      "sex": Number(member.sex)
    })
    .then((response) => {
      console.log('リクエスト成功', response)
    })
    .catch((error)=>{
      console.log('リクエスト失敗', error)
    })

  }

  return (
    <>
        <div>
          <input data-testid="name-input" type="text" value={member.myName} onChange={(e) => setMember((member)=>({...member, myName: e.target.value}))} placeholder="山田太郎" />
          <p>{validataMessageMyName}</p>
        </div>
        <div>
          <label>年齢</label>
          <input data-testid="age-input" type="text" value={member.age} onChange={(e) => setMember((member) => ({...member, age: e.target.value}))}  placeholder="19" />
          <p>{validataMessageAge}</p>
        </div>
        <div>
          <select data-testid="sex-input" name="sex" onChange={(e) => setMember((member) => ({...member, sex: e.target.value}))} >
            <option value="0">選択してください</option>
            <option value="1">男性</option>
            <option value="2">女性</option>
            <option value="3">回答しない</option>
          </select>
          <p>{validataMessageSex}</p>
        </div>
        <div>
          <button onClick={()=>{submitForm()}}>送信する</button>
        </div>
    </>
  )

}

export default FormTrial;