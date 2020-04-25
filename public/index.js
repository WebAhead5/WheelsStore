

function Addfunction()
{
    var Company=document.getElementById("Company").value;
    var Measure=document.getElementById("Measure").value;
    var Quantity=document.getElementById("Quantity").value;
    var Speedcode=document.getElementById("Speedcode").value;
    var MODEL=document.getElementById("MODEL").value;

    
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

function searchbyMesurefunction()
{
    var Measure=document.getElementById("searchby").value;

}


function searchbyCompanyfunction()
{
    var Company=document.getElementById("searchby").value;

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
  
function GetAllWheels(err,data)
{
        if (err) {
          console.error(err);
        } else {
          //console.log("This is the else", data)
          var items = JSON.parse(data);
          var table = document.getElementById('dataTable');
          Array.from(table.childNodes).forEach(node => {
            if (node.nodeName == 'TR') table.removeChild(node);
            else return
          });
          /* create a row in table for each user returned from DB */
          items.forEach(function (item) {
            var row = document.createElement('tr');
            var id = document.createElement('td');
            id.innerHTML = item.id;
            row.appendChild(id);

            var Company = document.createElement('td');
            product.innerHTML = item.Company;
            row.appendChild(Company);

            var Measure = document.createElement('td');
            price.innerHTML = item.Measure;
            row.appendChild(Measure);

            var quantity = document.createElement('td');
            quantity.innerHTML = item.quantity;
            row.appendChild(quantity);

            var Speedcode = document.createElement('td');
            quantity.innerHTML = item.Speedcode;
            row.appendChild(Speedcode);

            var Model = document.createElement('td');
            quantity.innerHTML = item.Model;
            row.appendChild(Model);


            table.appendChild(row);
    });

}
};
request('/showwheels', updateDom);


function removefunction()
{


}
