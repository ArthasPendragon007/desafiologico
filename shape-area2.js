const PI = Math.PI
function circleArea(raio) {
    return PI * raio * raio;
  }
const decionInput = process.argv[2];
const decionValue = shapeArea(decionInput)
  module.exports.circleArea = circleArea;
  module.exports.squareArea = function(lado) {
    return lado*lado
  };