const {circleArea, squareArea} = require('./shape-Area');
const convert = {circleArea, squareArea};

const decionInput = process.argv[1];
const decionValue = shapeArea(decionInput);

if (decionValue == 1){
    const raio = process.argv[2];
    const raioValue = raioArea(raio);
    circleArea(raioValue)
}
else if (decionValue == 2) {
    const lado = process.argv[3];
    const ladoValue = area(lado);
    squareArea()
}