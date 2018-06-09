import {OperationBase} from  "./Operations";

export default class MultiplicationOperation extends OperationBase {
    Calculate(x: number, y: number): number {
        return x * y;
    }
}