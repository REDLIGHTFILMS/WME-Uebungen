function showhide(value) {
  $(`th:nth-child(${value})`).hide();
  $(`td:nth-child(${value})`).hide();
}
