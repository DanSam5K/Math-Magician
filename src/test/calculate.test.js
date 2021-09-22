import calculate from "../logic/calculate";

test("AC button to clear output", () => {
   expect(calculate({total: '5', next: '7', operation: '+'}, 'AC')).toStrictEqual({total: null, next: null, operation: null});
})

test("Zero button to return empty output", () => {
   expect(calculate({total: null, next: '0', operation: null}, '0')).toStrictEqual({});
})

test("No Next value should empty output", () => {
   expect(calculate({total: '5', next: null, operation: null}, '=')).toStrictEqual({});
})

test("No operator and next value should return empty output", () => {
   expect(calculate({total: '5', next: null, operation: '÷'}, '=')).toStrictEqual({});
})

test("+/- sign should return null when no total or next value", () => {
   expect(calculate({total: null, next: null, operation: '÷'}, '+/-')).toStrictEqual({});
})

test("Plus sign should add number", () => {
   expect(calculate({total: '5', next: '5', operation: '+'}, '=')).toStrictEqual({total: '10', next: null, operation: null});
})

test("Minus sign should subtract number", () => {
   expect(calculate({total: '10', next: '5', operation: '-'}, '=')).toStrictEqual({total: '5', next: null, operation: null});
})





