import Employee from "./employee";
import PayCheck from "./paycheck";
import PayrollApplication from "./payrollapplication";

describe('PayrollTests', () => {
    const IRRELEVANT: number = 53;

    it('without_bonus', () => {
        const employee = new Employee(100, false, false);
        const payCheck = PayrollApplication.payAmount(employee, 30);
        expect(payCheck).toEqual(new PayCheck(3000, 'EMP'));
    });

    it('with_bonus', () => {
        const employee = new Employee(10, false, false);
        const payCheck = PayrollApplication.payAmount(employee, 41);
        expect(payCheck).toEqual(new PayCheck(1410, 'EMP'));
    });

    it('retired', () => {
        const employee = new Employee(IRRELEVANT, false, true);
        const payCheck = PayrollApplication.payAmount(employee, IRRELEVANT);
        expect(payCheck).toEqual(new PayCheck(0, 'RET'));
    });

    it('separated', () => {
        const employee = new Employee(IRRELEVANT, true, false);
        const payCheck = PayrollApplication.payAmount(employee, IRRELEVANT);
        expect(payCheck).toEqual(new PayCheck(0, 'SEP'));
    });
});
