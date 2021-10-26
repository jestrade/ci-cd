import sum from './../../utils/sum';

describe("sum", () => {
    it("validates sum", () => {
        expect(sum(5, 4)).toEqual(9);
    })
})