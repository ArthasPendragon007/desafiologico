const PI = Math.PI//PI

module.exports.circleArea = function(raio){
    return PI * raio * raio

};

module.exports.squareArea = function(lado){
    return lado * lado

};
/*
const decionInput = process.argv[1];
const decionValue = shapeArea(decionInput)
if (decionValue == 1){
    const raio = process.argv[2]
    const raioValue = raioArea(raio)
    module.exports.circleArea = circleArea;
}
else if (decionValue == 2) {
    const lado = process.argv[3]
    const ladoValue = area(lado)
    module.exports.squareArea = squareArea;
*/


