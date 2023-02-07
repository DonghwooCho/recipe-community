exports.selectAllProducts = () => {

    return `
        SELECT
               A.board_code
             , A.board_title
             , A.board_content
             , A.board_owner
             , A.board_date
          FROM board A
         ORDER BY A.board_code DESC
    `;
}

exports.selectSearchProducts = () => {

    return `
        SELECT
               A.board_code
             , A.board_title
             , A.board_content
             , A.board_owner
             , A.board_date
          FROM board A
         WHERE A.board_title like ?
         ORDER BY A.board_code DESC
         LIMIT ?
        OFFSET ?

    `;
}

exports.selectSearchAllProducts = () => {

    return `
        SELECT
               A.board_code
             , A.board_title
             , A.board_content
             , A.board_owner
             , A.board_date
          FROM board A
         WHERE A.board_title like ?
         ORDER BY A.board_code DESC

    `;
}

exports.selectOneProduct = () => {

    return `
        SELECT
               A.board_code
             , A.board_title
             , A.board_content
             , A.board_owner
             , A.board_date
          FROM board A
         WHERE A.board_code = ?
         ORDER BY A.board_code DESC
    `;
}

exports.insertProduct = () => {

    return `
        INSERT
          INTO board(board_title, board_content, board_owner, board_date)
        VALUES (?, ?, ?, date_format(now(), '%Y-%m-%d'))
    `;
}