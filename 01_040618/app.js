function GetText(s) {
    return 'hello ${s}';
}
var n = 1;
//GetText(n);
var content = document.getElementById("content");
content.innerText = "dfg";
var Color;
(function (Color) {
    Color[Color["qwe"] = 0] = "qwe";
    Color[Color["ad"] = 1] = "ad";
    Color[Color["sdfsd"] = 2] = "sdfsd";
})(Color || (Color = {}));
var color = Color.ad;
