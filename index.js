let main = document.getElementsByTagName('main')[0];
let myData = JSON.parse(JaySon);
let myArray = [];

const domBuilder = (parent, child) =>{
    //Build the object first
    let me = document.createElement(child.tag);
    if(child.hasOwnProperty('class')){
        classes = child.class.split(" ");
        classes.forEach(item=>{
            if(item != "")me.classList.add(item)    
        })
    };

    //Add the object to the DOM
    parent.appendChild(me);

    //Then determine if it had children
    if(child.hasOwnProperty('children')){

        //If it has children then resend the function
        child.children.forEach(sub=>{
            domBuilder(me, sub);
        })
    } else {
        if(child.hasOwnProperty('value')){
            //If not then split the text value into an array;
            let mine = child.value.split("");
            
            //Cycle through the array and add the letters to myArray;
            mine.forEach(letter=>{
                myArray.push(new TypeItOut(me,letter));
            })
        }
    }
}

myData.forEach(item=>{
    //Cycle thorough myData and send objects to domBuilder;
    let myDOM = document.getElementsByTagName('main')[0];
    domBuilder(myDOM, item);
})

const updateText = () => {
    let mine = myArray.shift();
    mine.append();
    switch (mine.text) {
        case "(": case ")": case "{": case "}":
            let changeOfPlans = (start) => {
                myArray.splice(start,1)[0].append();
            }
            switch (myArray.length) {
                case 318: changeOfPlans(194); break;
                case 305: changeOfPlans(23); break;
                case 280: changeOfPlans(112); break;
                case 173: changeOfPlans(4); break;
                case 153: changeOfPlans(29); break;
                case 140: changeOfPlans(15); break;
                case 98: changeOfPlans(75); break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
}

let typing = setInterval(function(){
    if(myArray.length == 0){
        clearInterval(typing);
    } else {
        updateText();
    }
},50)
