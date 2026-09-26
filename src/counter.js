class Count_Item {
    Counter_Label;
    Counter_Value;

    constructor(Counter_Label){
        this.Counter_Label = Counter_Label;
        this.Counter_Value = 0;
    }

    add_count(){
        this.Counter_Value++;
    }

    reduce_count(){
        if (this.Counter_Value > 0){
            this.Counter_Value--;
        }
    }
}

// State variables live in the module scope, isolated from the global window
let all_objects = [
    new Count_Item("Apple"),
    new Count_Item("Orange"),
    new Count_Item("Banana"),
];

let active_index = 0;

export default function loadCounter() {
    const container = document.getElementById("container");
    
    // 1. Inject the HTML string
    container.innerHTML = `
        <div id="top_container">
            <select id="counter_label">
                <option value="0">Apple</option>
                <option value="1">Orange</option>
                <option value="2">Banana</option>
            </select>
            <div id="counter"></div>
        </div>
        <div id="middle_container">
            <div id="left_container">
                <button id="left_button">Reduce</button>
            </div>
            <div id="right_container">
                <button id="right_button">Add</button>
            </div>
        </div>
        <div id="bottom_container">
        </div>
    `;

    // 2. The DOM now exists. Select your elements.
    let counter_label = document.querySelector("#counter_label");
    let counter = document.querySelector("#counter");
    let left_button = document.querySelector("#left_button");
    let right_button = document.querySelector("#right_button");

    // 3. Initial DOM population (Replacing your old initialize function)
    counter.textContent = all_objects[active_index].Counter_Value;
    counter_label.value = active_index.toString();

    // 4. Attach Event Listeners
    counter_label.addEventListener("change", () => {
        let new_index = parseInt(counter_label.value);
        active_index = new_index;
        counter.textContent = all_objects[active_index].Counter_Value;
    });

    left_button.addEventListener("click", () => {
        all_objects[active_index].reduce_count();
        counter.textContent = all_objects[active_index].Counter_Value;
    });

    right_button.addEventListener("click", () => {
        all_objects[active_index].add_count();
        counter.textContent = all_objects[active_index].Counter_Value;
    });
}