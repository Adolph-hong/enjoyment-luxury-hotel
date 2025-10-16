import raw from '../../assets/TwCities.json'

type CityJSON = {
  name: string
  districts: { name: string; zip: string }[]
}

const TwCities = raw as CityJSON[]
export type Option = { value: string; label: string }

export const cities: Option[] = TwCities.map((city) => ({
  value: city.name,
  label: city.name,
}))

export const districts: Record<string, Option[]> = {}

export const zipcodes: Record<string, Record<string, string>> = {}

for (const city of TwCities) {
  districts[city.name] = city.districts.map((d) => ({
    value: d.name,
    label: d.name,
  }))

  for (const city of TwCities) {
    const cityMap: Record<string, string> = {} 
    for (const d of city.districts) {
      cityMap[d.name] = d.zip 
    }
    zipcodes[city.name] = cityMap 
  }
}
