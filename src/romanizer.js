
// const romanizer = require('romanizer')

import romanize from 'romanize'

export const transform = function (number) {
    return romanize(number);
}