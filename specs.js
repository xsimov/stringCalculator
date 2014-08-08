describe("The string calculator", function(){
    it("accepts a string and outputs a number", function() {
        expect(typeof calculate("")).toBe("number");
    });
});