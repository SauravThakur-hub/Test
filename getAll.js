var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

async function getAll(table) {
    let promise = new Promise((resolve, reject)=> {
        var tmp;
        docClient.scan({TableName:table}, (err,data) =>{
            if(err)
                tmp = err;
            else
                tmp = data;
            resolve(tmp);
        })
    })

    return promise

}
 module.exports.getAll = getAll;
