//Custom Hook
import { useEffect, useState } from "react";


function useCurrencyInfo (currency) // this is hook
const [data,setData]=useState({})
{
useEffect(()=> {

    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json()).then((res)=>setData(res[currency]))
    console.log(data);
},[currency]) // this is call back
return [data,setData]
}