let callback=[]
for(let i=0;i<3;i++){
    callback[i]=function(){
        return i*2
    }
}

for(let i=0;i<3;i++){
    console.log(callback[i]())
}
// Arrow Function
const race="100 m"
const winners=["shgn","mitin","richa"]
const win=winners.map((winner,i) => ({name: winner,race,place: i+1}))
console.log(win)

const marks=[100,60,40,70,34,56,86]
const result1=marks.filter(marks => marks>60)
console.log(result1)

//Multiple Arguments
function f(a,b, ...c){    
    return a+b * c.length
}
console.log(f(8,9,"true","shgn","qwe",98))

//Another Example

const n1="Rozan";
const age=12;
function highlight(strings,...values){
    let str="";
    strings.forEach((string,i)=>{
        str+=`${string} and ${values[i]}`
    })
}

console.log(highlight`My dog name is ${n1} and he is ${age} years old`);


console.log("before Mapping func")

//Mapping
function mapp(){
const data={
    students:["Shgn","Ruchi","Mansi","Kamal","Maninder","Brahm"],
    yr:2018,
    title: "SHGN Tuition"
};
function fetchData(students_names){
    return `<ul>
        ${students_names.map(std => `<li>${std}</li>`).join("")}    
    </ul>`;
}
console.log(` ${data.title}`)
console.log(`${data.title}  ${data.yr} ${fetchData(data.students)}`);
const d1=`<h1>${data.title}  ${data.yr} ${fetchData(data.students)}</h1>`;
document.body.innerHTML=d1;
}

//Destructing Arrays
console.log("DESTRUCTING ARRAYS")
function add()
{
    const a1=[9,3,2,5,6,7,1,9];
    let total=0;
    for(num of arguments)
    {
        total+=num;
    }
    return total;
}
const t=add(10,20,30,50,90);
console.log(`Total Sum is : ${t}`)


   














