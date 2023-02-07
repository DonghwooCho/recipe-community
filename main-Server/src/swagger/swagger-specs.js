// 스웨거를 만들기 위해 패키지 require
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    // swagger 정보를 적어준다. => swagger 공식 홈페이지에 잘 나와있다.
    swaggerDefinition: {
        // 이용할 swagger 버전 정보를 적는다
        openapi: "3.0.1",
        // 제목, API 버전 정보, 설명 등을 담는다.
        info: {
            title: 'WeCanDo Board API',
            version: '1.0.0',
            description: 'WeCanDo Board API 이용 방법 및 설명'
        },
        servers: [
            {
                // url 정보 
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./src/swagger/paths/*']
};

const specs = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};