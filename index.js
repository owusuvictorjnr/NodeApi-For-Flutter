const app = require('./app')

const port = 5000

app.get('/', (req, res) => {
  res.send('Welcome Vitech Solutions')
})

app.listen(port, () => {
  console.log('Server listening on port http://localhost:', port)
})
