(function(expressions: string[]){
    expressions.forEach(expression => {
        console.log(parseStr(expression));
    });
    
})(["1+2", "2+2*2", "1-6/2"]);

function parseStr(input: string): string{
    //реализация поддерживаемых операций
    const operations : any= {
        "*" : (x:string, y:string):number => { return parseFloat(x) * parseFloat(y) },
        "/" : (x:string, y:string):number => { return parseFloat(x) / parseFloat(y) },
        "+" : (x:string, y:string):number => { return parseFloat(x) + parseFloat(y) },
        "-" : (x:string, y:string):number => { return parseFloat(x) - parseFloat(y) },
    };

    //порядок регулярных выражений в массиве определяет приоритет операции
    const parserRegExps: RegExp[] = [
        new RegExp(/\d+[\*\/]\d+/),
        new RegExp(/\d+[-\+]\d+/)
    ];

    //расчет части выражения
    let calculate = function (ex :string) :string {
        let exParts = ex.split(/\b/);
        return operations[exParts[1]](exParts[0], exParts[2]).toString();
    };

    let expression = input;
    parserRegExps.forEach (function (re : RegExp){
        let subResult = expression;
        let reR = re.exec(subResult);
        while(reR != null){
            let ex = reR[0];
            reR = re.exec(subResult);
            subResult = subResult.replace(ex, calculate(ex));
        }
        expression = subResult;
    });

    return expression;
}