export default class PayCheck {
    private amount: number;
    private reasonCode: string;

    constructor(amount: number, reasonCode: string) {
        this.amount = amount;
        this.reasonCode = reasonCode;
    }
}
