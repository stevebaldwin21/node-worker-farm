module.exports = function (callback) {
    setTimeout(() => {
        callback();
    }, 10000);
}