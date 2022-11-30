const bordService = require("../service/bord-service")

exports.createBord = (req, res, next) => {
    const content = req.body.content;
    const img = req.body.url;
    const id = req.body.id;

    bordService.createBord(id, content, img)
        .then(res.redirect('/'))
        .catch(
            err => {
                next(err);
                console.log(`Bord created failed. Error : ${err}`);
            }
        );
};

exports.findBord = (req, res, next) => {
    res.send(bordService.getBord(req.params.id));
};

exports.allBord = (req, res, next) => {
    res.send(JSON.stringify(bordService.allBord()));
}

exports.updateBord = (req, res, next) => {
    bordService.updateBord(req.body.id, req.body.content, req.body.url)
    .then(res.redirect('/'))
    .catch(
        err => {
            next(err);
            console.log(`Bord update failed. Error : ${err}`);
        }
    );
};

exports.deleteBord = (req, res, next) => {
    const id = req?.query?.id;
    bordService.deleteBord(id)
        .then(res.redirect('/'))
        .catch(
            err => {
                next(err);
                console.log(`'Bord delete failed. Error : ${err}`);
            }
        );
};