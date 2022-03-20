const students=[{name:'srikanth',Subjects:'Javascript'},
              {name:'akhilesh',Subjects:'Java'}]
function enrollStudent(student){
return new Promise(function(resolve,reject){
setTimeout(function()
{
    students.push(student);
    console.log('student has been enrolled');
    const error=false;
    if(!error){
        resolve();
    }else{
        reject();
    }
},1000);
})
 }
 function getStudents(){
     setTimeout(function(){
         students.forEach(function(student){
        return `${student.name}`
        });
        console.log('student has been fetched');
     },5000);
    }
 let newStudent= {name:"Sunny", Subjects:"Python"}
 enrollStudent(newStudent).then(getStudents).catch(function(){
     console.log('some error occured')
 });