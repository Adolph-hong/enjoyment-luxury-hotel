import TwCities from "../../assets/TwCities.json"

export const cities = TwCities.map((city) => ({
  value: city.name,
  label: city.name
}))

export const districts = {}

export const zipcodes = {}

TwCities.forEach((city) => {
  districts[city.name] = city.districts.map((d) => ({
    value: d.name,
    label: d.name
  }))

  zipcodes[city.name] = {}
  city.districts.forEach((d) =>{
    zipcodes[city.name][d.name] = d.zip
  })
})