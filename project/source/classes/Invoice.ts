import { HasFormatter } from "../interfaces/HasFormatter"

//classes
export class Invoice implements HasFormatter {
	constructor(
		readonly client: string,
		private details: string,
		public amount: number
	) {}

	format() {
		return `${this.client} owes RUB${this.amount} for ${this.details}`
	}
}
