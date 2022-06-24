import React from 'react'
import style from './css.module.scss'
import Button from '@mui/material/Button';

export default function Header({priceList,fetchData,loading}) {


  return (
    <div className={style.header}>
        <h3 className={style.header__logo}>🚀 Калькулятор Binance 💰</h3>
        <Button disabled={loading} color='success' onClick={fetchData} variant="contained">{loading? 'Обновление' : 'Обновить'}</Button>
        <h3 className={ loading ? style.header__loading : style.header__complete }>{ loading ? 'Загрузка данных...' : 'Данные обновлены' }</h3>
    </div>
  )
} 
