let inputTask = document.getElementById('input-task');
let addTaskBtn = document.getElementById('btn-task');
let empityTask = document.getElementById('empity-task');
let allTask = document.getElementById('all-task');
let span = document.querySelector('span');
let deletAll = document.getElementById('delet-all');
let showModelBtn = document.getElementById('show-model-btn');
let closeModelBtn = document.querySelectorAll('#close-btn');
let layOut = document.querySelector('.layout');
let p =document.querySelector('p');
let darkBtn =document.querySelector('#darkBtn');
let body =document.querySelector('body');
let section =document.querySelector('section');
let darkModal =document.querySelector('.modal-content');
let confarm = document.querySelector('.confarm');
let confarmDelet = document.querySelector('#confarm-delet');
let confarmClose = document.querySelector('#confarm-close');
let calcTask = document.querySelector('.clac-task');
let calcCom = document.querySelector('.clac-com');
let calcbeld = document.querySelector('.clac-beld');
let combletTask = 0;
let bendingTask = 0;



// let thesame = function(){
//     if(inputTask.value === allTask.children.value){
//         p.classList.remove('none');
//     }else{
//         p.classList.add('none');
//     }
// }




let showmodel = function(){
    layOut.classList.toggle('none');
    calctask();
}
showModelBtn.onclick=showmodel;
for(let i=0 ; i<closeModelBtn.length ; i++){
    closeModelBtn[i].onclick = showmodel;
}




let addTask = function(){
    let background1 = Math.floor(Math.random() * 255);
    let background2 = Math.floor(Math.random() * 255);
    let background3 = Math.floor(Math.random() * 255);
    let inputTaskValue = inputTask.value;
    empityTask.classList.add("none");

    if(inputTaskValue.trim()==""){
        span.classList.remove('none');
        inputTask.classList.add('invalid');
        thesame;
        calculat();
        
    }
    else if((inputTaskValue.trim().length<=3)){
        p.classList.remove('none');
       
    }
    else if((inputTaskValue.trim().length>20)){
        p.classList.remove('none');
        
    }else if((inputTaskValue.trim()===allTask.children.value)){
        p.classList.remove('none');
        p.innerText="انت ادخلت هذا النص من قبل ";
    }
    else{
        span.classList.add('none');
        p.classList.add('none');
        inputTask.classList.remove('invalid');
    // creat div
            
            let alertDiv = document.createElement("div");
            alertDiv.classList = "alert alert-success";
            alertDiv.append(` ${allTask.childElementCount +1} :  ${inputTaskValue}`);
            alertDiv.style.background =` rgb(${background1},${background2},${background3})`;
            // creat icon
            let deletIcon = document.createElement('i');
            deletIcon.classList=" delet float-end text-danger fa-regular fa-trash-can";
            alertDiv.append(deletIcon);
            // append all tasks
            allTask.append(alertDiv);

            // delet the input value
            inputTask.value="";
            showmodel();
            calctask();
    }
}

addTaskBtn.addEventListener("click",addTask);

document.addEventListener("click",function(event){
    if(event.target.classList.contains('delet')){
        event.target.parentElement.remove();
        calctask();
         
    }
    addEmbty();
    
});


let addEmbty=function(){
    if(allTask.childElementCount==0){
        empityTask.classList.remove('none');
        deletAll.classList.add('none');
    }else{
        empityTask.classList.add('none');
        deletAll.classList.remove('none');
    }
}


let clearTask =function(){
    confarm.classList.toggle("none");
}

 deletAll.addEventListener("click",clearTask);

let checked = function(eve){
   if( eve.target.classList.contains('alert-success')){
    eve.target.classList.replace('alert-success','checked');
    combletTask++;
    bendingTask--;
    calcCom.innerHTML=`compleated task is :${combletTask}`;
    calcbeld.innerHTML=`pending task is : ${bendingTask}`;
   }else{
   eve.target.classList.replace('checked','alert-success');
   combletTask--;
    bendingTask++;
    calcbeld.innerHTML=`pending task is : ${bendingTask}`;
    calcCom.innerHTML=`compleated task is :${combletTask}`;
}}

 document.addEventListener("click",checked);


 darkBtn.onclick=()=>{
    body.classList.toggle('body-dark');
    section.classList.toggle('section-dark');
    darkModal.classList.toggle("modal-contentt");
 }

 let confarmdeletall = function(){
    allTask.innerHTML=""
    confarm.classList.toggle('none');
    calctask();
 }

 confarmDelet.addEventListener("click",confarmdeletall);


 confarmClose.onclick=function(){
    confarm.classList.toggle('none');
 }


 let calctask = function(){
    let numtask=  allTask.childElementCount;
    calcTask.innerHTML =`you have :  ${numtask} tasks` ;
  }
  
// again test=========================================

// //   let claccombletetasks = function(){
// //     let numcomplet = allTask.children.classList.contains("checked").length;
// //     calcCom.innerHTML = `compleated task is : ${numcomplet} tasks`;
    
// }

// again test=============================================
// let bendingTask = function(){
//     let numbending = allTask.children.classList.contains('alart-success').length;
    
//     calcbeld.innerHTML = `bending task is : ${numbending} tasks`;
// }

let calculat = function(){
if(allTask.children.classList.contains('alert-success')){
    bendingTask += 1;
    calcbeld.innerHTML = `completed task is : ${bendingTask} tasks`;
}else{
    combletTask += 1;
    calcCom.innerHTML = `completed task is : ${combletTask} tasks`;
}
}
