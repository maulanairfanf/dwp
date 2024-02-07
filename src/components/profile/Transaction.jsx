import { useEffect, useState } from "react";
import fetch from "../../hooks/use-fetch";
import CardTransaction from "./CardTransaction";
import { Typography } from "@mui/material";

export default function Transaction() {
  const [data, setData] = useState([])
  async function fetchData() {
    try {
      const response = await fetch.get('/transaction')
      if (response) {
        setData(response.data)
      }
    } catch (error) {
      console.log('error')
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <>
    {data.length ? data.map((item, index) => {
      return <CardTransaction item={item} key={index} fetchData={fetchData} />
    }) : <Typography variant="h6">Belum ada transaksi</Typography>
    }
  </>
  )
}
