var usd = document.getElementById("usd").textContent,
    button = document.getElementById("calculate"),
    numUSD = Number(usd);
console.log(typeof numUSD);

button.onclick = function() {
    var amount =  document.getElementById("amount").value;
    var result = (amount * numUSD).toFixed(4);
    document.getElementById("result").innerHTML = result;
};

var refresh = document.getElementById("refresh");

refresh.onclick = function () {
    document.location.reload();
};
