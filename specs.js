describe("The string calculator", function(){
    it("accepts a string and outputs a number", function() {
        expect(typeof calculate("")).toBe("number");
    });
    it("calculate '1+1' and returns 2", function() {
    	expect(calculate("1+1")).toBe(2);
    });
});