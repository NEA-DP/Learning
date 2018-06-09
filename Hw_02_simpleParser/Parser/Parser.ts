/* import * as ops from "./../Operations";
module Parser {
    export class Parser implements IParser {
        constructor(private operations: IOperation[], private expressions: RegExp[]) {

        }

        // порядок регулярных выражений в массиве определяет приоритет операции
        private parserRegExps: RegExp[] = [
            new RegExp(/\d+[\*\/]\d+/),
            new RegExp(/\d+[-\+]\d+/)
        ];

        // расчет части выражения
        private Calculate: (ex: string) => string = (ex: string): string => {
            let exParts: string[] = ex.split(/\b/);
            return this.operations[exParts[1]](exParts[0], exParts[2]).toString();
        };

        Parse(input: string): string {
            let expression: string = input;
            this.parserRegExps.forEach (function (re: RegExp): void {
            let subResult: string = expression;
            let reR: RegExpExecArray | null = re.exec(subResult);
            while(reR != null) {
                let ex: string = reR[0];
                reR = re.exec(subResult);
                subResult = subResult.replace(ex, this.Calculate(ex));
            }
            expression = subResult;
        });

        return expression;
        }
    }
}
 */