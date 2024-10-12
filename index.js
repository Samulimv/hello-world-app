const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!<br>I have now enabled automatic deploys in Heroku, if it works it should be showing on my website!!!');
});


app.listen(PORT, () => {
    console.log(`Palvelin toimii osoitteessa http://localhost:${PORT}`);
});
