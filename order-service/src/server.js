const app = require('./app');

const PORT = process.env.PORT || 3003; //changing port

app.listen(PORT, () => {
  console.log(`✅ Order service running on port ${PORT}`);
});
