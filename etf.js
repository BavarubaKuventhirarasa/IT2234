const mongoose = require('mongoose')
const etfSchema = new mongoose.Schema({
    ETF_NO:{type:Number, require: true},
    Balance: {type:Number, require: true},
    Interest_rate: {type: String, require: true}
})

const ETF = mongoose.model('etfs', etfSchema)

const etf1 = new ETF({
    ETF_NO: 101,
    Balance: 3500,
    Interest_rate:"5%"
})

const etf2 = new ETF({
    ETF_NO: 102,
    Balance: 2500,
    Interest_rate:"5%"
})

const etf3 = new ETF({
    ETF_NO: 103,
    Balance: 3000,
    Interest_rate:"5%"
})

const etf4 = new ETF({
    ETF_NO: 104,
    Balance: 1500,
    Interest_rate:"5%"
})

etf1.save()
etf2.save()
etf3.save()
etf4.save()

module.exports=ETF