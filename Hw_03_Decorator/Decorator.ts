
function format(target: any, propertyKey: any): void {
    let _val: number = target[propertyKey];

    let get_n: () => number = (): number => {
        console.log(`getter. stored value: ${_val}`);
        console.log(`getter. will return 'stored value + 1'`);
        return _val + 1;
    };

    let set_n: (newVal: number) => void = (newVal: number): void => {
        console.log(`setter. argument: ${newVal}`);
        _val = newVal;
    };

    if (delete target[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: get_n,
            set: set_n
        });
    }
}


class Decorator {

    @format
    public n: number;


    UpdateNumber(value: number): void {
        this.n = value;
    }
}

let h: Decorator = new Decorator();

h.UpdateNumber(100);
console.log(h.n);
h.UpdateNumber(200);
console.log(h.n);