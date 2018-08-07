var arrObj = [
  "cryptopool.png",
  "community.png",
  "cryptomining.png",
  "ICO.png",
  "investment.png",
  "referral.png"];

var pic = document.getElementById("icon");

var i = 0;

function select0() {
  i=0;

  document.getElementById("txt").innerHTML = "<p>Our platform is capable of obtaining high trading volumes and generating<br>substantial profits. Pool trading helps spread your risk while investing in the top<br>30 cryptocurrencies on the market.</p>";
  pic.src = arrObj[0];
}

function select1() {
  i = 1;

  document.getElementById("txt").innerHTML = "<p>Our platform provides users with the ability to upload their own smart contracts<br>in order to participate in a very active and thriving smart contract community for<br>trading and increased exposure.</p>";
  pic.src = arrObj[1];
}

function select2() {
  i = 2;

  pic.src = arrObj[2];
  document.getElementById("txt").innerHTML = "<p>Users will be granted the option of investing their funds in multiple mining<br>pools. Mining pools operate on a constant, passive earning model. Returns on<br>investments from our mining pools will be split amongst investors.</p>";
}

function select3() {
  i = 3;

  pic.src = arrObj[3];
  document.getElementById("txt").innerHTML = "<p>All of the ICO’s listed on our platform will have their own profile, through which<br>the community at NEXT.exchange can easily get in touch with the team behind<br>the ICO, as well as enjoy direct updates and news from them. Kind of like<br>Facebook, imagine a social profile for ICO’s, we like to call it the ICO-book.</p>";
}

function select4() {
  i = 4;

  pic.src = arrObj[4];
  document.getElementById("txt").innerHTML = "<p>NEXT.exchange will offer its users fully managed investment funds. Generally,<br>pools of small-sized companies or ICO’s. Additionally, users won’t need to second<br>guess or go through hassles when deciding when to buy or sell.</p>";
}

function select5() {
  i = 5;

  pic.src = arrObj[5];
  document.getElementById("txt").innerHTML = "<p>Our platforms referral program is designed to benefit both, the referred and<br>referrers. A community bonus system will soon be implemented. Expect low fees,<br>or even no fees for your hard work, as well as other bonuses.</p>";
}

$(document).ready(function () {

  var act = document.getElementById("act");

  $(".null").on("click", function (e) {
    e.preventDefault();
    act.className = "active_active_null";
  })

  $(".one").on("click", function (e) {
    e.preventDefault();
    act.className = "active_active_one";
  })

  $(".two").on("click", function (e) {
    e.preventDefault();
    act.className = "active_active_two";
  })

  $(".three").on("click", function (e) {
    e.preventDefault();
    act.className = "active_active_three";
  })

  $(".four").on("click", function (e) {
    e.preventDefault();
    act.className = "active_active_four";
  })

  $(".five").on("click", function (e) {
    e.preventDefault();
    act.className = "active_active_five";
  })

});






/*var aaa = document.getElementsByTagName("button");

var bbb = Array(6);*/

/*var x = 2;

for(var y=0; y<bbb.length;y++)
{
  bbb[y]=aaa[x];
  x++;
}*/

/*console.log(aaa);
console.log(bbb);*/


/*function nextbtn() {
  i++;
  if (i == 6)
    i = 0;
  pic.src = arrObj[i];
  pic.style.transition = "300ms";
  for(var z=0;z<bbb.length;z++){
    bbb[z].style.backgroundColor = "#AAAAAA";
  }
  bbb[i].style.backgroundColor = "black";
}

function backbtn() {
  i--;
  if (i == -1)
    i = 5;
  pic.src = arrObj[i];
  for(var z=0;z<bbb.length;z++){
    bbb[z].style.backgroundColor = "#AAAAAA";
  }
  bbb[i].style.backgroundColor = "black";
}*/
