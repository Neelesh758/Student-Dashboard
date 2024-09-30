//Deefining inputs
let input1name = document.getElementById("name1");
let input1class = document.getElementById("class1");
let input1stid = document.getElementById("stid1");
let input1rno = document.getElementById("rno1");
//Data clear from local storage
let deleteee = document.getElementById("deletedata").addEventListener("click",clearr);
function clearr(){
    localStorage.clear();
    alert("Data is now unsaved from local storage please refresh to update data");
}


//defining Destinations
let desname1name = document.querySelector(".desname");
let desname1class = document.querySelector(".desclass");
let desname1stid = document.querySelector(".desid");
let desname1rno = document.querySelector(".desrno");
let desdel = document.querySelector(".delete");

function Add(){
    if(input1name.value === ""){
        alert("Please Enter Name ");
    }else{
        let newel = document.createElement("ul");
        newel.innerHTML = `${input1name.value}`;
        let newel2 = document.createElement("ul");
        newel2.innerHTML = `${input1class.value}`;
        let newel3 = document.createElement("ul");
        newel3.innerHTML = `${input1stid.value}`;
        let newel4 = document.createElement("ul");
        newel4.innerHTML = `${input1rno.value}`;
        let newel5 = document.createElement("ul");
        newel5.innerHTML = `<p>&#10060</P>`;
        desname1name.appendChild(newel);
        desname1class.appendChild(newel2);
        desname1stid.appendChild(newel3);
        desname1rno.appendChild(newel4);
        desdel.appendChild(newel5);
        newel5.querySelector("p").addEventListener("click" , remove);
        function remove(){
            newel.remove()
            newel5.remove()
            newel2.remove()
            newel3.remove()
            newel4.remove()
        }
        savedaaa();
    }
    input1name.value = "";
}



function savedaaa(){
    localStorage.setItem("name", desnameid.innerHTML);
    localStorage.setItem("class",desclassid.innerHTML);
    localStorage.setItem("idd",desidid.innerHTML);
    localStorage.setItem("rno",desrnoid.innerHTML);
    localStorage.setItem("deletee",deleteid.innerHTML);
}
function saveda2(){
    desnameid.innerHTML = localStorage.getItem("name");
    desclassid.innerHTML = localStorage.getItem("class");
    desidid.innerHTML = localStorage.getItem("idd");
    desrnoid.innerHTML = localStorage.getItem("rno");
    deleteid.innerHTML = localStorage.getItem("deletee");
}
saveda2()

