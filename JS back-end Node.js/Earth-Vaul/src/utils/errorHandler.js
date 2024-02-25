const { Mongoose } = require("mongoose")

exports.extractErrorMsgs = (error) => {
    const isInstanceOfMongoose = error instanceof Mongoose;

    if(isInstanceOfMongoose) {
        const errors = Object.values(error.errors);
        const msgs = errors.map((e) => e.message);
        return msgs;
    }
    if (error.errors) {
        const errors = Object.values(error.errors);
        const msgs = errors.map((e) => e.message);
        return msgs;
    }

    if (error.code === 11000) {
        return ['Email already exists!'];
    }

    return [error.message];
}