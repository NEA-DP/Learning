import {OperationBase} from  "./Operations";

export default class DivisionOperation extends OperationBase {
    Calculate(x: number, y: number): number {
        return x / y;
    }
}