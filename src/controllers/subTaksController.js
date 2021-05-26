
const subTaskService = require('../service/subTaskService')

exports.add = (req, res) => {
    const { taskId, subTaskName } = req.body

    subTaskService.insertData({ taskId, subTaskName }).then(() => {
        res.json({
            status : 'sukses',
            message : 'berhasil menambah subtaks'
        })
    }).catch(err => {
        res.json({
            status : 'error',
            message : err
        })
    })
}

exports.edit = (req, res) => {
    const { id } = req.params

    subTaskService.updateData(id, req.body).then(() => {
        res.json({
            status : 'sukses',
            message : 'berhasil mengubah'
        })
    }).catch(err => {
        res.json({
            status : 'error',
            message : err
        })
    })
}

exports.delete = (req, res) => {
    const { id } = req.params

    subTaskService.deleteData(id).then(() => {
        res.json({
            status : 'sukses',
            message : 'berhasil di hapus'
        })
    }).catch(err => {
        res.json({
            status : 'error',
            message : err
        })
    })
}