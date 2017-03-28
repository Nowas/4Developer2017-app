import { IAdvanceCalculator, CalcOperationEnum } from '4developers-package';
import { SimpleCalculator } from "./SimpleCalculatro";

export class AdvancedCalculator extends SimpleCalculator implements IAdvanceCalculator {
    Operation(a: number, b: number, operation: CalcOperationEnum): number {
        switch (operation) {
            case CalcOperationEnum.Addition:
                return this.Add(a,b);
            case CalcOperationEnum.Divsion:
                return this.Divide(a,b);
            default:
                throw Error("Unsupported operation");
        }
    }
}