import React, {useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import style from './css.module.scss'

export default function FirstCoin({priceList,loading}) {
  const [selectedCoin, setCoin] = useState({})
  const [firstPrice,setFirstPrice] = useState('0')
  const [firstResult,setFirstResult] = useState('0')
  const [selectedCoinSecond, setCoinSecond] = useState({price:0})
  const [SecondResult,setSecondResult] = useState('0')
  const [selectedCoinThird, setCoinThird] = useState({price:0})
  const [ThirdResult,setThirdResult] = useState('0')

  const findPrice = (e) => {
    setCoin(priceList.find((i)=> i.label === e.target.textContent))
  }

  const firstCalc = (e) => {
    setFirstResult(firstPrice/selectedCoin?.price)
  }

  const findPriceSecond = (e) => {
    setCoinSecond(priceList.find((i)=> i.label === e.target.textContent))
    SecondCalc()
  }

  const SecondCalc = (e) => {
    setSecondResult(firstResult/selectedCoinSecond?.price)
  }

  const findPriceThird = (e) => {
    setCoinThird(priceList.find((i)=> i.label === e.target.textContent))
    ThirdCalc()
  }

  const ThirdCalc = (e) => {
    setThirdResult(SecondResult*selectedCoinThird?.price)
  }

  useEffect(()=>{
    setCoin(priceList.find((i)=> i.label === selectedCoin?.label))
    firstCalc()
    setCoinSecond(priceList.find((i)=> i.label === selectedCoinSecond?.label))
    SecondCalc()
    setCoinThird(priceList.find((i)=> i.label === selectedCoinThird?.label))
    ThirdCalc()
  },[priceList])


  return (<>
    <div className={style.container}>
      <h2>Первая пара для обмена</h2>
      <div className={style.content}>
      <div className={style.row}>
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={priceList}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        renderInput={(params) => <TextField {...params} label="Первая пара" />}
        onChange={(e)=>findPrice(e)}
        />
        <TextField disabled id="outlined-disabled" label="Цена:" value={isNaN((Number(selectedCoin?.price)).toFixed(5)) ? '0' : (Number(selectedCoin?.price)).toFixed(5)} />
      </div>
      <div className={style.row}>
        <TextField id="outlined-basic" label="Сколько тратим, 2-й монет?" variant="outlined" onChange={(e)=>setFirstPrice(e.target.value)}/>
        <TextField disabled id="outlined-disabled" label="Получим монет:" value={firstResult} />
      </div>
      </div>
    </div>
    <div className={style.container}>
      <h2>Вторая пара для обмена</h2>
      <div className={style.content}>
        <div className={style.row}>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={priceList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Вторая пара" />}
          onChange={(e)=>findPriceSecond(e)}
          />
          <TextField disabled id="outlined-disabled" label="Цена:" value={isNaN((Number(selectedCoinSecond?.price)).toFixed(5)) ? '0' : (Number(selectedCoinSecond?.price)).toFixed(5)} />
          <TextField disabled id="outlined-disabled" label="Получим монет:" value={SecondResult} />
        </div>
      </div>
    </div>
    <div className={style.container}>
      <h2>Третья пара для обмена</h2>
      <div className={style.content}>
        <div className={style.row}>
          <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={priceList}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => <TextField {...params} label="Третья пара" />}
          onChange={(e)=>findPriceThird(e)}
          />
          <TextField disabled id="outlined-disabled" label="Цена:" value={isNaN((Number(selectedCoinThird?.price)).toFixed(5)) ? '0' : (Number(selectedCoinThird?.price)).toFixed(5)} />
          <TextField disabled id="outlined-disabled" label="Получим монет:" value={ThirdResult} />
        </div>
      </div>
    </div>
  </>
  )
}
