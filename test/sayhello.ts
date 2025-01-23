import {sayhello} from "../sc/sayhello";

describe("sayhello", function (): void {
    it('should return Helo iyan', function (): void {
        expect(sayhello('iyan')).toBe('Hello iyan');
    });
});