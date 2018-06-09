import {IOperation} from  "./Operations";

export default abstract class OperationBase implements IOperation {
    abstract Calculate(x: number, y: number): number;
}