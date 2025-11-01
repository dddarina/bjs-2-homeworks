function parseCount(number) {
    const result = Number.parseFloat(number);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    }
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if ((firstSide + secondSide) < thirdSide || (secondSide + thirdSide) < firstSide || (thirdSide + firstSide) < secondSide) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }

    get perimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide));
        return Number(area.toFixed(3));
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует";
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}