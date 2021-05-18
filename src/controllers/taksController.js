const taksService = require('../service/taksService')

exports.get = async (req, res) => {
    const { boardId } = req.query
    taksService.getTaksByBoard(boardId).then(result => {
        res.json({
            status : 'sukses',
            data : result
        }).catch(err => {
            res.json({
                status : 'error',
                message : err
            })
        })
    })
}

exports.add = (req, res) => {
    const { boardId, taksName } = req.body

    taksService.insertData({ boardId, taksName }).then(() => {
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
    const { taksName } = req.body
    
    taksService.updateData({id, taksName}).then(() => {
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

    taksService.deleteData(id).then(() => {
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