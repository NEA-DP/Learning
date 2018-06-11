import {OperationType, IOperation, OperationsFabric} from  "./../Operations/Operations";
import IParser from "../Parser/IParser";
import Parser from "../Parser/Parser";

export default class Calculator {

    private parser: IParser;

    constructor() {
        this.parser = new Parser(this.getRegExps());
    }

    public Calculate(expression: string):string {
        return `${expression} = ${this.parser.Parse(expression)}`;
    }


    private getRegExps(): RegExp[] {
        return [
            new RegExp(/\d+[\*\/]\d+/),
            new RegExp(/\d+[-\+]\d+/)
        ];
    }
}