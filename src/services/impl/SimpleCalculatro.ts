import { ISimpleCalculator } from "../ISimpleCalculator";

export class SimpleCalculator implements ISimpleCalculator {
    Divide(a: number, b: number): number {
        if( b == 0)
            throw Error("You can't divide by 0");
        return a / b;
    }

    Add(a: number, b: number): number {
        return a + b;
    }
}