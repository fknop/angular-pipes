export class AgeFromDateString {
	private _age: number;

	constructor(dateString: string) {
		let birthday = new Date(dateString);
		this._age = new CalculateAge(birthday).age;
	}

	get age(): number {
		return this._age;
	}

}

export class AgeFromDate {
	private _age: number;

	constructor(date: Date) {
		this._age = new CalculateAge(date).age;
	}

	get age(): number {
		return this._age
	}

}

class CalculateAge {
	private _age: number;

	constructor(birthday: Date) {
		let ageDifMs: number = Date.now() - birthday.getTime();
        let ageDate: Date = new Date(ageDifMs); // miliseconds from epoch
        let age: number = ageDate.getUTCFullYear() - 1970;
        this._age = (age > 0) ? age : 0;
	}

	get age(): number {
		return this._age;
	}

}
