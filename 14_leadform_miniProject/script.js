function beforesubmit() {
  let inputdate = document.querySelector(".inputdate");
  let outputdate = document.querySelector(".outputdate");

  console.log("inputdate.value:", inputdate.value);

  // Format date for Salesforce (YYYY-MM-DD)
  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US")
    

  outputdate.value = formattedDate;

  console.log("formattedDate:", formattedDate);

}
