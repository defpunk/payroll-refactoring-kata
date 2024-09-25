export default class Employee {
    private rate: number;
    private separated: boolean;
    private retired: boolean;

    constructor(rate: number, separated: boolean, retired: boolean) {
        this.rate = rate;
        this.separated = separated;
        this.retired = retired;
    }

    public getRate(): number {
        return this.rate;
    }

    public isSeparated(): boolean {
        return this.separated;
    }

    public isRetired(): boolean {
        return this.retired;
    }
}
