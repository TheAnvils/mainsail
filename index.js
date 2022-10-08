const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const { client } = require('./db.js');
const express = require('express')
const app = express()
const port = 3000
Sentry.init({
  dsn: process.env.DSN,
 tracesSampleRate: 1.0,
});
const transaction = Sentry.startTransaction({
  op: "test",
  name: "Server Start",
});
 try {
    init();
  } catch (e) {
    Sentry.captureException(e);
  } finally {
    transaction.finish();
  }
function init() {
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}