//Asyn/await
const fs = require('fs').promises;

const readFile = async ()=>{
    try{
        const [data,data2] = await Promise.all([
            fs.readFile('file.txt','utf8'),
            fs.readFile('filex.txt','utf8')
        ])
        console.log(data)
        console.log(data2)
        console.log(data.status)
    }
    catch(err){
        console.error(err);
    }
}
readFile()