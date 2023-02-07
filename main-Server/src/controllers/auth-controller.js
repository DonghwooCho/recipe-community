const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const privateKey = 'privateKey'; // member-controller와 일치

exports.authController = (req, res, next) => {
    const accessToken = req.header('accessToken');
    console.log(accessToken)
    
    let payload;

    if(!accessToken) {
        res.status(httpStatus.UNAUTHORIZED).json({ success: false, message: '로그인 정보가 없습니다.' });
    } else {
        jwt.verify(accessToken, privateKey, (err, decoded) => {
            payload = decoded;
        });
    }

    console.log("payload", payload);

    res.status(httpStatus.OK).send({ success: true, message: '로그인 인증 성공'})
    next();
};