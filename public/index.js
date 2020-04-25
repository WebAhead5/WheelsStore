

function Addfunction() {
    var Company = document.getElementById("Company").value;
    var Measure = document.getElementById("Measure").value;
    var Quantity = document.getElementById("Quantity").value;
    var Speedcode = document.getElementById("Speedcode").value;
    var MODEL = document.getElementById("MODEL").value;


    params = `Company=${Company}&Measure=${Measure}&Quantity=${Quantity}&Speedcode=${Speedcode}&MODEL=${MODEL} `;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            //showReserveSpinner(false);
            if (xhr.status === 200) {
                var data = JSON.parse(xhr.responseText);
                message.innerHTML = "The wheels was added successfully";
                reserveModal.style.display = "block";
                reserveModal.classList.toggle('fade');
            }
            else {
                console.error(xhr.responseText);
            }
        }
    }
    xhr.open('POST', '/add', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(params);
}

function searchbyMesurefunction() {
    var Measure = document.getElementById("searchby").value;

}


function searchbyCompanyfunction() {
    var company = document.getElementById("searchby").value;

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //console.log(xhr.response)
        if (xhr.readyState === 4 && xhr.status === 200) {

            console.log(xhr.response);
        }
    };
    xhr.open('GET', `/searchComp?companyname=${company}`);
    xhr.send();

     
    
}


function request(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //console.log(xhr.response)
        if (xhr.readyState === 4 && xhr.status === 200) {
            cb(null, xhr.responseText);
            //console.log(xhr.response);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function GetAllWheels(err, data) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        //console.log(xhr.response)
        if (xhr.readyState === 4 && xhr.status === 200) {
            var data = JSON.parse(xhr.response)
            var table = document.getElementById("dataTable")
            Cleartable();
            data.forEach(item => {
                var row = document.createElement('tr');
                var id = document.createElement('th');
                id.innerHTML = item.id;
                row.appendChild(id);

                var Company = document.createElement('th');
                Company.innerHTML = item.company;
                row.appendChild(Company);

                console.log(item);
                var Measure = document.createElement('th');
                Measure.innerHTML = item.mesure;
                row.appendChild(Measure);

                var Quantity = document.createElement('th');
                Quantity.innerHTML = item.quantity;
                row.appendChild(Quantity);

                var Model = document.createElement('th');
                Model.innerHTML = item.model;
                row.appendChild(Model);

             

                var Speedcode = document.createElement('th');
                Speedcode.innerHTML = item.speedcode;
                row.appendChild(Speedcode);


                table.appendChild(row);
            })

        }
    };
    xhr.open('GET', '/showwheels');
    xhr.send();

};


function Cleartable()
{

var table=document.getElementById('dataTable');

Array.from(table.childNodes).forEach(item => {
    if (item.nodeName == 'TR') table.removeChild(item);
    else return

  
})
}
