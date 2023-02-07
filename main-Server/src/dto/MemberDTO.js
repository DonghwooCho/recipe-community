class MemberDTO {

    id;
    password;
    name;
    age;
    accessToken;
    refreshToken;

    constructor(data) {
        this.id = data.id;
        this.password = data.password;
        this.name = data.name;
        this.age = data.age;
        this.accessToken = data.accesstoken;
        this.refreshToken = data.refreshtoken;
    }

}

module.exports = MemberDTO;