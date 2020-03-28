const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Express started in ` +
`${app.get('env')} mode at http://localhost:${PORT}` +
`; press Ctrl-C to terminate.`)
})