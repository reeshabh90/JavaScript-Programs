function lengthofSide(x1, x2, y1, y2) {
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a * a + b * b);
    return c;
}

function getTriangleArea(x, y) {
    // Write your code here
    const side1 = lengthofSide(x[0], x[1], y[0], y[1]);
    const side2 = lengthofSide(x[0], x[2], y[0], y[2]);
    const side3 = lengthofSide(x[1], x[2], y[1], y[2]);

    calculateArea(side1,side2,side3);
}

function calculateArea(side1, side2, side3) {
    var p = (side1 + side2 + side3) / 2;
    var a = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
    return a;
}

getTriangleArea([0,3,6], [0,3,0])