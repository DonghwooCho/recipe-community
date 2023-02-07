const BoardDTO = require("../dto/BoardDTO");
const productQuery = require("../databse/product-query");

exports.selectAllProducts = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(productQuery.selectAllProducts(), (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            const products = [];
            for(let i = 0; i < results.length; i++) {
                products.push(new BoardDTO(results[i]));
            }

            resolve(products);
        });
    });

};

exports.selectSearchProducts = (connection, currentPage) => {

    return new Promise((resolve, reject) => {

        if(currentPage[0]==='') {
            connection.query(productQuery.selectSearchProducts(),
            [`%${currentPage[0]}%`, currentPage[1], currentPage[2]],
            (err, results, fields) => {
                
                if(err) {
                    console.log('Error : ', err);
                    reject(err);
                }

                console.log('results : ', results);

                const products = [];
                for(let i = 0; i < results.length; i++) {
                    products.push(new BoardDTO(results[i]));
                }

                resolve(products);
            });
        } else {
            connection.query(productQuery.selectSearchAllProducts(),
            [`%${currentPage[0]}%`],
            (err, results, fields) => {
                
                if(err) {
                    console.log('Error : ', err);
                    reject(err);
                }

                console.log('results : ', results);

                const products = [];
                for(let i = 0; i < results.length; i++) {
                    products.push(new BoardDTO(results[i]));
                }

                resolve(products);
            });
        }
    });

};

exports.selectOneProduct = (connection, boardCode) => {

    return new Promise((resolve, reject) => {

        connection.query(productQuery.selectOneProduct(), [boardCode], (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            resolve(results);
        });
    });

};

exports.insertProduct = (connection, board) => {

    return new Promise((resolve, reject) => {

        console.log(board[0], board[1])
        connection.query(productQuery.insertProduct(), [board[0], board[1], board[2]], (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            resolve(results);
        });
    });

};