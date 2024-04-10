document.write("hello world");
let ar =[10,20,30,40,50];
document.write(ar);
console.log(window);
console.log(document);
console.log(document.body);
console.log(document.title);

document.body.style.background = "yellow";
// document.body.innerHTML = "ijdiwjdwkdow"


// alert / prompt / confirm -> BOM (browser Object Model)
// DOM represents the whole html as a javascript document
// using DOM we can access the html elemnts, tags, classes, ids, attributes etc and also change them.

// window object => it is a global object contains DOM and BOM

let a = document.body.firstElementChild;
console.log(a.firstElementChild.innerHTML);


// callbacks , promises and async/await