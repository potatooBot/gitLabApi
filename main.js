let uname =document.getElementById("Uname");
let pass=document.getElementById("pass");
let first=document.getElementById("first");
let content =document.getElementById("content");
let nameOut=document.getElementById("name");

first.addEventListener("getData()")
function getData() {
    url="https://gitlab.com/api/v4/projects?private_token=glpat-Bt3pPGBw-myuQYRQRyZz";
    fetch(url).then((res)=>{
        return res.json();

    }).then((data)=>{
for (let index = 0;  index<20; index++) {
   
    document.getElementById("content").innerText += data[index].name ;
}

    })
    
}function getData2() {
    url="https://gitlab.com/api/v4/projects?private_token=glpat-Bt3pPGBw-myuQYRQRyZz";
    fetch(url).then((res)=>{
        return res.json();

    }).then((data)=>{
for (let index = 0;  index<20; index++) {
   
    document.getElementById("content").innerText += data[index].description;
    
}

    })
    
}function getData3() {
    url="https://gitlab.com/api/v4/projects?private_token=glpat-Bt3pPGBw-myuQYRQRyZz";
    fetch(url).then((res)=>{
        return res.json();

    }).then((data)=>{
for (let index = 0;  index<20; index++) {
   
    document.getElementById("content").innerText += data[index].path_with_namespace;
}


    })
    
}function getData4() {
    url="https://gitlab.com/api/v4/projects?private_token=glpat-Bt3pPGBw-myuQYRQRyZz";
    fetch(url).then((res)=>{
        return res.json();

    }).then((data)=>{
for (let index = 0;  index<20; index++) {
   
    document.getElementById("content").innerText += data[index].default_branch;
}
document.getElementById("content")=`<br><\br>`;

    })
    
}function getData5() {
    url="https://gitlab.com/api/v4/projects?private_token=glpat-Bt3pPGBw-myuQYRQRyZz";
    fetch(url).then((res)=>{
        return res.json();

    }).then((data)=>{
for (let index = 0;  index<20; index++) {
   
    document.getElementById("content").innerText += data[index].ssh_url_to_repo;
}
document.getElementById("content")=`<br><\br>`;

    })
    
}
