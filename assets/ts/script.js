var User = (function () {
    function User(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    User.prototype.getInfo = function () {
        return "id1:" + this.id + " name:" + this.name;
    };
    return User;
}());
//# sourceMappingURL=script.js.map