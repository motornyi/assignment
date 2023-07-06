import fs from 'fs'
import express from 'express'

const app = express()
const port = 3000

const data = JSON.parse(fs.readFileSync('./server/data.json', 'utf8'))

const getData = (filters = {}) => {
  const result = data.filter((dataItem) => {
    for (const filter in filters) {
      const filterValues = filters[filter]
      if (!filterValues.includes(dataItem[filter])) {
        return false
      }
    }
    return true
  })

  return Promise.resolve(result)
}

app.get('/api', async (req, res) => {
  const filters = { ...req.query }

  for (const filter in filters) {
    filters[filter] = filters[filter].split(',')
  }

  const data = await getData(filters)
  res.json(data)
})

app.listen(port)
