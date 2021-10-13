const Data = require("../models/data")
const data = [
    {tariffItem:"03061500",description:"Norway lobsters (Nephrops norvegicus)",FOB:"2.6%",UQC:"10Kg",Cap:2,},
    {tariffItem:"03061610",description:"Accelerated Freeze Dried",FOB:"2.1%",UQC:"5kg",Cap:62},
    {tariffItem:"03061690",description:"Other",FOB:"2.1%",UQC:"11kg",Cap:62},
    {tariffItem:"03061711",description:"Accelerated Freese Dried (AFD)",FOB:"2.1%",UQC:"50kg",Cap:62},
    {tariffItem:"03061719",description:"other",FOB:"2.1%",UQC:"36kg",Cap:62},
    {tariffItem:"03061720",description:"Vannamei Shrimp (LITOPENAEUS VANNAMEI)",FOB:"2.1%",UQC:"68kg",Cap:62},
    {tariffItem:"03061730",description:"Indian White Shrimp (FENNEROPENAEUS INDICUS)",FOB:"2.5%",UQC:"95kg",Cap:16},
    {tariffItem:"03061740",description:"Black tiger shrimp (Penaeusmonodon)",FOB:"2.5",UQC:"412kg",Cap:16},
    {tariffItem:"03061750",description:"Flower Shrimp (Penaeus semisulcalus)",FOB:"2.5%",UQC:"58kg",Cap:16},
    {tariffItem:"03069300",description:"Crabs",FOB:"2.5%",UQC:"64kg",Cap:62},
    {tariffItem:"03069400",description:"Norway lobsters (Nephrops norvegicus)",FOB:"5.2%",UQC:"75gk",Cap:62},
    {tariffItem:"03069500",description:"Shrimps and prawns",FOB:"2.5%",UQC:"12kg",Cap:62},
    {tariffItem:"03069900",description:"Other, including flours, meals and pellets, of crustaceans,fit for human consumption",FOB:"2.5%",UQC:"63kg",Cap:62},
]


exports.dumpData = async (req,res)=>{
    try{
        data.forEach(async (d)=>{
            let existing = await Data.findOne({tariffItem: d.tariffItem})
            if (existing === null){
                await new Data(d).save() 
                return res.send({success: "true"})
            }
            return res.send({success: "false"})
        })
    }catch(err){
        res.send(err)
    }
}

exports.getData = async (req,res)=>{
    try{
        const {search} =  req.params
        let result = await Data.findOne({tariffItem:search})
        if (result.length!=0) return res.send({success: "true", data:result}) 
        return res.send({success: "false"})
    }catch(err) {
        res.send(err)
    }
}