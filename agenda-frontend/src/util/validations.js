export const isNotEmpty = val => {
    return val.trim() !== '';
};

export const hasMinLength = (val, minLen) => {
    return val.length >= minLen;
};

export const hasMaxLength = (val,maxLen) => {
    return val.length <= maxLen;
}

export const hasNoNumbers = val => {
    return !/\d/.test(val);
}

export const hasOnlyNumbers = val => {
    return /^[0-9]+$/.test(val);
}