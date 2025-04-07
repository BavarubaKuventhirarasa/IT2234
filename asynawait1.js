//Asyn/await
const fs = require('fs').promises;

const readFile = async ()=>{
    try{
        const data = await fs.readFile('filex.txt','utf-8')
        console.log(data)
    }
    catch(err){
        console.error(err);
    }
}
readFile()