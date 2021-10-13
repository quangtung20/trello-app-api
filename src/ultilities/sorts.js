/**
 * @param {*} array
 * @param {*} order
 * @param {*} key 
 * @returns 
 */
const mapOrder = (array, order, key) => {
    array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));
    return array;
}
const mapOrder2 = (array, order, key) => {
    array.sort((a, b) => order.indexOf(a[key]) - order.indexOf(b[key]));
    return array;
}


module.exports = { mapOrder, mapOrder2 };