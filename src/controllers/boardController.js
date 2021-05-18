
exports.get = (req, res) => {
    res.json({
        controller : 'get board'
    })
}

exports.add = (req, res) => {
    res.json({
        controller : 'add board'
    })
}

exports.getById = (req, res) => {
    const { id } = req.params
    res.json({
        controller : `get board by id ${id}`
    })
}

exports.edit = (req, res) => {
    const { id } = req.params
    res.json({
        controller : `edit board ${id}`
    })
}

exports.delete = (req, res) => {
    const { id } = req.params
    res.json({
        controller : `delete board ${id}`
    })
}
