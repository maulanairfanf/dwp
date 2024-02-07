import { Box, FormControl, InputLabel, MenuItem, Select, Slider, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

function Filter() {
  const [sort, setSort] = useState('')
  const [priceRange, setPriceRange] = useState(0)
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setSort(event.target.value)
    setSearchParams({sort : event.target.value, 'price-range' : priceRange, name: query})

  }

  const handlePriceRange = (event, value) => {
    setPriceRange(value)
    setSearchParams({sort : sort, 'price-range' : value, name: query })

  }

  useEffect(() => {
    if (searchParams.get('name')) setQuery(searchParams.get('name'))
    else setQuery('')

  },[searchParams])

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{my : 2}}
      justifyContent="flex-end"
      alignItems="center"
    >
      <Box sx={{ width: 300 }}>
      <Typography variant="button" display="block" >
        Price Range
      </Typography>
        <Slider
          aria-label="Price"
          defaultValue={0}
          valueLabelDisplay="auto"
          step={10000}
          marks
          min={0}
          max={400000}
          onChangeCommitted={handlePriceRange}
        />
      </Box>
      <FormControl  sx={{ m: 1,  width: 300 }}>
        <InputLabel id="demo-simple-select-label">Urutkan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Urutkan"
          onChange={handleChange}
        >
          <MenuItem value="name">A - Z</MenuItem>
          <MenuItem value="price">Harga Terendah</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default Filter