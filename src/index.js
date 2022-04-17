const express = require('express');
const app = express();
const indexRouter = require('./routers/indexRouter');


//using existing middleware instead
app.use(express.json());
app.use("/api",indexRouter);


app.listen(5000, () => {
    console.log('Server started on port 5000');
})

