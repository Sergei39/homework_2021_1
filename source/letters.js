'use strict';

/**
 * Удаляет повторяющие символы из строки
 *
 * @param {String} str - исходная строка
 * @return {String} отформатированная строка
 */

const remove = (str) => {
    const arr = str.split('');
    for (let i = 0; i < arr.length - 1; ++i) {
        let flag = false;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i] === arr[j]) {
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

/**
 * Удаляет повторяющие символы из строки
 *
 * @param {String} str - исходная строка
 * @param {Boolean} type - флаг того, как преобразовать строку
 * @return {String} отформатированная строка
 */

const letters = (str, type) => {
    if (typeof str !== 'string') {
		/** @exception */
		throw new TypeError('wrong input');
    }
    
    if (typeof type === 'undefined') {
        return remove(str);
    }

    if (type === true) {
        const set = new Set(str.split(''));
        return Array.from(set).join('');
    }

    else {
        const set = new Set(str.split('').reverse());
        return Array.from(set).reverse().join('');
    }
};
