import {OperationBase} from  "./Operations";

export default class SubtractionOperation extends OperationBase {
    Calculate(x: number, y: number): number {
        return x - y;
    }
}