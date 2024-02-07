import { Grid } from "@mui/material";
import ProductCard from "../components/home/ProductCard";
import { useEffect, useRef, useState } from "react";
import fetch from "../hooks/use-fetch";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/home/Filter";

export default function Home() {
  const [data, setData] = useState([])
  const query = useRef('')
  const sort = useRef('')
  const priceRange = useRef(0)
  const [searchParams] = useSearchParams();

  useEffect(() => {
    query.current = searchParams.get('name')
    sort.current = searchParams.get('sort')
    priceRange.current = searchParams.get('price-range')
    let params = {}
    if (query.current) {
      params = { ...params, name: query.current}
    }
    if (sort.current) {
      params = { ...params, _sort : sort.current}
    }
    if (priceRange.current) {
      if (priceRange.current == 0) {
        delete params["price_lte"];
      } else {
        params = { ...params, price_lte : priceRange.current}
      }
    }

    async function fetchData () {
      try {
        const response = await fetch.get('/product', {params: params})
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
      <Filter />
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
