function car_details(manufacturer,model_name,...optionaldetail){
    this.manufacturer = manufacturer;
    this.model_name = model_name;
    this.optionaldetail = optionaldetail;
}
const car_details1 = new car_details("Ubaid","Mercedez Benz","red","Automatic");
console.log(car_details1);