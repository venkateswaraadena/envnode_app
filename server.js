const server = require('express');
const app = new server();
const bodyParser = require('body-parser');
const cors = require('cors');
require('custom-env').env();

const customEnvRouter = require('./Routers/Env.Router');

const PORT = process.env.PORT || 5600;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

app.get('/',function(req,res) {
    res.json({status : 200, msg : "Service running..."});
});

app.use('/api',customEnvRouter);

app.listen(PORT,function(){
    console.log(`Service running on port :  ${PORT}`);
});