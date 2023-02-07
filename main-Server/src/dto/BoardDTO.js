class BoardDTO {

    boardCode;
    boardTitle;
    boardContent;
    boardOwner;
    boardDate;

    constructor(data) {
        this.boardCode = data.board_code;
        this.boardTitle = data.board_title;
        this.boardContent = data.board_content;
        this.boardOwner = data.board_owner;
        this.boardDate = data.board_date;
    }

}

module.exports = BoardDTO;