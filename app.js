document.querySelector("#button1").addEventListener("click", loadCustomer);
document.querySelector("#button2").addEventListener("click", loadCustomers);

// Load customer
function loadCustomer(e) {
  //  Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN --- (true) is for being synchronous
  xhr.open("GET", "customer.json", true);

  // Check the HTTP status
  xhr.onload = function () {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      const output = `
             <ul>
                <li>ID : ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>phone : ${customer.phone}</li>
             </ul>
            `;
      //   Show output
      document.querySelector("#customer").innerHTML = output;
    }
  };

  xhr.send();
}

//  Load customers
function loadCustomers(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      let output = "";
      customers.forEach(function (customer) {
        output += `
                <ul>
                    <li>ID : ${customer.id}</li>
                    <li>Name : ${customer.name}</li>
                    <li>Company : ${customer.company}</li>
                    <li>phone : ${customer.phone}</li>
                </ul>
                `;
      });

      document.querySelector("#customers").innerHTML = output;
    }
  };
  xhr.send();
}

/*
    
    // HTTP Statuses
        //  200 : 'OK'
        //  403 : 'Forbidden'
        //  404 : 'Not Found'


    // readyState Values
        // 0: request not initialized 
        // 1: server connection established
        // 2: request received 
        // 3: processing request 
        // 4: request finished and response is ready

  */
