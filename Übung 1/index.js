function sortTable(n) {
  var table, rows, switchn, i, x, y, shouldSwitching;
  table = document.getElementById("ourtable");
  switchn = true;

  while (switchn) {
  
    switchn = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
    
      shouldSwitching = false;

      if(n == 1){
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
      }else{
        x = rows[i + 1].getElementsByTagName("TD")[0];
        y = rows[i].getElementsByTagName("TD")[0];
      }


      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitching = true;
        break;
      }
    }
    if (shouldSwitching) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switchn = true;
    }
  }
}