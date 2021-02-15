'use strict';

/**
 * Удаляет повторяющие символы из строки
 *
 * @param {String} str - исходная строка
 * @return {String} отформатированная строка
 */

const remove = (str) => {
    const arr = str.split('');
    const result = arr.filter(elem => arr.indexOf(elem) === arr.lastIndexOf(elem));
    return result.join('');
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
