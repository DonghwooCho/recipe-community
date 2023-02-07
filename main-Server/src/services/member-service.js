const getConnection = require("../databse/connection");
const memberRepository = require("../repositories/member-repository");

exports.selectLoginMember = () => {

    return new Promise((resolve, reject) => {
    
        const connection = getConnection();

        const results = memberRepository.selectLoginMember(connection);

        connection.end();

        resolve(results);
        
    });
}

exports.updateLoginMember = (loginInfo) => {

    return new Promise(async (resolve, reject) => {
    
        const connection = getConnection();
        connection.beginTransaction();

        try{

            const results = await memberRepository.updateLoginMember(connection, loginInfo);
            console.log('updateMember :', results)

            const updateMember = await memberRepository.selectMemberById(connection, loginInfo[0]);
            console.log('updateMember :', updateMember)

            connection.commit();
            console.log('commit successfully');
            resolve(updateMember);

        } catch(err) {

            connection.rollback();
            console.log('rollback successfully');

        } finally {

            connection.end();

        }
        
    });
}

//-------------------------------------------------------------------------------------

exports.selectAllMembers = (currentPage) => {

    return new Promise((resolve, reject) => {
    
        const connection = getConnection();

        const results = memberRepository.selectAllMembers(connection, currentPage);

        connection.end();

        resolve(results);
        
    });
}

exports.selectSearchMemberById = (memberId) => {

    return new Promise((resolve, reject) => {
    
        const connection = getConnection();

        const results = memberRepository.selectSearchMemberById(connection, memberId);

        connection.end();

        resolve(results);
        
    });
}

exports.findAllMembers = () => {

    return new Promise((resolve, reject) => {
    
        const connection = getConnection();

        const results = memberRepository.selectAllMembers(connection);

        connection.end();

        resolve(results);
        
    });
}

exports.insertMember = (member) => {

    return new Promise(async (resolve, reject) => {
    
        const connection = getConnection();
        connection.beginTransaction();

        try{

            const results = await memberRepository.insertMember(connection, member);
            console.log('insertMember :', results)

            const insertMember = await memberRepository.selectMemberById(connection, member);
            console.log('insertMember :', insertMember)

            connection.commit();
            
            console.log('commit successfully');
            resolve(insertMember);

        } catch(err) {

            connection.rollback;
            console.log('rollback successfully');

        } finally {

            connection.end();

        }
        
    });
}

exports.updateMember = (member) => {

    return new Promise(async (resolve, reject) => {
    
        const connection = getConnection();
        connection.beginTransaction();

        try{

            const results = await memberRepository.updateMember(connection, member);
            console.log('updateMember :', results)

            const insertMember = await memberRepository.selectMemberById(connection, member.id);
            console.log('insertMember :', insertMember)

            connection.commit();
            console.log('commit successfully');
            resolve(insertMember);

        } catch(err) {

            connection.rollback();
            console.log('rollback successfully');

        } finally {

            connection.end();

        }
        
    });
}

exports.deleteMember = (member) => {

    return new Promise(async (resolve, reject) => {
    
        const connection = getConnection();
        connection.beginTransaction();

        try{

            const results = await memberRepository.deleteMember(connection, member);
            console.log('deleteMember :', results)

            const insertMember = await memberRepository.selectMemberById(connection, results.insertId);
            console.log('insertMember :', insertMember)

            connection.commit();
            console.log('commit successfully');
            resolve(insertMember);

        } catch(err) {

            connection.rollback();
            console.log('rollback successfully');

        } finally {

            connection.end();

        }
        
    });
}