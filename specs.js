describe("The string calculator", function(){

    it("accepts a string and outputs a number", function() {
      expect(typeof calculate("")).toBe("number");
    });

    it("calculate '1+1' and returns 2", function() {
    	expect(calculate("1+1")).toBe(2);
    });

    it("calculates '1-1' and returns 0", function() {
      expect(calculate('1-1')).toBe(0);
    });

    it("calculates 1/1 and returns 1", function() {
      expect(calculate('1/1')).toBe(1);
    });

    it("calculates 1*2 and returns 2", function() {
      expect(calculate('1*2')).toBe(2);
    });

    it("calculates 10+2 and returns 12", function() {
      expect(calculate('10+2')).toBe(12);
    });

});