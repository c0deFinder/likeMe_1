const dataBase = require('../Data/index.js')
const { getPostQuery } = require('../Data/query.js')

const getDataControl = async (req, res) => {

    try {

        const getPosts = await dataBase.query(getPostQuery)
        if (getPosts.rowCount) {
            console.info("data cargada")
            res.status(200).json(getPosts.rows)
        }
        else {
            res.status(200).json({
                msg: 'No hay posts para mostrar',
            });
        }

    } catch (error) {
        console.error('Error', error.message);
        res.status(500).json({
            msg: 'Error al cargar la data',
            error: error.message
        });
    }
}

module.exports = {
    getDataControl
}