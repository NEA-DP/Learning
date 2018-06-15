import {OperationBase} from  "./Operations";

export default class AdditionOperation extends OperationBase {
    Calculate(x: number, y: number): number {
        return x + y;
    }
}