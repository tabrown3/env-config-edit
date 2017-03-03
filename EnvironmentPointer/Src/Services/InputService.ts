import controllers = require('../Controllers');

//process.stdin.resume();
process.stdin.setEncoding('utf8');

// At the moment, only one callback can be triggered at a time;
//  TODO: move to pub/sub?
var cb: Function;

process.stdin.on('data', function (text: string) {
    process.stdin.pause();
    cb(text.trim());
});

export class InputService {

    public static OnInput = (): Promise<string> => {

        return new Promise(resolve => {
            InputService.OnInputCb(resolve);
        });
    };

    private static OnInputCb = (inCb: Function): void => {
        process.stdin.resume();
        cb = inCb;
    }
}