 
async function getResponseCheck() {

  let url ="http://localhost:8081/web/getrecord";
  console.log(url); 
  let fetchOptions = {
    
    method: "GET",
    
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"
    }
  };

  const  res = await fetch(url, fetchOptions); 
  console.log(res);
  const body = await res.json();

  for(var i=0;body[i];i++){
    console.log(body[i]);
    console.log(body[i].id);
    console.log(body[i].first_name);
    console.log(body[i].last_name);
    console.log(body[i].phone_number);
    console.log(body[i].gender);
    console.log(body[i].email);
    console.log(body[i].percentange);
  }

  if (!res.ok) {
    console.log("In error block");
    let error = await res.text();
    throw new Error(error);
  }
}

function addRow() {
  var root = document.getElementById('mytab').getElementsByTagName('tbody')[0];
  var rows = root.getElementsByTagName('tr');
  var clone = cloneEl(rows[rows.length - 1]);
  // cleanUpInputs(clone);
  root.appendChild(clone);
}
function cloneEl(el) {
  var clo = el.cloneNode(true);
  return clo;
}
function cleanUpInputs(obj) {
  for (var i = 0; n = obj.childNodes[i]; ++i) {
    if (n.childNodes && n.tagName != 'INPUT') {
      cleanUpInputs(n);
    } else if (n.tagName == 'INPUT' && n.type == 'text') {
      n.value = '';
    }
  }  
}