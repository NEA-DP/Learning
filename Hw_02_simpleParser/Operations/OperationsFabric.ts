import {IOperation, OperationType} from  "./Operations";
import {AdditionOperation, SubtractionOperation, MultiplicationOperation, DivisionOperation} from  "./Operations";

export default class OperationsFabric {
    public static CreateOperation(operationType: OperationType): IOperation | null {
        switch (operationType) {
            case OperationType.Addition: return new AdditionOperation();
            case OperationType.Subtraction: return new SubtractionOperation();
            case OperationType.Multiplication: return new MultiplicationOperation();
            case OperationType.Division: return new DivisionOperation();
        }
        return null;
    }
}