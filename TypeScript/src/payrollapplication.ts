import Employee from "./employee";
import PayCheck from "./paycheck";

export default class PayrollApplication {
    private constructor(
    ) { }

    public static payAmount(employee: Employee, workHours: number): PayCheck {
        let result: PayCheck;

        if (!employee.isSeparated()) {
            if (employee.isRetired()) {
                result = new PayCheck(0, 'RET');
            } else {
                const bonus = PayrollApplication.computeBonus(workHours);
                const regularAmount = PayrollApplication.computeRegularPayAmount(employee, workHours);
                const amount = bonus + regularAmount;
                result = new PayCheck(amount, 'EMP');
            }
        } else {
            result = new PayCheck(0, 'SEP');
        }

        return result;
    }

    private static computeBonus(workHours: number): number {
        return workHours > 40 ? 1000 : 0;
    }

    private static computeRegularPayAmount(employee: Employee, workHours: number): number {
        return employee.getRate() * workHours;
    }
}
