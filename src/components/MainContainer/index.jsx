import React, {useState, useEffect} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';
import FirstCoin from '../FirstCoin';
import Header from '../Header';

export default function App() {
  const [priceList, setPriseList] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    await  axios.get('https://api.binance.com/api/v3/ticker/price').then(resp => {
      setPriseList(resp.data.map(element => {return { ...element, label:element.symbol}}))
    })
    setLoading(false)
  }

  useEffect(()=>{
    fetchData()
  },[])
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Header priceList={priceList} fetchData={fetchData} loading={loading}/>
        <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', height: '100vh' }}>
          <FirstCoin priceList={priceList} loading={loading}/>
        </Box>
      </Container>
    </React.Fragment>
  );
}