import debug from 'debug'
import app from './app'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || '3000'

app.listen(parseInt(PORT, 10), HOST, () => {
  debug('server')(`running at http://${HOST}:${PORT}`)
})
