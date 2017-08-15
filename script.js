function Phone(brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.battery = '2500mAh';
    this.origin = 'China';
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ', price is ' + this.price + '. ' + 'Standard battery ' + this.battery + ' Country of origin: ' + this.origin);
};

var iPhone6 = new Phone('Apple', '500USD', 'silver');
var galaxyS6 = new Phone('Samsung', '300EUR', 'black');
var onePlusOne = new Phone('One', '200PLN', 'gold');

iPhone6.printInfo();
galaxyS6.printInfo();
onePlusOne.printInfo();


