const dataBase = require('../Data/index')
const { newPostQuery } = require('../Data/query')


const newPostControl = async (req, res) => {

    const { titulo, url, descripcion } = req.body;
    const post = [titulo, url, descripcion]

    try {

        if (!titulo && !url && !descripcion) {
            console.warn('Llena los campos');
            res.status(400).json({
                msg: 'Llena los campos'
            })
            return
        }
        if (!titulo) {
            console.warn('El campo titulo esta vació');
            res.status(400).json({
                msg: 'El campo titulo esta vació'
            })
            return
        }
        if (!url) {
            console.warn('Carga una imagen para tu post')
            res.status(400).json({
                msg: 'Carga una imagen para tu post'
            })
            return
        }
        if (!descripcion) {
            console.warn('Agrega una descripción al post')
            res.status(400).json({
                msg: 'Agrega una descripción al post'
            })
            return
        }

        
        const createPost = await dataBase.query(newPostQuery, post)
        res.status(200).json({
            msg: 'Post creado exitosamente!!',
            dataCount: createPost.rowCount,
            data: createPost.rows
        })

    } catch (error) {
        console.error(`Error al crear el post:`, error.message)
        res.status(500).json({
            msg: `Hubo un error al procesar tu solicitud`,
            error: error.message
        })

    }

}

module.exports = {
    newPostControl
}