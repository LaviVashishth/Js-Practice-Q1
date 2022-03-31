const students=[
    {
        sname:"Lavi",
        score:48
    },
    {
        sname:"Nisha",
        score:95
    },
    {
        sname:"Rahul",
        score:66
    },
    {
        sname:"Suman",
        score:73
    },
    {
        sname:"Rohit",
        score:87
    },
    
];

function getStudents(){
    
    setTimeout(()=>{
    let displayStudents=""
    students.forEach((students) => {
        console.log(students)
    })
    }, 1000)
}

function createStudents(newStudent){
    
    return new Promise(
        (resolve, reject) => {
            setTimeout(() =>{
                students.push(newStudent)
                let flag=true;
                if(flag){
                    resolve();
                }
                else{
                    reject("There is a problem")
                }
            }, 5000)
        }
    )
}        



createStudents({sname:"amisha", name:98}).then(getStudents).catch(err=>console.log(err))