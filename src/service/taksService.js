const Models = require('../models')

exports.getTaksByBoard = (boardId) => {
    return new Promise((resolve, reject) => {
        Models.Taks.findAll({ 
            include : ['subtaks'],
            where : { boardId } 
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

exports.insertData = ({boardId, taksName}) => {
    return new Promise(async (resolve, reject) => {
        const countBoard = await Models.Board.count({ where : { id : boardId } })
        if(countBoard > 0){
            Models.Taks.create({ boardId, taksName })
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }else{
            reject('Board id tidak ada')
        }
    })
}

exports.updateData = ({id, taksName}) => {
    return new Promise((resolve, reject) => {
        Models.Taks.update({ taksName }, { where : { id } }).then(res => {
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
        Models.Taks.destroy({ where : { id } }).then(res => {
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