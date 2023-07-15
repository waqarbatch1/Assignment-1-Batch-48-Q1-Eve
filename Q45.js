function make_car(Manufacturer, Model, options) {
    var car = { Manufacturer: Manufacturer, Model: Model };
    if (options) {
        for (var key in options) {
            car[key] = options[key];
        }
    }
    return car;
}
var car = make_car('Cruse', 'Mehran', { color: 'cream', year: 2010 });
console.log(car);
