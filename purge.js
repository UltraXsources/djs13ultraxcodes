module.exports.run=async (inter)=>{
    let amount = await inter.options.getNumber('amount')
    if(amount<=100){
        inter.channel.bulkDelete(amount,true)
        return await inter.reply(`successfully purged \'${amount}\'messages`)
    }
    else if(amount <= 200){
        inter.channel.bulkDelete(100,true)
        let left = amount - 100
        setTimeout(async()=>{
            inter.channel.bulkDelete(left,true)
            return await inter.reply(`successfully purged \'${amount}\'messages`)
        },2000)
    }
    else if(amount<=300){

        inter.channet.bulkDelete(100,true)
        setTimeout(()=>{inter.channel.bulkDelete(100,true)
        },2000)
        let left=amount-200
        setTimeout(async()=>{inter.channel.bulkDelete(left,true)
            return await inter.reply(`successfully purged \'${amount}\'messages`)
        },2000)
    }
    

}
module.exports.help={name:"purge"}