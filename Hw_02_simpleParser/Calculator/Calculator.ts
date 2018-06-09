import {OperationType, IOperation, OperationsFabric} from  "./../Operations/Operations";


export default class Calculator {

    // private operations: IOperation[];

    constructor() {
        for (let operationType in OperationType) {
            if (!Number(operationType)) {
                console.log(operationType);
            }
        }
        var x: IOperation | null =OperationsFabric.CreateOperation(OperationType.Addition);
    }

    public Calculate(expression: string):string {
        return "1";
    }
}
/*
function xxx(): void {


    let parserRegExps: RegExp[] = [
        new RegExp(/\d+[\*\/]\d+/),
        new RegExp(/\d+[-\+]\d+/)
    ];
 let parser : IParser = new Parser([], parserRegExps);
} */