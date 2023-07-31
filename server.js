const app = require('./app.js')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT

app.listen(PORT, () => {
  `Running on port ${PORT}`
})