"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VHDLFormatter_1 = require("./VHDLFormatter");
const VHDLFormatter_2 = require("./VHDLFormatter");
const VHDLFormatter_3 = require("./VHDLFormatter");
const VHDLFormatter_4 = require("./VHDLFormatter");
const VHDLFormatter_5 = require("./VHDLFormatter");
const VHDLFormatter_6 = require("./VHDLFormatter");
const VHDLFormatter_7 = require("./VHDLFormatter");
const VHDLFormatter_8 = require("./VHDLFormatter");
const VHDLFormatter_9 = require("./VHDLFormatter");
const VHDLFormatter_10 = require("./VHDLFormatter");
let testCount = 0;
var showUnitTests = true; //window.location.href.indexOf("http") < 0;
if (showUnitTests) {
    testCount = 0;
    IntegrationTest();
    UnitTestIndentDecode();
    UnitTestRemoveAsserts();
    UnitTestApplyNoNewLineAfter();
    UnitTestSetNewLinesAfterSymbols();
    UnitTestFormattedLineToString();
    UnitTestbeautify3();
    console.log("total tests: " + testCount);
}
function UnitTestFormattedLineToString() {
    console.log("=== FormattedLineToString ===");
    FormattedLineToStringCase1();
    FormattedLineToStringCase2();
}
function FormattedLineToStringCase1() {
    let inputs = [
        new VHDLFormatter_9.FormattedLine("a;", 0),
        new VHDLFormatter_9.FormattedLine("b;", 0)
    ];
    let expected = ["a;", "b;"];
    UnitTest7(VHDLFormatter_10.FormattedLineToString, "General", "    ", inputs, expected);
}
function FormattedLineToStringCase2() {
    let inputs = [
        new VHDLFormatter_9.FormattedLine("a;", 1),
        new VHDLFormatter_9.FormattedLine("b;", 2)
    ];
    let expected = [" a;", "  b;"];
    UnitTest7(VHDLFormatter_10.FormattedLineToString, "General", " ", inputs, expected);
}
function UnitTestbeautify3() {
    console.log("=== beautify3 ===");
    Beautify3Case1();
    Beautify3Case2();
    Beautify3Case3();
    Beautify3Case4();
    Beautify3Case5();
    Beautify3Case6();
    Beautify3Case7();
    Beautify3Case8();
    Beautify3Case9();
    Beautify3Case10();
    Beautify3Case11();
    Beautify3Case12();
    Beautify3Case13();
    Beautify3Case14();
}
function Beautify3Case1() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = ["a;", "b;"];
    let expected = [new VHDLFormatter_9.FormattedLine("a;", 0), new VHDLFormatter_9.FormattedLine("b;", 0)];
    UnitTest6(VHDLFormatter_8.beautify3, "General", settings, inputs, expected, 0, 1, 0);
}
function Beautify3Case2() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = ["IF x = '1' THEN", "RETURN 1;", "END IF;"];
    let expected = [
        new VHDLFormatter_9.FormattedLine("IF x = '1' THEN", 0),
        new VHDLFormatter_9.FormattedLine("RETURN 1;", 1),
        new VHDLFormatter_9.FormattedLine("END IF;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "IF END", settings, inputs, expected, 0, 2, 0);
}
function Beautify3Case3() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "IF x = '1' THEN",
        "RETURN 1;",
        "ELSIF x = '0' THEN",
        "RETURN 0;",
        "ELSE",
        "RETURN -1;",
        "END IF;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("IF x = '1' THEN", 0),
        new VHDLFormatter_9.FormattedLine("RETURN 1;", 1),
        new VHDLFormatter_9.FormattedLine("ELSIF x = '0' THEN", 0),
        new VHDLFormatter_9.FormattedLine("RETURN 0;", 1),
        new VHDLFormatter_9.FormattedLine("ELSE", 0),
        new VHDLFormatter_9.FormattedLine("RETURN -1;", 1),
        new VHDLFormatter_9.FormattedLine("END IF;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "if elsif else end", settings, inputs, expected, 0, 6, 0);
}
function Beautify3Case4() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = ["END"];
    let expected = [new VHDLFormatter_9.FormattedLine("END", 0)];
    UnitTest6(VHDLFormatter_8.beautify3, "one line END", settings, inputs, expected, 0, 0, 0);
}
function Beautify3Case5() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "CASE b",
        "WHEN 1 =>",
        "c <= d;",
        "WHEN 2 =>",
        "d <= f;",
        "END CASE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("CASE b", 0),
        new VHDLFormatter_9.FormattedLine("WHEN 1 =>", 1),
        new VHDLFormatter_9.FormattedLine("c <= d;", 2),
        new VHDLFormatter_9.FormattedLine("WHEN 2 =>", 1),
        new VHDLFormatter_9.FormattedLine("d <= f;", 2),
        new VHDLFormatter_9.FormattedLine("END CASE;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "case when when end", settings, inputs, expected, 0, 5, 0);
}
function Beautify3Case6() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "CASE b",
        "WHEN 1 =>",
        "c <= d;",
        "CASE b",
        "WHEN 1 =>",
        "c <= d;",
        "WHEN 2 =>",
        "d <= f;",
        "END CASE;",
        "WHEN 2 =>",
        "d <= f;",
        "END CASE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("CASE b", 0),
        new VHDLFormatter_9.FormattedLine("WHEN 1 =>", 1),
        new VHDLFormatter_9.FormattedLine("c <= d;", 2),
        new VHDLFormatter_9.FormattedLine("CASE b", 2),
        new VHDLFormatter_9.FormattedLine("WHEN 1 =>", 3),
        new VHDLFormatter_9.FormattedLine("c <= d;", 4),
        new VHDLFormatter_9.FormattedLine("WHEN 2 =>", 3),
        new VHDLFormatter_9.FormattedLine("d <= f;", 4),
        new VHDLFormatter_9.FormattedLine("END CASE;", 2),
        new VHDLFormatter_9.FormattedLine("WHEN 2 =>", 1),
        new VHDLFormatter_9.FormattedLine("d <= f;", 2),
        new VHDLFormatter_9.FormattedLine("END CASE;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "case & case end", settings, inputs, expected, 0, 11, 0);
}
function Beautify3Case7() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "ARCHITECTURE a OF one IS",
        "SIGNAL x : INTEGER;",
        "BEGIN",
        "-- architecture",
        "END ARCHITECTURE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("ARCHITECTURE a OF one IS", 0),
        new VHDLFormatter_9.FormattedLine("SIGNAL x : INTEGER;", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 0),
        new VHDLFormatter_9.FormattedLine("-- architecture", 1),
        new VHDLFormatter_9.FormattedLine("END ARCHITECTURE;", 0),
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "architecture", settings, inputs, expected, 0, 4, 0);
}
function Beautify3Case8() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "ARCHITECTURE a OF one IS",
        "SIGNAL x : INTEGER;",
        "BEGIN",
        "-- architecture",
        "END ARCHITECTURE;",
        "ARCHITECTURE b OF one IS",
        "SIGNAL x : INTEGER;",
        "BEGIN",
        "-- architecture",
        "END ARCHITECTURE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("ARCHITECTURE a OF one IS", 0),
        new VHDLFormatter_9.FormattedLine("SIGNAL x : INTEGER;", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 0),
        new VHDLFormatter_9.FormattedLine("-- architecture", 1),
        new VHDLFormatter_9.FormattedLine("END ARCHITECTURE;", 0),
        new VHDLFormatter_9.FormattedLine("ARCHITECTURE b OF one IS", 0),
        new VHDLFormatter_9.FormattedLine("SIGNAL x : INTEGER;", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 0),
        new VHDLFormatter_9.FormattedLine("-- architecture", 1),
        new VHDLFormatter_9.FormattedLine("END ARCHITECTURE;", 0),
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "architecture 2", settings, inputs, expected, 0, 9, 0);
}
function Beautify3Case9() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "PROCEDURE foo(x : IN INTEGER; y : OUT INTEGER) IS",
        "VARIABLE i : INTEGER;",
        "BEGIN",
        "y := x + 1;",
        "END PROCEDURE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("PROCEDURE foo(x : IN INTEGER; y : OUT INTEGER) IS", 0),
        new VHDLFormatter_9.FormattedLine("VARIABLE i : INTEGER;", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 0),
        new VHDLFormatter_9.FormattedLine("y := x + 1;", 1),
        new VHDLFormatter_9.FormattedLine("END PROCEDURE;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "procedure", settings, inputs, expected, 0, 4, 0);
}
function Beautify3Case10() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "PACKAGE three IS",
        "SIGNAL s : INTEGER;",
        "ALIAS sa IS s;",
        "END PACKAGE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("PACKAGE three IS", 0),
        new VHDLFormatter_9.FormattedLine("SIGNAL s : INTEGER;", 1),
        new VHDLFormatter_9.FormattedLine("ALIAS sa IS s;", 1),
        new VHDLFormatter_9.FormattedLine("END PACKAGE;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "package", settings, inputs, expected, 0, 3, 0);
}
function Beautify3Case11() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "PACKAGE p IS",
        "PROCEDURE foo(x : IN INTEGER; y : OUT INTEGER);",
        "END PACKAGE;",
        "PACKAGE BODY p IS",
        "PROCEDURE foo(x : IN INTEGER; y : OUT INTEGER) IS",
        "VARIABLE i : INTEGER;",
        "BEGIN",
        "y := x + 1;",
        "END PROCEDURE;",
        "PROCEDURE bar(FILE x : text);",
        "PROCEDURE baz IS",
        "TYPE foo;",
        "ALIAS x IS y;",
        "BEGIN",
        "END PROCEDURE;",
        "PROCEDURE tralala IS",
        "USE work.foo;",
        "BEGIN",
        "END PROCEDURE;",
        "END PACKAGE BODY;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("PACKAGE p IS", 0),
        new VHDLFormatter_9.FormattedLine("PROCEDURE foo(x : IN INTEGER; y : OUT INTEGER);", 1),
        new VHDLFormatter_9.FormattedLine("END PACKAGE;", 0),
        new VHDLFormatter_9.FormattedLine("PACKAGE BODY p IS", 0),
        new VHDLFormatter_9.FormattedLine("PROCEDURE foo(x : IN INTEGER; y : OUT INTEGER) IS", 1),
        new VHDLFormatter_9.FormattedLine("VARIABLE i : INTEGER;", 2),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("y := x + 1;", 2),
        new VHDLFormatter_9.FormattedLine("END PROCEDURE;", 1),
        new VHDLFormatter_9.FormattedLine("PROCEDURE bar(FILE x : text);", 1),
        new VHDLFormatter_9.FormattedLine("PROCEDURE baz IS", 1),
        new VHDLFormatter_9.FormattedLine("TYPE foo;", 2),
        new VHDLFormatter_9.FormattedLine("ALIAS x IS y;", 2),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("END PROCEDURE;", 1),
        new VHDLFormatter_9.FormattedLine("PROCEDURE tralala IS", 1),
        new VHDLFormatter_9.FormattedLine("USE work.foo;", 2),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("END PROCEDURE;", 1),
        new VHDLFormatter_9.FormattedLine("END PACKAGE BODY;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "package procedure", settings, inputs, expected, 0, expected.length - 1, 0);
}
function Beautify3Case12() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "ARCHITECTURE a OF b IS",
        "SIGNAL x : INTEGER := 0;",
        "BEGIN",
        "p: PROCESS IS",
        "BEGIN",
        "END PROCESS;",
        "PROCESS",
        "VARIABLE y : INTEGER := 5;",
        "BEGIN",
        "x <= y;",
        "END PROCESS;",
        "PROCESS (x) IS",
        "BEGIN",
        "x <= x + 1;",
        "END PROCESS;",
        "POSTPONED PROCESS IS",
        "BEGIN",
        "END PROCESS;",
        "POSTPONED assert x = 1;",
        "END ARCHITECTURE;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("ARCHITECTURE a OF b IS", 0),
        new VHDLFormatter_9.FormattedLine("SIGNAL x : INTEGER := 0;", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 0),
        new VHDLFormatter_9.FormattedLine("p: PROCESS IS", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("END PROCESS;", 1),
        new VHDLFormatter_9.FormattedLine("PROCESS", 1),
        new VHDLFormatter_9.FormattedLine("VARIABLE y : INTEGER := 5;", 2),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("x <= y;", 2),
        new VHDLFormatter_9.FormattedLine("END PROCESS;", 1),
        new VHDLFormatter_9.FormattedLine("PROCESS (x) IS", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("x <= x + 1;", 2),
        new VHDLFormatter_9.FormattedLine("END PROCESS;", 1),
        new VHDLFormatter_9.FormattedLine("POSTPONED PROCESS IS", 1),
        new VHDLFormatter_9.FormattedLine("BEGIN", 1),
        new VHDLFormatter_9.FormattedLine("END PROCESS;", 1),
        new VHDLFormatter_9.FormattedLine("POSTPONED assert x = 1;", 1),
        new VHDLFormatter_9.FormattedLine("END ARCHITECTURE;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "package postponed procedure", settings, inputs, expected, 0, expected.length - 1, 0);
}
function Beautify3Case13() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "TYPE SharedCounter IS PROTECTED",
        "PROCEDURE increment (N : INTEGER := 1);",
        "IMPURE FUNCTION value RETURN INTEGER;",
        "END PROTECTED SharedCounter;"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("TYPE SharedCounter IS PROTECTED", 0),
        new VHDLFormatter_9.FormattedLine("PROCEDURE increment (N : INTEGER := 1);", 1),
        new VHDLFormatter_9.FormattedLine("IMPURE FUNCTION value RETURN INTEGER;", 1),
        new VHDLFormatter_9.FormattedLine("END PROTECTED SharedCounter;", 0)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "type projected", settings, inputs, expected, 0, expected.length - 1, 0);
}
function Beautify3Case14() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let inputs = [
        "PACKAGE p IS",
        "TYPE SharedCounter IS PROTECTED",
        "PROCEDURE increment (N : INTEGER := 1);",
        "IMPURE FUNCTION value RETURN INTEGER;",
        "END PROTECTED SharedCounter;",
        "TYPE SharedCounter IS PROTECTED BODY"
    ];
    let expected = [
        new VHDLFormatter_9.FormattedLine("PACKAGE p IS", 0),
        new VHDLFormatter_9.FormattedLine("TYPE SharedCounter IS PROTECTED", 1),
        new VHDLFormatter_9.FormattedLine("PROCEDURE increment (N : INTEGER := 1);", 2),
        new VHDLFormatter_9.FormattedLine("IMPURE FUNCTION value RETURN INTEGER;", 2),
        new VHDLFormatter_9.FormattedLine("END PROTECTED SharedCounter;", 1),
        new VHDLFormatter_9.FormattedLine("TYPE SharedCounter IS PROTECTED BODY", 1)
    ];
    UnitTest6(VHDLFormatter_8.beautify3, "type projected", settings, inputs, expected, 0, expected.length - 1, 0);
}
function UnitTestSetNewLinesAfterSymbols() {
    console.log("=== SetNewLinesAfterSymbols ===");
    let input = "a; @@comments1\r\nb;";
    let expected = "a; @@comments1\r\nb;";
    let parameters = new VHDLFormatter_3.NewLineSettings();
    parameters.newLineAfter = ["then", ";"];
    parameters.noNewLineAfter = ["port", "generic"];
    UnitTest5(VHDLFormatter_7.SetNewLinesAfterSymbols, "no new line after comment", parameters, input, expected);
    input = "a; b;";
    expected = "a;\r\nb;";
    UnitTest5(VHDLFormatter_7.SetNewLinesAfterSymbols, "new line after ;", parameters, input, expected);
}
function UnitTestApplyNoNewLineAfter() {
    console.log("=== ApplyNoNewLineAfter ===");
    let input = ["a;", "b;"];
    let expected = ["a;@@singleline", "b;@@singleline"];
    let parameters = [";"];
    UnitTest4(VHDLFormatter_6.ApplyNoNewLineAfter, "one blankspace", parameters, input, expected);
    input = ["a;", "b THEN", "c"];
    expected = ["a;@@singleline", "b THEN@@singleline", "c"];
    parameters = [";", "then"];
    UnitTest4(VHDLFormatter_6.ApplyNoNewLineAfter, "one blankspace", parameters, input, expected);
}
function UnitTestRemoveAsserts() {
    console.log("=== RemoveAsserts ===");
    let input = ["ASSERT a;"];
    let expected = [""];
    UnitTest3(VHDLFormatter_5.RemoveAsserts, "one assert", input, expected);
    input = ["ASSERT a", "b;", "c"];
    expected = ["", "", "c"];
    UnitTest3(VHDLFormatter_5.RemoveAsserts, "multiline assert", input, expected);
}
function UnitTestIndentDecode() {
    console.log("=== IndentDecode ===");
    UnitTest2(VHDLFormatter_2.indentDecode, "one blankspace", " ", "one blankspace");
    UnitTest2(VHDLFormatter_2.indentDecode, "mixed chars", " A ", "one blankspace & one A & one blankspace");
    UnitTest2(VHDLFormatter_2.indentDecode, "4 blankspaces", "    ", "four blankspace");
    UnitTest2(VHDLFormatter_2.indentDecode, "9 blankspaces", "         ", "many blankspace");
}
function compareFormattedLines(expected, actual, message) {
    var l = Math.min(actual.length, expected.length);
    let result = "";
    for (var i = 0; i < l; i++) {
        if (actual[i] instanceof VHDLFormatter_9.FormattedLine) {
            if (expected[i] instanceof VHDLFormatter_9.FormattedLine) {
                let compareResult = compareFormattedLine((expected[i]), (actual[i]), message, false);
                if (compareResult.length > 0) {
                    result += "index " + i + "\n" + compareResult;
                }
            }
            else {
                result += "index " + i + "\nexpected FormatLine[], actual FormattedLine. actual:" + (actual[i]).Line;
            }
        }
        else {
            if (expected[i] instanceof VHDLFormatter_9.FormattedLine) {
                result += "index " + i + "\nexpected FormatLine, actual FormattedLine[]. expected:" + (expected[i]).Line;
            }
            else {
                let compareResult = compareFormattedLines((actual[i]), (expected[i]), message);
                if (compareResult.length > 0) {
                    result += "index " + i + "\n" + compareResult;
                }
            }
        }
    }
    if (actual.length > expected.length) {
        result += "actual has more items";
        for (var i = expected.length; i < actual.length; i++) {
            result += "actual[" + i + "] = " + actual[i];
        }
    }
    else if (actual.length < expected.length) {
        result += "expected has more items";
        for (var i = actual.length; i < expected.length; i++) {
            result += "expected[" + i + "] = " + expected[i];
        }
    }
    return result;
}
function assertFormattedLines(testName, expected, actual, message) {
    let result = compareFormattedLines(expected, actual, message);
    if (result.length > 0) {
        console.log(testName + " failed:\n" + result);
    }
    testCount++;
}
function compareFormattedLine(expected, actual, message, cumulateTestCount) {
    let result = "";
    if (expected.Indent != actual.Indent) {
        result += 'indents are not equal;\nexpected: "' + expected.Line + '", ' + expected.Indent
            + ';\nactual: "' + actual.Line + '", ' + actual.Indent + "\n";
    }
    let compareResult = CompareString(actual.Line, expected.Line);
    if (compareResult != true) {
        result += compareResult;
    }
    return result;
}
function assert(testName, expected, actual, message) {
    var result = CompareString(actual, expected);
    if (result != true) {
        console.log(testName + " failed: \n" + result);
    }
    else {
        //console.log(testName + " pass");
    }
    testCount++;
}
function assertArray(testName, expected, actual, message) {
    var result = CompareArray(actual, expected);
    if (result != true) {
        console.log(testName + " failed: " + result);
    }
    else {
        //console.log(testName + " pass");
    }
    testCount++;
}
function UnitTest7(func, testName, indentation, inputs, expected) {
    let actual = func(inputs, indentation);
    assertArray(testName, expected, actual);
}
function UnitTest6(func, testName, parameters, inputs, expected, startIndex, expectedEndIndex, indent) {
    let actual = [];
    let endIndex = func(inputs, actual, parameters, startIndex, indent);
    if (endIndex != expectedEndIndex) {
        console.log(testName + " failed;\nend index, actual: " + endIndex + "; expected: " + expectedEndIndex);
    }
    assertFormattedLines(testName, expected, actual);
}
function UnitTest5(func, testName, parameters, inputs, expected) {
    let actual = func(inputs, parameters);
    assert(testName, expected, actual);
}
function UnitTest4(func, testName, parameters, inputs, expected) {
    let actual = JSON.parse(JSON.stringify(inputs));
    func(actual, parameters);
    assertArray(testName, expected, actual);
}
function UnitTest3(func, testName, inputs, expected) {
    let actual = JSON.parse(JSON.stringify(inputs));
    func(actual);
    assertArray(testName, expected, actual);
}
function UnitTest2(func, testName, inputs, expected) {
    let actual = func(inputs);
    assert(testName, expected, actual);
}
function deepCopy(objectToCopy) {
    return (JSON.parse(JSON.stringify(objectToCopy)));
}
function IntegrationTest() {
    console.log("=== IntegrationTests ===");
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["port", "generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let input = "architecture TB of TB_CPU is\r\n    component CPU_IF\r\n    port   -- port list\r\n    end component;\r\n    signal CPU_DATA_VALID: std_ulogic;\r\n    signal CLK, RESET: std_ulogic := '0';\r\n    constant PERIOD : time := 10 ns;\r\n    constant MAX_SIM: time := 50 * PERIOD;\r\n    begin\r\n    -- concurrent statements\r\n    end TB;";
    let expected = "ARCHITECTURE TB OF TB_CPU IS\r\n    COMPONENT CPU_IF\r\n        PORT -- port list\r\n    END COMPONENT;\r\n    SIGNAL CPU_DATA_VALID : std_ulogic;\r\n    SIGNAL CLK, RESET : std_ulogic := '0';\r\n    CONSTANT PERIOD : TIME := 10 ns;\r\n    CONSTANT MAX_SIM : TIME := 50 * PERIOD;\r\nBEGIN\r\n    -- concurrent statements\r\nEND TB;";
    let actual = VHDLFormatter_1.beautify(input, settings);
    assert("General", expected, actual);
    IntegrationTest2();
    let new_line_after_symbols_2 = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols_2.newLineAfter = [];
    new_line_after_symbols_2.noNewLineAfter = ["then", ";", "generic", "port"];
    let newSettings = deepCopy(settings);
    newSettings.NewLineSettings = new_line_after_symbols_2;
    expected = "a; b; c;";
    input = "a; \r\nb;\r\n c;";
    actual = VHDLFormatter_1.beautify(input, newSettings);
    assert("Remove line after ;", expected, actual);
    newSettings = deepCopy(settings);
    newSettings.RemoveAsserts = true;
    input = "architecture arch of ent is\r\nbegin\r\n    assert False report sdfjcsdfcsdj;\r\n    assert False report sdfjcsdfcsdj severity note;\r\nend architecture;";
    expected = "ARCHITECTURE arch OF ent IS\r\nBEGIN\r\nEND ARCHITECTURE;";
    actual = VHDLFormatter_1.beautify(input, newSettings);
    assert("Remove asserts", expected, actual);
    input = "entity TB_DISPLAY is\r\n-- port declarations\r\nend TB_DISPLAY;\r\n\r\narchitecture TEST of TB_DISPLAY is\r\n-- signal declarations\r\nbegin\r\n-- component instance(s)\r\nend TEST;";
    expected = "ENTITY TB_DISPLAY IS\r\n    -- port declarations\r\nEND TB_DISPLAY;\r\n\r\nARCHITECTURE TEST OF TB_DISPLAY IS\r\n    -- signal declarations\r\nBEGIN\r\n    -- component instance(s)\r\nEND TEST;";
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("ENTITY ARCHITECTURE", expected, actual);
    IntegrationTest5();
    IntegrationTest6();
    IntegrationTest7();
    input = 'if a(3 downto 0) > "0100" then\r\na(3 downto 0) := a(3 downto 0) + "0011" ;\r\nend if ;';
    expected = 'IF a(3 DOWNTO 0) > "0100" THEN\r\n    a(3 DOWNTO 0) := a(3 DOWNTO 0) + "0011";\r\nEND IF;';
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("IF END IF case 1", expected, actual);
    input = "if s = '1' then\r\no <= \"010\";\r\nelse\r\no <= \"101\";\r\nend if;";
    expected = "IF s = '1' THEN\r\n    o <= \"010\";\r\nELSE\r\n    o <= \"101\";\r\nEND IF;";
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("IF ELSE END IF case 1", expected, actual);
    newSettings = deepCopy(settings);
    newSettings.NewLineSettings.newLineAfter.push("ELSE");
    input = "IF (s = r) THEN rr := '0'; ELSE rr := '1'; END IF;";
    expected = "IF (s = r) THEN\r\n    rr := '0';\r\nELSE\r\n    rr := '1';\r\nEND IF;";
    actual = VHDLFormatter_1.beautify(input, newSettings);
    assert("IF ELSE END IF case 2", expected, actual);
    input = 'P1:process\r\nvariable x: Integer range 1 to 3;\r\nvariable y: BIT_VECTOR (0 to 1);\r\nbegin\r\n  C1: case x is\r\n      when 1 => Out_1 <= 0;\r\n      when 2 => Out_1 <= 1;\r\n  end case C1;\r\n  C2: case y is\r\n      when "00" => Out_2 <= 0;\r\n      when "01" => Out_2 <= 1;\r\n  end case C2;\r\nend process;';
    expected = 'P1 : PROCESS\r\n    VARIABLE x : INTEGER RANGE 1 TO 3;\r\n    VARIABLE y : BIT_VECTOR (0 TO 1);\r\nBEGIN\r\n    C1 : CASE x IS\r\n        WHEN 1 => Out_1 <= 0;\r\n        WHEN 2 => Out_1 <= 1;\r\n    END CASE C1;\r\n    C2 : CASE y IS\r\n        WHEN "00" => Out_2 <= 0;\r\n        WHEN "01" => Out_2 <= 1;\r\n    END CASE C2;\r\nEND PROCESS;';
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("WHEN CASE", expected, actual);
    input = "case READ_CPU_STATE is\r\n  when WAITING =>\r\n    if CPU_DATA_VALID = '1' then\r\n      CPU_DATA_READ  <= '1';\r\n      READ_CPU_STATE <= DATA1;\r\n    end if;\r\n  when DATA1 =>\r\n    -- etc.\r\nend case;";
    expected = "CASE READ_CPU_STATE IS\r\n    WHEN WAITING =>\r\n        IF CPU_DATA_VALID = '1' THEN\r\n            CPU_DATA_READ <= '1';\r\n            READ_CPU_STATE <= DATA1;\r\n        END IF;\r\n    WHEN DATA1 =>\r\n        -- etc.\r\nEND CASE;";
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("WHEN CASE & IF", expected, actual);
    input = "entity aa is\r\n    port (a : in std_logic;\r\n          b : in std_logic;\r\n         );\r\nend aa;\r\narchitecture bb of aa is\r\n   component cc\r\n    port(\r\n         a : in std_logic;\r\n         b : in std_logic;\r\n        );\r\n    end cc;\r\n\r\nbegin\r\n  C : cc port map (\r\n          long => a,\r\n          b => b\r\n        );\r\nend;";
    expected = "ENTITY aa IS\r\n    PORT (\r\n        a : IN std_logic;\r\n        b : IN std_logic;\r\n    );\r\nEND aa;\r\nARCHITECTURE bb OF aa IS\r\n    COMPONENT cc\r\n        PORT (\r\n            a : IN std_logic;\r\n            b : IN std_logic;\r\n        );\r\n    END cc;\r\n\r\nBEGIN\r\n    C : cc PORT MAP(\r\n        long => a,\r\n        b => b\r\n    );\r\nEND;";
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("PORT MAP", expected, actual);
    input = "entity aa is\r\n    port (a : in std_logic;\r\n          b : in std_logic;\r\n         );\r\n    port (a : in std_logic;\r\n          b : in std_logic;\r\n         );\r\nend aa;\r\narchitecture bb of aa is\r\n   component cc\r\n    port(\r\n         a : in std_logic;\r\n         b : in std_logic;\r\n        );\r\n    port(\r\n         a : in std_logic;\r\n         b : in std_logic;\r\n        );\r\n    end cc;\r\n\r\nbegin\r\n  C : cc port map (\r\n          long => a,\r\n          b => b\r\n        );\r\n  D : cc port map (\r\n          long => a,\r\n          b => b\r\n        );\r\nend;";
    expected = "ENTITY aa IS\r\n    PORT (\r\n        a : IN std_logic;\r\n        b : IN std_logic;\r\n    );\r\n    PORT (\r\n        a : IN std_logic;\r\n        b : IN std_logic;\r\n    );\r\nEND aa;\r\nARCHITECTURE bb OF aa IS\r\n    COMPONENT cc\r\n        PORT (\r\n            a : IN std_logic;\r\n            b : IN std_logic;\r\n        );\r\n        PORT (\r\n            a : IN std_logic;\r\n            b : IN std_logic;\r\n        );\r\n    END cc;\r\n\r\nBEGIN\r\n    C : cc PORT MAP(\r\n        long => a,\r\n        b => b\r\n    );\r\n    D : cc PORT MAP(\r\n        long => a,\r\n        b => b\r\n    );\r\nEND;";
    actual = VHDLFormatter_1.beautify(input, settings);
    assert("Multiple PORT MAPs", expected, actual);
    input = "port (a : in std_logic;\r\n b : in std_logic;\r\n);";
    expected = "PORT\r\n(\r\n    a : IN std_logic;\r\n    b : IN std_logic;\r\n);";
    new_line_after_symbols_2 = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols_2.newLineAfter = ["then", ";", "generic", "port"];
    newSettings = deepCopy(settings);
    newSettings.NewLineSettings = new_line_after_symbols_2;
    actual = VHDLFormatter_1.beautify(input, newSettings);
    assert("New line after PORT", expected, actual);
    newSettings = deepCopy(settings);
    newSettings.NewLineSettings.newLineAfter = [];
    input = "component a is\r\nport( Data : inout Std_Logic_Vector(7 downto 0););\r\nend component a;";
    expected = "COMPONENT a IS\r\n    PORT (Data : INOUT Std_Logic_Vector(7 DOWNTO 0););\r\nEND COMPONENT a;";
    actual = VHDLFormatter_1.beautify(input, newSettings);
    assert("New line after PORT (single line)", expected, actual);
    //IntegrationTest20();
    input = "architecture a of b is\r\nbegin\r\n    process (w)\r\n    variable t : std_logic_vector (4 downto 0) ;\r\nbegin\r\n    a := (others => '0') ;\r\nend process ;\r\nend a;";
    expected = "ARCHITECTURE a OF b IS\r\nBEGIN\r\n    PROCESS (w)\r\n        VARIABLE t : std_logic_vector (4 DOWNTO 0);\r\n    BEGIN\r\n        a := (OTHERS => '0');\r\n    END PROCESS;\r\nEND a;";
    actual = VHDLFormatter_1.beautify(input, newSettings);
    assert("Double BEGIN", expected, actual);
    let newSettings2 = deepCopy(newSettings);
    newSettings2.SignAlignAll = true;
    newSettings2.NewLineSettings.newLineAfter = ["then", ";", "generic", "port"];
    newSettings2.NewLineSettings.noNewLineAfter = [];
    input = "entity a is\r\n    port ( w  : in  std_logic_vector (7 downto 0) ;\r\n           w_s : out std_logic_vector (3 downto 0) ; ) ;\r\nend a ;\r\narchitecture b of a is\r\nbegin\r\n    process ( w )\r\n    variable t : std_logic_vector (4 downto 0) ;\r\n    variable bcd     : std_logic_vector (11 downto 0) ;\r\nbegin\r\n    b(2 downto 0) := w(7 downto 5) ;\r\n    t         := w(4 downto 0) ;\r\n    w_s <= b(11 downto 8) ;\r\n    w <= b(3  downto 0) ;\r\nend process ;\r\nend b ;";
    expected = "ENTITY a IS\r\n    PORT\r\n    (\r\n        w   : IN std_logic_vector (7 DOWNTO 0);\r\n        w_s : OUT std_logic_vector (3 DOWNTO 0);\r\n    );\r\nEND a;\r\nARCHITECTURE b OF a IS\r\nBEGIN\r\n    PROCESS (w)\r\n        VARIABLE t   : std_logic_vector (4 DOWNTO 0);\r\n        VARIABLE bcd : std_logic_vector (11 DOWNTO 0);\r\n    BEGIN\r\n        b(2 DOWNTO 0) := w(7 DOWNTO 5);\r\n        t             := w(4 DOWNTO 0);\r\n        w_s <= b(11 DOWNTO 8);\r\n        w   <= b(3 DOWNTO 0);\r\n    END PROCESS;\r\nEND b;";
    actual = VHDLFormatter_1.beautify(input, newSettings2);
    assert("Align signs in all places", expected, actual);
}
function IntegrationTest20() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    let input = "process xyx (vf,fr,\r\nde -- comment\r\n)";
    let expected = "PROCESS xyx (vf, fr, \r\n             de -- comment\r\n             )";
    let actual = VHDLFormatter_1.beautify(input, settings);
    assert("Align parameters in PROCESS", expected, actual);
}
function IntegrationTest5() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    settings.SignAlignRegional = true;
    let input = "port map(\r\ninput_1 => input_1_sig,\r\ninput_2 => input_2_sig,\r\noutput => output_sig\r\n);";
    let expected = "PORT MAP(\r\n    input_1 => input_1_sig,\r\n    input_2 => input_2_sig,\r\n    output  => output_sig\r\n);";
    let actual = VHDLFormatter_1.beautify(input, settings);
    assert("Sign align in PORT", expected, actual);
}
function IntegrationTest6() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";", "port map"];
    new_line_after_symbols.noNewLineAfter = ["generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    settings.SignAlignRegional = true;
    let input = "port map(\r\ninput_1 => input_1_sig,\r\ninput_2 => input_2_sig,\r\noutput => output_sig\r\n);";
    let expected = "PORT MAP\r\n(\r\n    input_1 => input_1_sig,\r\n    input_2 => input_2_sig,\r\n    output  => output_sig\r\n);";
    let actual = VHDLFormatter_1.beautify(input, settings);
    assert("Sign align in PORT & new line after MAP", expected, actual);
}
function IntegrationTest7() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    settings.SignAlignRegional = true;
    let input = "entity p is\r\n  generic\r\n  (\r\n    -- INCLK\r\n    INCLK0_INPUT_FREQUENCY  : natural;\r\n\r\n    -- CLK1\r\n    CLK1_DIVIDE_BY          : natural := 1;\r\n    CLK1_MULTIPLY_BY        : unnatural:= 1;\r\n    CLK1_PHASE_SHIFT        : string := \"0\"\r\n  );\r\n	port\r\n	(\r\n		inclk0	: in std_logic  := '0';\r\n		c0		    : out std_logic ;\r\n		c1		    : out std_logic \r\n	);\r\nEND pll;";
    let expected = "ENTITY p IS\r\n    GENERIC (\r\n        -- INCLK\r\n        INCLK0_INPUT_FREQUENCY : NATURAL;\r\n\r\n        -- CLK1\r\n        CLK1_DIVIDE_BY         : NATURAL   := 1;\r\n        CLK1_MULTIPLY_BY       : unnatural := 1;\r\n        CLK1_PHASE_SHIFT       : STRING    := \"0\"\r\n    );\r\n    PORT (\r\n        inclk0 : IN std_logic := '0';\r\n        c0     : OUT std_logic;\r\n        c1     : OUT std_logic\r\n    );\r\nEND pll;";
    let actual = VHDLFormatter_1.beautify(input, settings);
    assert("Sign align in PORT & GENERIC", expected, actual);
}
function IntegrationTest2() {
    let new_line_after_symbols = new VHDLFormatter_3.NewLineSettings();
    new_line_after_symbols.newLineAfter = ["then", ";"];
    new_line_after_symbols.noNewLineAfter = ["generic"];
    let settings = new VHDLFormatter_4.BeautifierSettings(false, false, false, false, false, "uppercase", "    ", new_line_after_symbols);
    settings.RemoveComments = true;
    let input = "architecture TB of TB_CPU is\r\n    component CPU_IF\r\n    port   -- port list\r\n    end component;\r\n    signal CPU_DATA_VALID: std_ulogic;\r\n    signal CLK, RESET: std_ulogic := '0';\r\n    constant PERIOD : time := 10 ns;\r\n    constant MAX_SIM: time := 50 * PERIOD;\r\n    begin\r\n    -- concurrent statements\r\n    end TB;";
    let expected = "ARCHITECTURE TB OF TB_CPU IS\r\n    COMPONENT CPU_IF\r\n        PORT\r\n    END COMPONENT;\r\n    SIGNAL CPU_DATA_VALID : std_ulogic;\r\n    SIGNAL CLK, RESET : std_ulogic := '0';\r\n    CONSTANT PERIOD : TIME := 10 ns;\r\n    CONSTANT MAX_SIM : TIME := 50 * PERIOD;\r\nBEGIN\r\nEND TB;";
    let actual = VHDLFormatter_1.beautify(input, settings);
    assert("Remove comments", expected, actual);
}
function CompareString(actual, expected) {
    var l = Math.min(actual.length, expected.length);
    for (var i = 0; i < l; i++) {
        if (actual[i] != expected[i]) {
            var toEnd = Math.min(i + 50, l);
            return '\ndifferent at ' + i.toString() +
                '\nactual: "\n' + actual.substring(i, toEnd) +
                '\nexpected: "\n' + expected.substring(i, toEnd) + '"\n---' +
                "\nactual (full): \n" + actual + "\n---" +
                "\nexpected (full): \n" + expected + "\n====\n";
        }
    }
    if (actual != expected) {
        return 'actual: \n"' + actual + '"\nexpected: \n"' + expected + '"';
    }
    return true;
}
function CompareArray(actual, expected) {
    var l = Math.min(actual.length, expected.length);
    let result = "";
    for (var i = 0; i < l; i++) {
        if (actual[i] != expected[i]) {
            result += CompareString(actual[i], expected[i]) + "\n";
        }
    }
    if (actual.length > expected.length) {
        result += "actual has more items";
        for (var i = expected.length; i < actual.length; i++) {
            result += "actual[" + i + "] = " + actual[i];
        }
    }
    else if (actual.length < expected.length) {
        result += "expected has more items";
        for (var i = actual.length; i < expected.length; i++) {
            result += "expected[" + i + "] = " + expected[i];
        }
    }
    return true;
}
//# sourceMappingURL=VHDLFormatterUnitTests.js.map