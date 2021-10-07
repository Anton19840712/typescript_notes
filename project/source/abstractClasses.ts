abstract class Component {
	//they do not compiled into som
	abstract render(): void
	abstract info(): string
}

class AppComponent extends Component {
	//key word extends
	render(): void {
		console.log("Component to render")
	}
	info(): string {
		return "This is info"
	}
}
