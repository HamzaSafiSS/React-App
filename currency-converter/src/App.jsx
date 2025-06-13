import { useEffect, useState } from "react";

export default function App() {
const [Amount,setAmount] = useState(null)
const [convertFrom,setConvertFrom] = useState('USD');
const [convertTo, setConvertTo] = useState('EUR');
const [result,setResult] = useState();

useEffect(function() {
  if(!Number(Amount) || !convertFrom || !convertTo) return;
  if(convertFrom === convertTo)
    { 
      setResult(Number(Amount)) 
      return;
    }
   
  fetch(`https://api.frankfurter.app/latest?amount=${Amount}&from=${convertFrom}&to=${convertTo}`).
  then((res)=>{
    if(!res.ok) throw new Error("Network Problem")
   return res.json();
  }).
  then((data)=> setResult(data.rates[convertTo])).catch(
    (error)=> {console.error("FetchError",error); setResult(null);

    });
  
},[Amount,convertFrom,convertTo])

  return <div>
    <input type='number' value={Amount} onChange={(e)=>setAmount(Number(e.target.value))}></input>
    <select value={convertFrom} onChange={(e)=>setConvertFrom(e.target.value)}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='CAD'>CAD</option>
      <option value='INR'>INR</option>
    </select>
    <select value={convertTo} onChange={(e)=>setConvertTo(e.target.value)}>
      <option value='USD'>USD</option>
      <option value='EUR'>EUR</option>
      <option value='CAD'>CAD</option>
      <option value='INR'>INR</option>
    </select>
    {
      !result ? <p>Please enter the Amount you want to convert and the currency Type.</p> :
      <p>{Amount}{convertFrom} = {result.toFixed(2)}{convertTo}</p>
    }
   
  </div>
}
