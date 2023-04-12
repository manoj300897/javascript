function calculatePayroll() {
    const name = document.getElementById("empname").value;
    const empid = document.getElementById("empid").value;
    const de = document.getElementById("design").value;
    const basicpay = document.getElementById("bp").value;
    const hra=document.getElementById("hra").value;
    const da = document.getElementById("da").value;
    const pf = document.getElementById("pf").value;
    alert("yes its correct")

    
    
    const gpay = document.getElementById("gpay").value;
    gpay = basicpay+hra+da+pf;
    const npay = document.getElementsById("Npay").value;
    npay = gpay- pf;

        document.getElementById("empname_2").value = name;
        document.getElementById("empid_2").value = empid ;
        document.getElementById("design_2").value = de;
        document.getElementById("basicpay_2").value = basicpay;
        document.getElementById("gpay").value=gpay;
        document.getElementById("Npay").value =npay;
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2= row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

                
        cell1.innerHTML = empname;
        cell2.innerHTML = empid;
        cell3.innerHTML = de;
        cell4.innerHTML = basicpay;
        cell5.innerHTML = gpay;
        cell6.innerHTML = npay;
            
}