class Animal {
	protected voice: string = ""
	public color: string = "black"
	private go() {
		console.log("Go")
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
}

const cat = new Cat()
cat.setVoice("test")
console.log(cat.color)
