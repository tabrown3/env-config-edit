"use strict";
process.stdin.setEncoding('utf8');
var cb;
process.stdin.on('data', function (text) {
    process.stdin.pause();
    cb(text.trim());
});
class InputService {
}
InputService.OnInput = () => {
    return new Promise(resolve => {
        InputService.OnInputCb(resolve);
    });
};
InputService.OnInputCb = (inCb) => {
    process.stdin.resume();
    cb = inCb;
};
exports.InputService = InputService;
//# sourceMappingURL=InputService.js.map