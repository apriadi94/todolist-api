const Models = require('../models')

exports.getTaksByBoard = (boardId) => {
    return new Promise((resolve, reject) => {
        Models.Task.findAll({ 
            include : ['subtask'],
            where : { boardId } 
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

exports.insertData = ({boardId, taskName}) => {
    return new Promise(async (resolve, reject) => {
        const countBoard = await Models.Board.count({ where : { id : boardId } })
        if(countBoard > 0){
            Models.Task.create({ boardId, taskName })
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

exports.updateData = ({id, taskName}) => {
    return new Promise((resolve, reject) => {
        Models.Task.update({ taskName }, { where : { id } }).then(res => {
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
        Models.Task.destroy({ where : { id } }).then(res => {
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