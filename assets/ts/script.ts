class User {

    id: number;
    name: string;
    constructor(userId: number, userName: string) {

        this.id = userId;
        this.name = userName;
    }
    getInfo(): string {
        return "id1:" + this.id + " name:" + this.name;
    }

}