import Calculator from "./Calculator/Calculator";

(function main(): void {
    let c: Calculator = new Calculator();
    console.log(c.Calculate("1+2"));
    console.log(c.Calculate("2+2*2"));
    console.log(c.Calculate("1-6/2"));
})();