import calculate from "../logic/calculate";

test("AC button to clear output", () => {
   expect(calculate({total: '5', next: '7', operation: '+'}, 'AC')).toStrictEqual({total: null, next: null, operation: null});
})




