//Q45. Cars...
interface Car {
    Manufacturer: string;
    Model: string;
    [key: string]: string | number;
}

function make_car(Manufacturer: string, Model: string, options?: { [key: string]: string | number }): Car {
    let car: Car = { Manufacturer, Model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
    }
    return car;
}

let car = make_car('Cruse', 'Mehran', { color: 'cream', year: 2010 });
console.log(car);