function calculatePrice(myform){  
  var elt = document.getElementById("memoryItem");  
  var memory = elt.options[elt.selectedIndex].value;  
  var memoryQty = parseInt(document.getElementById("memoryItemQty").value);  
  var elt = document.getElementById("hddItem");  
  var hdd = elt.options[elt.selectedIndex].value;  
  var hddQty = parseInt(document.getElementById("hddItemQty").value);  
  var elt = document.getElementById("networkItem");  
  var network = elt.options[elt.selectedIndex].value;  
  var networkQty = parseInt(document.getElementById("networkItemQty").value);  
  memory = parseInt(memory)*memoryQty;  
  hdd = parseInt(hdd)*hddQty;  
  network = parseInt(network)*networkQty;  
    var total = memory+hdd+network;   
  document.getElementById("PicExtPrice").value=total;  
}  