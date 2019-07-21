const fs = require('fs') 

function CreateEnv(req,res) {
    try {
        const sourcePath = `./Processor/${req.params.process}/.env`;
        var createStream = "";
        if (fs.existsSync(sourcePath)) {            
          } else {
            fs.mkdirSync(`./Processor/${req.params.process}`)
            createStream = fs.createWriteStream(`./Processor/${req.params.process}/.env`);
            createStream.end(); 
          }
            var data = JSON.stringify({
               [req.params.key] : req.params.value
            });
            fs.writeFileSync(`./Processor/${req.params.process}/.env`, data) 
            res.send({status : 200, message : "ENV received successfully.."
            ,Result : JSON.parse(data)});         
        
    } catch(ex) {
        res.send(ex); 
    }
      
};

function GetEnv(req,res) {
    try{
        fs.readFile(`./Processor/${req.params.process}/.env`,function(err,response) {
            if(err) {
                res.send(err);
            } 
            res.send(JSON.parse(response));
        });
    } catch(ex) {
        res.send(ex);
    }
    
}

module.exports.CreateEnv = CreateEnv;
module.exports.GetEnv = GetEnv;