import {IOperation, OperationType} from  "./Operations";
import {AdditionOperation, SubtractionOperation, MultiplicationOperation, DivisionOperation} from  "./Operations";

export default class OperationsFabric {
    public static CreateOperation(operationType: OperationType): IOperation {
        switch (operationType) {
            case OperationType["+"]: return new AdditionOperation();
            case OperationType["-"]: return new SubtractionOperation();
            case OperationType["*"]: return new MultiplicationOperation();
            case OperationType["/"]: return new DivisionOperation();
        }
    }
}