var express = require("express");

var Iamport = require("iamport");
var iamport = new Iamport({
  impKey: "3748533585724007",
  impSecret:
    "kJnOLOlhHklIb9LDoof1ODNmt1zMA46AD6Ngg8wSG3gzq8JejKEbIO4yGraUw9bJ34PT3h3PikmSgNYN",
});

const app = express();

app.get("/payments/status/all", (req, res) => {
  iamport.payment
    .getByStatus({
      payment_status: "paid",
    })
    .then(function (result) {
      res.render("payments_list", { list: result.list });
    })
    .catch(function (error) {
      console.log(error);
      red.send(error);
    });
});

app.listen(3000, () => {
  console.log("hello");
});
