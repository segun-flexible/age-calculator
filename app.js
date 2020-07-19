
//DOM
let DOM = (function(){
return{
    goButton: document.querySelector("button.check"),
    ageInfo: document.querySelector(".info"),
    agep: document.querySelector(".ageP"),
    ageGroup: document.querySelector(".nextage"),
    age_group_info: document.querySelector(".age_group"),
    input: document.querySelector("input[type='date']")
    
}
})()


//Structure Aspect
let structure = (function(dom){



//Constructor
class ageCalculator{
    constructor(){
        this.todayDate = new Date().getFullYear()
    }

    //Core Calculator
    calculate(myDate){
    //Getting And Converting The Date Of Birth To Number
    let dob = Number(myDate.split('-')[0]);
    let age = this.todayDate - dob;

    //Populating Value To UI
    dom.ageInfo.style.display = "flex";
    dom.agep.textContent = age;
    this.callOutGroup(age)


    }

    /*
        Baby = 0 - 2
        Preschool: 3-5 yrs;
        Gradeschooler: 5-12 yrs
        Teen: 12-18 yrs
        Young Adult: 18-21 yrs
        Adult: 22 - 40
        Elderly Adult: 41 - 70
        Methuselah: 80 - infinity
    */

    //CallOut Group
    callOutGroup(age){
        if(age >= 0 && age <= 5) dom.age_group_info.innerHTML = `You Are <span class="vowel">A</span> <span class="nextage">Baby</span>`;
        else if(age > 5  && age <= 12) dom.age_group_info.innerHTML = `You Are <span class="vowel">A</span> <span class="nextage">Preschool</span>`;
        else if(age >= 12 && age <= 18) dom.age_group_info.innerHTML = `You Are <span class="vowel">A</span> <span class="nextage">Teenager</span>`;
        else if(age >= 18 && age <= 21) dom.age_group_info.innerHTML = `You Are <span class="vowel">A</span> <span class="nextage">Young Adult</span>`;
        else if(age >= 22 && age <= 40) dom.age_group_info.innerHTML = `You Are <span class="vowel">An</span> <span class="nextage">Adult</span>`;
        else if(age >= 41 && age <= 79) dom.age_group_info.innerHTML = `You Are <span class="vowel">An</span> <span class="nextage">Elderly Adult</span>`;
        else if(age >= 80) dom.age_group_info.innerHTML = `You Are <span class="vowel">A</span> <span class="nextage">Methuselah</span>`;
    }
    
};


return{

theClass: new ageCalculator(),

} 


})(DOM);


//Controller
let controller = (function(structure,dom){

//Creating The Instance The Project
let myAgeCalc = structure.theClass;

//On Button GO Click
dom.goButton.addEventListener("click",()=>{
    myAgeCalc.calculate(document.querySelector("input[type='date']").value)
});

//Input Date On Change
dom.input.addEventListener("change",()=>{
    dom.ageInfo.style.display = "none"
})


})(structure,DOM);

