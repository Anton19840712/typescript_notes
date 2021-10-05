import { HasFormatter } from "../interfaces/HasFormatter"

//classes
export class Payment implements HasFormatter {
	constructor(
		readonly recipient: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.recipient} owes RUB${this.amount} for ${this.details}`
	}
}
