let words = "YOUR DAY HAS A SCORE OF";
let score = 0;




//function for saving inputs for subjects after reload
window.onbeforeunload = function() {
    localStorage.setItem("humanities", humanitiesNum.value);
    localStorage.setItem("science", scienceNum.value);
    localStorage.setItem("chinese", chineseNum.value);
    localStorage.setItem("english", englishNum.value);
    localStorage.setItem("drama", dramaNum.value);
    localStorage.setItem("health", healthNum.value);
    localStorage.setItem("greek", greekNum.value);
    localStorage.setItem("music", musicNum.value);
    localStorage.setItem("sport", sportNum.value);
    localStorage.setItem("math", mathValue.value);
    localStorage.setItem("dtd", dtdNum.value);
    localStorage.setItem("art", artNum.value);
}

window.onload = function() {
     let hums = localStorage.getItem("humanities");
     console.log(localStorage);
     console.log('Humanities value is ' + hums);
    document.getElementById("humanitiesNum").value = hums;

    let sci = localStorage.getItem("science");
    
    console.log('Science value is ' + sci);
   document.getElementById("scienceNum").value = sci;

   let chi = localStorage.getItem("chinese");
   
   console.log('Chinese value is ' + chi);
  document.getElementById("chineseNum").value = chi;

  let eng = localStorage.getItem("english");
  
  console.log('English value is ' + eng);
 document.getElementById("englishNum").value = eng;

 let dra = localStorage.getItem("drama");

 console.log('Drama value is ' + dra);
document.getElementById("dramaNum").value = dra;


let heal = localStorage.getItem("health");

console.log('Health value is ' + heal);
document.getElementById("healthNum").value = heal;

let gre = localStorage.getItem("greek");

console.log('Greek value is ' + gre);
document.getElementById("greekNum").value = gre;


let mus = localStorage.getItem("music");

console.log('Music value is ' + mus);
document.getElementById("musicNum").value = mus;

let spor = localStorage.getItem("sport");

console.log('Sport value is ' + spor);
document.getElementById("sportNum").value = spor;

let mat = localStorage.getItem("math");

console.log('Math value is ' + mat);
document.getElementById("mathValue").value = mat;

let dt = localStorage.getItem("dtd");

console.log('DTD value is ' + dt);
document.getElementById("dtdNum").value = dt;

let ar = localStorage.getItem("art");

console.log('Art value is ' + ar);
document.getElementById("artNum").value = ar;
}



/* fucntion for score */

function resultFunction() {
    let counted = (count + counttwo + countthree + countfour + countfive + countsix + countseven + counteight + countnine + countten
        + counteleven + counttwelve);
    let totalNum = counted * 10; 
    window.scrollTo(0, 0);
    let result = Math.round(score / totalNum * 100);
    if (counted == 0) {
         result = result || 0;
    } else {
        console.log(score);
    }
    document.body.appendChild(document.createElement('h3'));
    document.querySelector("body h3:last-child").id = "jstext";
    document.querySelector("#jstext").innerHTML = result  + '%';
    
    console.log(totalNum);
    console.log(counted * 10); 

    document.body.appendChild(document.createElement('h4'));
    document.querySelector("body h4:last-child").id = "myScore";
    document.querySelector("#myScore").innerHTML = words;
    
   
    document.getElementById("myDIV").style.opacity = "0";
    document.getElementById("myTitle").style.opacity = "0";

    document.body.appendChild(document.createElement('h3'));
    document.querySelector("body h3:last-child").id = "jsnum";
    
    document.querySelector("#jsnum").innerHTML = score;
    
}

let count = 0;
function clickFunction() {
    count++;
    document.getElementById("display").innerHTML = count;   
    console.log(count); 
}


//functions for seeing how many times something has been clicked

let counttwo = 0;
function click2Function() {
    counttwo++;
    document.getElementById("display2").innerHTML = counttwo;  
    console.log(counttwo);
}

let countthree = 0;
function click3Function () {
    countthree++;
    document.getElementById("display3").innerHTML = countthree;  
    console.log(countthree);
}

let countfour = 0;
function click4Function () {
    countfour++;
    document.getElementById("display4").innerHTML = countfour;  
    console.log(countfour);
}

let countfive = 0;
function click5Function () {
    countfive++;
    document.getElementById("display5").innerHTML = countfive;  
    console.log(countfive);
}

let countsix = 0;
function click6Function () {
    countsix++;
    document.getElementById("display6").innerHTML = countsix;  
    console.log(countsix);
}

let countseven = 0;
function click7Function () {
    countseven++;
    document.getElementById("display7").innerHTML = countseven;  
    console.log(countseven);
}

let counteight = 0;
function click8Function () {
    counteight++;
    document.getElementById("display8").innerHTML = counteight;  
    console.log(counteight);
}

let countnine = 0;
function click9Function () {
    countnine++;
    document.getElementById("display9").innerHTML = countnine;  
    console.log(countnine);
}

let countten = 0;
function click10Function () {
    countten++;
    document.getElementById("display10").innerHTML = countten;  
    console.log(countten);
}

let counteleven = 0;
function click11Function () {
    counteleven++;
    document.getElementById("display11").innerHTML = counteleven;  
    console.log(counteleven);
}
let counttwelve = 0;
function click12Function () {
    counttwelve++;
    document.getElementById("display12").innerHTML = counttwelve;  
    console.log(counttwelve);
}

//function fro each subject

function mathFunction() {
    score += Number(mathValue.value);

}

function englishFunction() {
    score += Number(englishNum.value);
}

function healthFunction() {
    score += Number(healthNum.value);

}

function chineseFunction() {
    score += Number(chineseNum.value);

}

function dtdFunction() {
    score += Number(dtdNum.value);

}

function greekFunction() {
    score += Number(greekNum.value);
}

function humanitiesFunction() {
    score += Number(humanitiesNum.value);

}

function musicFunction() {
    score += Number(musicNum.value);
}

function dramaFunction() {
    score += Number(dramaNum.value);

}

function artFunction() {
   score += Number(artNum.value);
}

function sportFunction() {
    score += Number(sportNum.value);

}

function scienceFunction() {
    score += Number(scienceNum.value);

}
