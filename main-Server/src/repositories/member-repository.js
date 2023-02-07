const MemberDTO = require("../dto/memberDTO");
const memberQuery = require("../databse/member-query");

exports.selectLoginMember = (connection) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.selectMembers(),
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            const members = [];
            for(let i = 0; i < results.length; i++) {
                members.push(new MemberDTO(results[i]));
            }
            console.log(members)
            resolve(members);
        });
    });

};

exports.updateLoginMember = (connection, loginInfo) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.updateLoginMember(),
        [loginInfo[1], loginInfo[2], loginInfo[0].name],
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }
            console.log(results)
            resolve(results);
        });
    });

};


// -------------------------------------------------------------------
exports.selectAllMembers = (connection, currentPage) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.selectAllMembers(),
        [currentPage[0], currentPage[1]],
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            const members = [];
            for(let i = 0; i < results.length; i++) {
                members.push(new MemberDTO(results[i]));
            }
            console.log(members)
            resolve(members);
        });
    });

};

exports.selectMemberById = (connection, member) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.selectMemberById(member),
        [member.id],
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            resolve(results);
        });
    });

};

exports.selectSearchMemberById = (connection, memberId) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.selectSearchMemberById(),
        [`%${memberId}%`],
        (err, results, fields) => {

            if(err) {
                console.log('Error : ', err);
                reject(err);
            }

            console.log('results : ', results);

            const members = [];
            for(let i = 0; i < results.length; i++) {
                members.push(new MemberDTO(results[i]));
            }
            console.log(members)
            resolve(members);

        });
    });

};

exports.insertMember = (connection, member) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.insertMember(),
        [member.id, member.password, member.name, member.age],
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }
            console.log(results)
            resolve(results);
        });
    });

};

exports.updateMember = (connection, member) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.updateMember(),
        [member.id, member.password],
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }
            console.log(results)
            resolve(results);
        });
    });

};

exports.deleteMember = (connection, member) => {

    return new Promise((resolve, reject) => {

        connection.query(memberQuery.deleteMember(),
        [member.id],
        (err, results, fields) => {
            
            if(err) {
                console.log('Error : ', err);
                reject(err);
            }
            console.log(results)
            resolve(results);
        });
    });

};