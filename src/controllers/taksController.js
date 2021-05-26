const taskService = require('../service/taskService')

exports.get = async (req, res) => {
    const { boardId } = req.query
    taskService.getTaksByBoard(boardId).then(result => {
        res.json({
            status : 'sukses',
            data : result
        })
    }).catch(err => {
        res.json({
            status : 'error',
            message : err
        })
    })
}

exports.add = (req, res) => {
    const { boardId, taskName } = req.body

    taskService.insertData({ boardId, taskName }).then(() => {
        res.json({
            status : 'sukses',
            message : 'berhasil menambah taks'
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
    const { taskName } = req.body
    
    taskService.updateData({id, taskName}).then(() => {
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

    taskService.deleteData(id).then(() => {
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