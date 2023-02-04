const dogImages = ["https://http.dog/100.jpg", "https://http.dog/101.jpg", "https://http.dog/102.jpg", "https://http.dog/103.jpg", "https://http.dog/200.jpg", "https://http.dog/201.jpg", "https://http.dog/202.jpg", "https://http.dog/203.jpg", "https://http.dog/204.jpg", "https://http.dog/205.jpg", "https://http.dog/206.jpg", "https://http.dog/207.jpg", "https://http.dog/208.jpg", "https://http.dog/218.jpg", "https://http.dog/226.jpg", "https://http.dog/300.jpg", "https://http.dog/301.jpg", "https://http.dog/302.jpg", "https://http.dog/303.jpg", "https://http.dog/304.jpg", "https://http.dog/305.jpg", "https://http.dog/306.jpg", "https://http.dog/307.jpg", "https://http.dog/308.jpg", "https://http.dog/400.jpg", "https://http.dog/401.jpg", "https://http.dog/402.jpg", "https://http.dog/403.jpg", "https://http.dog/404.jpg", "https://http.dog/405.jpg", "https://http.dog/406.jpg", "https://http.dog/407.jpg", "https://http.dog/408.jpg", "https://http.dog/409.jpg", "https://http.dog/410.jpg", "https://http.dog/411.jpg", "https://http.dog/412.jpg", "https://http.dog/413.jpg", "https://http.dog/414.jpg", "https://http.dog/415.jpg", "https://http.dog/416.jpg", "https://http.dog/417.jpg", "https://http.dog/418.jpg", "https://http.dog/419.jpg", "https://http.dog/420.jpg", "https://http.dog/421.jpg", "https://http.dog/422.jpg", "https://http.dog/423.jpg", "https://http.dog/424.jpg", "https://http.dog/425.jpg", "https://http.dog/426.jpg", "https://http.dog/428.jpg", "https://http.dog/429.jpg", "https://http.dog/430.jpg", "https://http.dog/431.jpg", "https://http.dog/440.jpg", "https://http.dog/444.jpg", "https://http.dog/449.jpg", "https://http.dog/450.jpg", "https://http.dog/451.jpg", "https://http.dog/460.jpg", "https://http.dog/463.jpg", "https://http.dog/464.jpg", "https://http.dog/494.jpg", "https://http.dog/495.jpg", "https://http.dog/496.jpg", "https://http.dog/497.jpg", "https://http.dog/496.jpg", "https://http.dog/498.jpg", "https://http.dog/499.jpg", "https://http.dog/500.jpg", "https://http.dog/501.jpg", "https://http.dog/502.jpg", "https://http.dog/503.jpg", "https://http.dog/504.jpg", "https://http.dog/505.jpg", "https://http.dog/506.jpg", "https://http.dog/507.jpg", "https://http.dog/508.jpg", "https://http.dog/509.jpg", "https://http.dog/510.jpg", "https://http.dog/511.jpg", "https://http.dog/520.jpg", "https://http.dog/521.jpg", "https://http.dog/522.jpg", "https://http.dog/523.jpg", "https://http.dog/524.jpg", "https://http.dog/525.jpg", "https://http.dog/526.jpg", "https://http.dog/527.jpg", "https://http.dog/529.jpg", "https://http.dog/530.jpg", "https://http.dog/561.jpg", "https://http.dog/598.jpg", "https://http.dog/599.jpg", "https://http.dog/999.jpg"]
const dogCodes = ["Dog Code: 100", "Dog Code: 101", "Dog Code: 102", "Dog Code: 103", "Dog Code: 200", "Dog Code: 201", "Dog Code: 202", "Dog Code: 203", "Dog Code: 204", "Dog Code: 205", "Dog Code: 206", "Dog Code: 207", "Dog Code: 208", "Dog Code: 218", "Dog Code: 226", "Dog Code: 300", "Dog Code: 301", "Dog Code: 302", "Dog Code: 303", "Dog Code: 304", "Dog Code: 305", "Dog Code: 306", "Dog Code: 307", "Dog Code: 308", "Dog Code: 400", "Dog Code: 401", "Dog Code: 402", "Dog Code: 403", "Dog Code: 404", "Dog Code: 405", "Dog Code: 406", "Dog Code: 407", "Dog Code: 408", "Dog Code: 409", "Dog Code: 410", "Dog Code: 411", "Dog Code: 412", "Dog Code: 413", "Dog Code: 414", "Dog Code: 415", "Dog Code: 416", "Dog Code: 417", "Dog Code: 418", "Dog Code: 419", "Dog Code: 420", "Dog Code: 421", "Dog Code: 422", "Dog Code: 423", "Dog Code: 424", "Dog Code: 425", "Dog Code: 426", "Dog Code: 428", "Dog Code: 429", "Dog Code: 430", "Dog Code: 431", "Dog Code: 440", "Dog Code: 444", "Dog Code: 449", "Dog Code: 450", "Dog Code: 451", "Dog Code: 460", "Dog Code: 463", "Dog Code: 464", "Dog Code: 494", "Dog Code: 495", "Dog Code: 496", "Dog Code: 497", "Dog Code: 496", "Dog Code: 498", "Dog Code: 499", "Dog Code: 500", "Dog Code: 501", "Dog Code: 502", "Dog Code: 503", "Dog Code: 504", "Dog Code: 505", "Dog Code: 506", "Dog Code: 507", "Dog Code: 508", "Dog Code: 509", "Dog Code: 510", "Dog Code: 511", "Dog Code: 520", "Dog Code: 521", "Dog Code: 522", "Dog Code: 523", "Dog Code: 524", "Dog Code: 525", "Dog Code: 526", "Dog Code: 527", "Dog Code: 529", "Dog Code: 530", "Dog Code: 561", "Dog Code: 598", "Dog Code: 599", "Dog Code: 999"]

var i = 1;
var speed = 4000;

function changeImg() {
  document.getElementById("imgDog").src = dogImages[i];
  document.title = dogCodes[i];
  i++;
  if (i >= dogImages.length) {
    i = 0;
  };
};

function increaseSpeed() {
    speed += 250;
    document.getElementById("speed").innerText = speed/1000;
    console.log(speed);
}

function decreaseSpeed() {
    speed -= 250;
    document.getElementById("speed").innerText = speed/1000;
    console.log(speed);
}


setInterval(changeImg, speed)