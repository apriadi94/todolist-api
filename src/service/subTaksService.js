const Models = require('../models')

exports.insertData = ({taksId, subTaksName}) => {
    return new Promise(async (resolve, reject) => {
        const countTaks = await Models.Taks.count({ where : { id : taksId } })
        if(countTaks > 0){
            Models.SubTaks.create({ taksId, subTaksName })
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }else{
            reject('Taks id tidak ada')
        }
    })
}