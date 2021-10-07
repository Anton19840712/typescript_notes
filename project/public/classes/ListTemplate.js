//here we create some base class, that consists of constructor and some methods:
export class ListTemplate {
    container;
    constructor(container) {
        this.container = container;
    } //we always need such a brackets for constructor's creation.
    //in method render we get and set several values
    render(item, heading, position) {
        const li = document.createElement("li"); //getting tag li
        const h4 = document.createElement("h4"); //getting tag h4
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement("p"); //getting tag li
        p.innerText = item.format(); //setting some inner text
        li.append(p);
        if (position === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
