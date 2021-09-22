import calculate from "../logic/calculate";

test("AC button to clear output", () => {
   expect(calculate({total: '5', next: '7', operation: '+'}, 'AC')).toStrictEqual({total: null, next: null, operation: null});
})

test("Zero button to return empty output", () => {
   expect(calculate({total: null, next: '0', operation: null}, '0')).toStrictEqual({});
})






