const Models = require('../models')

exports.getAllData = () => {
    return new Promise((resolve, reject) => {
        Models.Board.findAll().then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

exports.getDataById = (id) => {
    return new Promise((resolve, reject) => {
        Models.Board.findOne({ 
            include : [
                {
                    association : 'taks',
                    include : ['subtaks']
                },
            ],
            where : { id }, 
        }).then(res => {
            if(res){
               resolve(res)
            }else{
               reject('data tidak ditemukan')
            }
        }).catch(err => {
            reject(err)
        })
    })
}

exports.insertData = ({boardName}) => {
    return new Promise((resolve, reject) => {
        Models.Board.create({ boardName }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

exports.updateData = ({ id, boardName }) => {
    return new Promise((resolve, reject) => {
        Models.Board.update({ boardName }, { where : { id } }).then(res => {
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
        Models.Board.destroy({ where : { id } }).then(res => {
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