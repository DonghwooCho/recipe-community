const HttpStatus = require('http-status');
const memberService = require('../services/member-service.js');
const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const localStorage = require("localStorage");
const MemberDTO = require('../dto/MemberDTO');

exports.selectLoginMember = async (req, res, next) => {
    
    const memberId = req.body.id;
    const memberPassword = req.body.password;

    const results = await memberService.selectLoginMember();

    //console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", results)

    const loginMember = results.filter(member => member.id === memberId)
                               .filter(member => member.password === memberPassword);

    const privateKey = 'privateKey';
    const refreshKey = 'refreshKey';

    let accessToken;
    let refreshToken;

    if(loginMember[0]) {
        accessToken = jwt.sign(
            {
                memberId: loginMember.id,
                memberName: loginMember.name
            }, privateKey, { expiresIn: '1m' })

        refreshToken = jwt.sign(
                {
                    memberId: loginMember.id,
                    memberName: loginMember.name
                },
                refreshKey, { expiresIn: '3d' })
    }
    // 비밀번호 잘못쳤을 때 에러 컨트롤 해야 함    
    // else {
    //     res.status(HttpStatus.OK).json({
    //         status: HttpStatus.UNAUTHORIZED,
    //         message: 'fail to sign in',
    //     })
    // }

    console.log("asasasas :", loginMember)
    if(loginMember==[]) {
        res.status(HttpStatus.UNAUTHORIZED).json({
            status: HttpStatus.UNAUTHORIZED,
            message: 'fail to sign in'
        })

    } else {
        const loginInfo = [loginMember[0], accessToken, refreshToken];
        console.log('asas', loginInfo)
        //const updateResults = await memberService.updateLoginMember(loginInfo);

        res.status(HttpStatus.OK).json({
            status: HttpStatus.OK,
            message: 'successfully sign in',
            result: loginInfo
        })
    }
    next();
    
};

exports.selectAllMembers = async (req, res, next) => {
    
    const offset = req.body.offset;
    const limit = req.body.limit;

    const currentPage = [limit, offset];

    const members = await memberService.selectAllMembers(currentPage);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found all memebers',
        result: members
    })

    next();
};

exports.selectSearchMemberById = async (req, res, next) => {
    
    const memberId = req.body.id;
    console.log(memberId)
    const members = await memberService.selectSearchMemberById(memberId);

    res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully found a memeber by id',
        result: members
    })

    next();
};

exports.insertMember = async (req, res, next) => {
    
    const memberId = req.body.id;
    const memberPassword = req.body.password;
    const memberName = req.body.name;
    const memberAge = req.body.age;

    const member = new MemberDTO({"id": memberId, "password": memberPassword, "name": memberName, "age": memberAge});
    //console.log('memberaaaaaaaaa', member)
    
    const results = await memberService.insertMember(member);

    res.status(httpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully inserted a memeber',
        result: results
    })


    next();

};

exports.updateMember = async (req, res, next) => {
    
    const memberId = req.body.id;
    const memberPassword = req.body.password;

    const member = new MemberDTO({"id": memberId, "password": memberPassword, "name": "default", "age": 0});
    const results = await memberService.updateMember(member);

    res.status(httpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully updated a memeber',
        result: results
    })

    next();

};

exports.deleteMember = async (req, res, next) => {
    
    const memberId = req.body.id;

    const member = new MemberDTO({"id": memberId, "password": "default", "name": "default", "age": 0});
    const results = await memberService.deleteMember(member);

    res.status(httpStatus.OK).json({
        status: HttpStatus.OK,
        message: 'successfully deleted a memeber',
        result: results
    })

    next();

};