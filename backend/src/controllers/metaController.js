//chama o metas de dentro de models
const Metas = require('../models/metas');
const status = require('http-status');

//comando para realizar inserção dos dados através de requisição
exports.Insert = (req, res, next) => {
    const data = req.body.data;
    const meta = req.body.meta;
    const resultado = req.body.resultado;
    const idTime = req.body.idTime;

    //Sequelize ira enviar os dados atraves do comando create. create é para inserir
    Metas.create({
        data: data,
        meta: meta,
        resultado: resultado,
        idTime: idTime
    }).then(
        (metas) => {
            if (metas) {
                res.status(status.OK).send(metas);
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        }
    ).catch(
        () => {
            error = next(error)
        }
    )

}

exports.SearchAll = (req, res, next) => {
    Metas.findAll()
        .then(
            (metas) => {
                if (metas) {
                    res.status(status.OK).send(metas);
                }
            }
        ).catch(
            () => {
                error = next(error)
            }
        )
}

exports.SearchOne = (req, res, next) => {
    const id = req.params.id;

    Metas.findByPk(id)
        .then(
            (metas) => {
                if (metas) {
                    res.status(status.OK).send(metas);
                }
            }
        ).catch(
            () => {
                error = next(error)
            }
        )
}

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Metas.findByPk(id)
        .then(
            (metas) => {
                if (metas) {
                    metas.destroy({
                        where: { id: id }
                    }).then(
                        (metas) => {
                            if (metas) {
                                res.status(status.OK).send();
                            }
                        }
                    ).catch(
                        () => {
                            error = next(error)
                        }
                    )
                }
            }
        ).catch(
            () => {
                error = next(error)
            }
        )
}

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const data = req.body.data;
    const meta = req.body.meta;
    const resultado = req.body.resultado;
    const idTime = req.body.idTime;

    Metas.findByPk(id)
        .then(
            metas => {
                if (metas) {
                    metas.update({
                        data: data,
                        meta: meta,
                        resultado: resultado,
                        idTime: idTime
                    }, { where: { id: id } }
                    )
                        .then(
                            (metas) => {
                                if (metas) {
                                    res.status(status.OK).send(metas);
                                }
                            }
                        ).catch(
                            () => {
                                error => next(error)
                            }
                        )
                }
            }
        )
        .catch(
            () => {
                error => next(error)
            }
        )
}
