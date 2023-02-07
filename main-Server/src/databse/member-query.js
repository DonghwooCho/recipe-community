exports.selectMembers = () => {

    return `
        SELECT
               A.id
             , A.password
             , A.name
             , A.age
          FROM member A
    `;
}

exports.selectAllMembers = () => {

    return `
        SELECT
               A.id
             , A.password
             , A.name
             , A.age
          FROM member A
         LIMIT ?
        OFFSET ?
    `;
}

exports.selectMemberById = () => {

    return `
        SELECT
               A.id
             , A.password
             , A.name
             , A.age
          FROM member A
         WHERE A.id = ?  
    `;
}

exports.selectSearchMemberById = () => {

    return `
        SELECT
               A.id
             , A.password
             , A.name
             , A.age
          FROM member A
         WHERE A.id like ?
    `;
}

exports.updateLoginMember = () => {

    return `
        UPDATE member
           SET accesstoken = ?, refreshtoken = ?
         WHERE id = ?
    `;
}

exports.insertMember = () => {

    return `
        INSERT
          INTO member(ID, PASSWORD, NAME, AGE)
        VALUES (?, ?, ?, ?)
    `;
}

exports.updateMember = () => {

    return `
        UPDATE member
           SET password = ?
         WHERE id = ?
    `;
}

exports.deleteMember = () => {

    return `
        DELETE FROM member
         WHERE id = ?
    `;
}