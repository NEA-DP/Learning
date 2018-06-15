var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function format(target, propertyKey) {
    let _val = this[propertyKey];
    let get_n = () => {
        console.log(`getter. stored value: ${_val}`);
        console.log(`getter. will return 'stored value + 1'`);
        return _val + 1;
    };
    let set_n = (newVal) => {
        console.log(`setter. argument: ${newVal}`);
        _val = newVal;
    };
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: get_n,
            set: set_n
        });
    }
}
class Decorator {
    UpdateNumber(value) {
        this.n = value;
    }
}
__decorate([
    format
], Decorator.prototype, "n", void 0);
let h = new Decorator();
h.UpdateNumber(100);
console.log(h.n);
h.UpdateNumber(200);
console.log(h.n);
window.onload = () => { };
//# sourceMappingURL=app.js.map