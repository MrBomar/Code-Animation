//Use this template to create items in delayed time
//Make the object here, add it to an array, then execute the array on a timer.

class TypeItOut {
    constructor(obj, text){
        this.obj = obj;
        this.text = text;
        this.append = this.append.bind(this);
    }
    append(){
        this.obj.innerText = `${this.obj.innerText}${this.text}`;
    }
}