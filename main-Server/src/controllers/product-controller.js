const HttpStatus = require('http-status');
const productService = require('../services/product-service.js');

exports.findAllproducts = async (req, res, next) => {

    const results = await productService.findAllproducts();

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all products',
        results: results
    })

    next();
};

exports.selectSearchProducts = async (req, res, next) => {

    const boardTitle = req.body.title;
    const offset = req.body.offset;
    const limit = req.body.limit;

    const currentPage = [boardTitle, limit, offset];

    console.log("aaaaaaaaaaaaaaaaaaa", currentPage)
    const results = await productService.selectSearchProducts(currentPage);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully search all products',
        results: results
    })

    next();
};

exports.findOneProduct = async (req, res, next) => {

    const boardCode = req.param('boardCode')
    console.log(boardCode)
    const results = await productService.findOneProduct(boardCode);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all products',
        results: results
    })

    next();
};

exports.insertProduct = async (req, res, next) => {

     const title = req.body.boardTitle;
     const content = req.body.boardContent;
     const ownerId = req.body.boardOwner.id;
     const board = [title, content, ownerId];

    const results = await productService.insertProduct(board);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully inserted a product'
    })

    next();
};

// exports.deleteProduct = async (req, res, next) => {

//     const title = req.body.title;
//     const content = req.body.content;
//     const board = [title, content];

//     const results = await productService.insertProduct(board);

//     res.status(HttpStatus.OK).json({
//         status: HttpStatus.OK,
//         message: 'successfully inserted a product',
//         results: results
//     })

//     next();
// };