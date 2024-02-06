import { Grid } from "@mui/material";
import ProductCard from "../components/home/ProductCard";
import { useEffect, useRef, useState } from "react";
import fetch from "../hooks/use-fetch";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([])
  const query = useRef('')
  const [ searchParams ] = useSearchParams();

  useEffect(() => {
    query.current = searchParams.get('name')
    async function fetchData () {
      console.log('query', query)
      try {
        const response = await fetch.get('/product', {params: { name : query.current }})
        if (response) {
          setData(response.data)
        }
      } catch (error) {
        console.log('error')
      }
    }
    fetchData()
  },[searchParams])
  return (
    <div>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((item, index) => {
         
         return <Grid item xs={4} sm={4} md={4} key={index}>
            <ProductCard item={item}/>
          </Grid>
        })}

      </Grid>
    </div>
  )
}
