export default class Unauthorized extends Error {
    constructor(message) {
        super(message)
        this.status = 401
    }
}