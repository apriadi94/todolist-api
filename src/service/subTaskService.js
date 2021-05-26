const Models = require('../models')

exports.insertData = ({taskId, subTaskName}) => {
    return new Promise(async (resolve, reject) => {
        const countTask = await Models.Task.count({ where : { id : taskId } })
        if(countTask > 0){
            Models.SubTask.create({ taskId, subTaskName })
            .then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }else{
            reject('task id tidak ada')
        }
    })
}

exports.updateData = (id, body) => {
    return new Promise((resolve, reject) => {
        Models.SubTask.update(body, { where : { id } }).then(res => {
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
        Models.SubTask.destroy({ where : { id } }).then(res => {
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