const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//add text to list
function addTask(){
    if(inputBox.value === ''){
        alert("Please write something.");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7" //รหัส Unicode ของกากบาท
        li.appendChild(span);

        saveData();
    }
    inputBox.value = ""; //พอกดปุ่ม add แล้วมันจะกลับมาว่าเปล่าอีกครั้งหนึ่ง
}

inputBox.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

//check uncheck and remove
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


//เพื่อให้ข้อมูลไม่หาย เวลา refresh ปล.ใส่ทุกการกระทำ
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();