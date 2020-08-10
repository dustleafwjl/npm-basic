import { transform } from '../src/romanizer.js'

describe('calculator', () => {
    fit('should return X when transform 10', () => {
        const formatted = transform(10);

        expect(formatted).toEqual('X');
    });

});