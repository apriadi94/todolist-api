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

exports.updateData = (id, body) => {
    return new Promise((resolve, reject) => {
        Models.SubTaks.update(body, { where : { id } }).then(res => {
           if(res[0] === 1){
               resolve(res)
           }else{
               reject('id tidak ditemukan')
           }
        }).catch(err => {
            reject(err)
        })
    })
}

exports.deleteData = (id) => {
    return new Promise((resolve, reject) => {
        Models.SubTaks.destroy({ where : { id } }).then(res => {
           if(res === 1){
               resolve(res)
           }else{
               reject('id tidak ditemukan')
           }
        }).catch(err => {
            reject(err)
        })
    })
}