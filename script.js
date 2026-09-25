let counter_label = document.querySelector("#counter_label");
let counter = document.querySelector("#counter");
let left_button = document.querySelector("#left_button");
let right_button = document.querySelector("#right_button");


let active_index = 0;


class Count_Item{

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


let all_objects = [
    new Count_Item("Apple"),
    new Count_Item("Orange"),
    new Count_Item("Banana"),
]

initialize();


function initialize(){
    active_index = 0;
    counter.textContent = all_objects[active_index].Counter_Value;
    counter_label.value = active_index.toString();
}

counter_label.addEventListener("change", () => {
    let new_index = parseInt(counter_label.value);
    active_index = new_index;
    counter.textContent = all_objects[active_index].Counter_Value;
})

left_button.addEventListener("click", () => {
    all_objects[active_index].reduce_count();
    counter.textContent = all_objects[active_index].Counter_Value;
})

right_button.addEventListener("click", () => {
    all_objects[active_index].add_count();
    counter.textContent = all_objects[active_index].Counter_Value;
})