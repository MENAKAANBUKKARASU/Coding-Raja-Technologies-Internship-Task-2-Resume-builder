
function addnewwefield(){
    //console.log("Adding New Field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("wefield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","enter here");

    let weob=document.getElementById("we");
    let weaddbuttonob=document.getElementById("weaddbutton");
    weob.insertBefore(newnode,weaddbuttonob);
}
function addnewaqfield(){
    //console.log("Adding New Field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("aqfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","enter here");

    let aqob=document.getElementById("aq");
    let aqaddbuttonob=document.getElementById("aqaddbutton");
    aqob.insertBefore(newnode,aqaddbuttonob);
}
function addnewskfield(){
    //console.log("Adding New Field")
    let newnode=document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("skfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder","enter here");

    let skob=document.getElementById("sk");
    let skaddbuttonob=document.getElementById("skaddbutton");
    skob.insertBefore(newnode,skaddbuttonob);
}
document.getElementById("photoInput").addEventListener("change", function () {
    readURL(this);
});

document.getElementById("previewButton").addEventListener("click", function () {
    document.getElementById("photoInput").click();
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById("profilePreview").src = e.target.result;
            document.getElementById("profilePreview").style.display = "block";
        };
        reader.readAsDataURL(input.files[0]);
    }
}

let profilePhotoDataUrl = null;

function uploadProfilePhoto() {
    let input = document.getElementById("photoInput");
    let profilePreview = document.getElementById("profilePreview");

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            profilePreview.src = e.target.result;
            profilePhotoDataUrl = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function generateCV() {
    let nameField = document.getElementById("namefield").value;
    let contactField = document.getElementById("contactfield").value;
    let addressField = document.getElementById("Addressfield").value;
    let objField = document.getElementById("objfield").value;
    let linkedField = document.getElementById("linkedfield").value;
    let gitField = document.getElementById("gitfield").value;
    let mailField = document.getElementById("mailfield").value;
    let achField = document.getElementById("ec").value;  

    document.getElementById("namet").innerHTML = nameField;
    document.getElementById("namet2").innerHTML = nameField;
    document.getElementById("contactt").innerHTML = contactField;
    document.getElementById("addresst").innerHTML = addressField;
    document.getElementById("objt").innerHTML = objField;
    document.getElementById("lit").innerHTML = linkedField;
    document.getElementById("git").innerHTML = gitField;
    document.getElementById("mailt").innerHTML = mailField;
    document.getElementById("acht").innerHTML = achField;

    let aqs=document.getElementsByClassName("aqField");
    let str2 =" ";
    for (let e of aqs) {
        str2 =str2+`<li>${e.value}</li>`;
    }
    document.getElementById("aqt").innerHTML = str2;
    

 let wes=document.getElementsByClassName("weField");
    let str =" ";
    for (let e of wes) {
        str =str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;
    
    let sks=document.getElementsByClassName("skField");
    let str1 =" ";
    for (let e of sks) {
        str1 =str1+`<li>${e.value}</li>`;
    }
    document.getElementById("skt").innerHTML = str1;
    let ach=document.getElementsByClassName("achField");
    let str3 =" ";
    for (let e of ach) {
        str3 =str3+`<li>${e.value}</li>`;
    }

    document.getElementById("acht").innerHTML = str3;
   
    let profilePhoto = document.getElementById("profile-photo");
    let photoInput = document.getElementById("photoInput");
    if (photoInput.files && photoInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            profilePhoto.src = e.target.result;
            profilePhoto.style.display = "block";
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        profilePhoto.src = "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image.png";
    }
    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";
}

function updateSection(fieldClass, outputId) {
    let fields = document.getElementsByClassName(fieldClass);
    let listItems = [];

    for (let field of fields) {
        let textarea = field.querySelector('textarea');
        if (textarea) {
            listItems.push(`<li>${textarea.value}</li>`);
        } else {
            console.error(`Textarea not found in element with class ${fieldClass}`);
        }
    }

    let outputElement = document.getElementById(outputId);

    if (outputElement) {
        outputElement.innerHTML = listItems.join('');
    } else {
        console.error(`Output element with ID ${outputId} not found.`);
    }
}

function printCV() {
    window.print();
}
function addNewField(containerId, fieldClass) {
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add(fieldClass);
    newnode.classList.add("mt-2");
    newnode.setAttribute("placeholder", "enter here");

    let container = document.getElementById(containerId);
    let addButton = document.getElementById(containerId + "addbutton");
    container.insertBefore(newnode, addButton);
}

function addNewWefield() {
    addNewField("we", "weField");
}

function addNewAqfield() {
    addNewField("aq", "aqField");
}

function addNewSkfield() {
    addNewField("sk", "skField");
}

function addNewAECfield() {
    addNewField("ec", "achField");
}
