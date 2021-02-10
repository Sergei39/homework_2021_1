'use strict';

const uniqArr = function (arr) {
    let result = [];
    arr.forEach(function(item) {
        if(result.indexOf(item) < 0) {
            result.push(item);
        }
    });

    return result;
};

const removeDoubleElem = function (str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length - 1; ++i) {
        let flag = false;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                --j;
                flag = true;
            }
        }

        if (flag) {
            arr.splice(i, 1);
                --i;
        }
    }
    return arr.join('');
};

const saveStartWord = function (str) {
    return uniqArr(str.split('')).join('');
}

const saveEndWord = function (str) {
    return uniqArr(str.split('').reverse()).reverse().join('');
}

const letters = function (str, format) {
    if (format === true) {
        return saveStartWord (str);
    }
    else if (format === false) {
        return saveEndWord (str);
    }
    else {
        return removeDoubleElem (str);
    }
}