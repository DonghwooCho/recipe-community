const getConnection = require("../databse/connection");
const productRepository = require("../repositories/product-repository");

exports.findAllproducts = () => {

    return new Promise((resolve, reject) => {
        
        const connection = getConnection();

        const results = productRepository.selectAllProducts(connection);

        connection.end();

        resolve(results);
        
    });
}

exports.selectSearchProducts = (currentPage) => {

    return new Promise((resolve, reject) => {
        
        const connection = getConnection();

        const results = productRepository.selectSearchProducts(connection, currentPage);

        connection.end();

        resolve(results);
        
    });
}

exports.findOneProduct = (boardCode) => {

    return new Promise((resolve, reject) => {
        
        const connection = getConnection();

        const results = productRepository.selectOneProduct(connection, boardCode);

        connection.end();

        resolve(results);
        
    });
}

exports.insertProduct = (board) => {

    return new Promise((resolve, reject) => {
        
        const connection = getConnection();
        connection.beginTransaction();

        console.log('aaaaaaaaa', board)
        try {

        const results = productRepository.insertProduct(connection, board);

        connection.commit();

        resolve(results);
    
        } catch(err) {

            connection.rollback();
            console.log('rollback successfully');

        } finally {

            connection.end();

        }
    });
}