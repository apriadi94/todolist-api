
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