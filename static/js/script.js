document.addEventListener("DOMContentLoaded", function() {
  var b = document.getElementById("submit");
  b.addEventListener("click", submitPassword);
});

function submitPassword() {
  var pw1 = document.getElementById("password1").value;

  var url = new URL("https://purgatory-j6z4gxi7tq-uc.a.run.app");
  var params = {"password": pw1};
  url.search = new URLSearchParams(params).toString();

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      document.getElementById("response").innerHTML = data.message;
    })
    .catch(error => {
      console.log(error);
      document.getElementById("response").innerHTML = "Something went wrong";
    })
    .finally(() => {
      document.getElementById("password1").value = "";
    });
}
