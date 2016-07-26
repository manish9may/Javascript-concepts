var btn = document.getElementById("btn5");
            btn.onclick = function() {
              for (var i = 1; i <= 9; i++) {
                var but = "btn" + i;
                if (but != "btn5") {
                  var btn = document.getElementById(but);
                  var val = parseInt(btn.innerHTML);
                  var val2 = 0;
                  switch(val) {
                    case 1:
                      val2 = 4;
                      break;
                    case 2:
                      val2 = 1;
                      break;
                    case 3:
                      val2 = 2;
                      break;
                    case 4:
                      val2 = 7;
                      break;
                    case 6:
                      val2 = 3;
                      break;
                    case 7:
                      val2 = 8;
                      break;
                    case 8:
                      val2 = 9;
                      break;
                    case 9:
                      val2 = 6;
                      break;
                  }
                  btn.innerHTML = val2;
                }
              }

  };
