import {OperationType, IOperation, OperationsFabric} from  "./../Operations/Operations";
import IParser from "./IParser";

export default class Parser implements IParser {
    constructor(private expressions: RegExp[]) {

    }

  private static Calculate: (ex: string) => string = (ex: string): string => {
        let exParts: string[] = ex.split(/\b/);

        let ot: OperationType = OperationType[exParts[1]];

        let operation: IOperation = OperationsFabric.CreateOperation(ot);
        return operation.Calculate(parseFloat(exParts[0]), parseFloat(exParts[2])).toString();
    }



    public Parse(input: string): string {
        let expression: string = input;
        this.expressions.forEach (function (re: RegExp): void {
            let subResult: string = expression;
            let reR: RegExpExecArray | null = re.exec(subResult);
            while(reR != null) {
                let ex: string = reR[0];
                reR = re.exec(subResult);
                subResult = subResult.replace(ex, Parser.Calculate(ex));
            }
            expression = subResult;
        });

        return expression;
        }
    }