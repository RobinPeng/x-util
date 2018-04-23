exports.isArray = object => {
    return Array.isArray(object)
}

exports.isBoolean = object => {
    return typeof object === 'boolean'
}

exports.isBuffer = object => {
    return Buffer.isBuffer(object)
}

exports.isDate = object => {
    return objectToString(object) === '[object Date]'
}

exports.isError = object => {
    return objectToString(object) === '[object Error]'
}

exports.isFunction = object => {
    return typeof object === 'function'
}

exports.isNull = object => {
    return object === null
}

exports.isNullOrUndefined = object => {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return object == null
}

exports.isNumber = object => {
    return typeof object === 'number'
}

exports.isObject = object => {
    return object !== null && typeof object === 'object'
}

exports.isPrimitive = object => {
    return (
        object === null ||
        typeof object === 'boolean' ||
        typeof object === 'number' ||
        typeof object === 'string' ||
        typeof object === 'symbol' ||
        typeof object === 'undefined'
    )
}

exports.isRegExp = object => {
    return objectToString(object) === '[object RegExp]'
}

exports.isString = object => {
    return typeof object === 'string'
}

exports.isSymbol = object => {
    return typeof object === 'symbol'
}

exports.isUndefined = object => {
    // eslint-disable-next-line no-void
    return object === void 0
}

function objectToString(object) {
    return Object.prototype.toString.call(object)
}
