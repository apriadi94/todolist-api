
const subTaksService = require('../service/subTaksService')

exports.add = (req, res) => {
    const { taksId, subTaksName } = req.body

    subTaksService.insertData({ taksId, subTaksName }).then(() => {
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

    subTaksService.updateData(id, req.body).then(() => {
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

    subTaksService.deleteData(id).then(() => {
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