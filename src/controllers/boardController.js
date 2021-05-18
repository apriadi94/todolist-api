const boardService = require('../service/boardService')

exports.get = async (req, res) => {
    boardService.getAllData().then(result => {
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

exports.add = async (req, res) => {
    const { boardName } = req.body
    await boardService.insertData({ boardName }).then(() => {
        res.json({
            status : 'sukses',
            message : 'berhasil menambah',
        })
    }).catch(err => {
        res.json({
            status : 'error',
            message : err,
        })
    })
    
}

exports.getById = async (req, res) => {
    const { id } = req.params
    await boardService.getDataById(id).then(result => {
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

exports.edit = (req, res) => {
    const { id } = req.params
    const { boardName } = req.body
    boardService.updateData({ id, boardName }).then(() => {
        res.json({
            status : 'sukses',
            message : 'berhasil di ubah'
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
    boardService.deleteData(id).then(() => {
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
