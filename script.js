const funct_btn = document.querySelectorAll(".func_btn");
const display_sign = document.querySelector(".sign_display");
const display_pre = document.querySelector(".pre_nums");
const display_out = document.querySelector(".output_nums")
let value1 = "";
let string1 =  "";
let value2 = 0;
let index_nums = 0;
let index_sign = 0;
let store_nums = [];
let store_sign = []

funct_btn.forEach((c_btn, index) => {
    c_btn.addEventListener("click", (event) => {
      let given_input =  event.target.id;
      checking_input(given_input);
    });
});


function checking_input(click_value) {
  if (isNaN(value2)) {
    value2 = 0;
  }

  if ("0123456789".includes(click_value)) {
    return display_out.innerHTML = value1 = value1 + click_value;
  }

  else if (click_value == "+" || click_value == "-" || click_value == "*" || click_value == "/") {
    display_sign.innerHTML = click_value;
    store_nums[index_nums] = value1;
    store_sign[index_nums] = click_value;
    do_calculate(click_value);
    index_nums++;
  }

  else if (click_value == "=") {
    display_sign.innerHTML = click_value;
    var sign_use = store_sign[index_nums-1];
    console.log(sign_use);
    do_calculate(sign_use);
  }

  else if (click_value == "-2") {
    value2 = 0;
  }

  display_pre.innerHTML = value2;
  display_out.innerHTML = value2;
  if (click_value == "-1") {
    value1 = "0"
    display_out.innerHTML = value1;
  }
  value1 = "";
  return;
  
}

function do_calculate(sign) {
  if (value1 == "") {
    return;
  }
  if (sign == "+") {
    console.log(value2 = value2 + parseFloat(value1));
  }
  else if (sign == "-") {
    console.log(value2 = value2 - parseFloat(value1));
  }
  else if (sign == "*") {
    if (value2 == 0) {
      value2 = value1;
      return;
    }
    console.log(value2 = value2 * parseFloat(value1));
  }
  else if (sign == "/") {
    if (value2 == 0) {
      value2 = value1;
      return;
    }
    console.log(value2 = value2 / parseFloat(value1));
  }
}
