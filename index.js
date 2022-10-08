const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
const { client } = require('./db.js');
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
  
}