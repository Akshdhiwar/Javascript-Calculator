const numberbtn = document.querySelectorAll("[data-number]");
      const operationbtn = document.querySelectorAll("[data-operation]");
      const deletebtn = document.querySelector("[data-delete]");
      const equalsbtn = document.querySelector("[data-equals]");
      const clearbtn = document.querySelector("[data-clear]");
      let prev = document.getElementById("prevNum");
      let current = document.getElementById("currentnum");
      let operation;

      //event listeners
      numberbtn.forEach((button) => {
        button.addEventListener("click", () => {
          shownumber(button.innerHTML);
        });
      });

      operationbtn.forEach((button) => {
        button.addEventListener("click", () => {
          operation = button.innerHTML;
          chsOperation();
        });
      });

      equalsbtn.addEventListener("click", () => {
        compute();
      });

      clearbtn.addEventListener("click", () => {
        current.innerHTML = "";
        prev.innerHTML = "";
        operation = undefined;
      });

      deletebtn.addEventListener("click", () => {
        current.innerHTML = current.innerHTML.slice(0, -1);
        console.log(current.innerHTML);
      });

      // functions
      function shownumber(number) {
        if (number === "." && current.innerHTML.includes(".")) return;
        current.innerHTML += number;
      }
      function chsOperation() {
        if (current.innerHTML === "") return;
        if (prev.innerHTML !== "") {
          compute();
        }
        prev.innerHTML = current.innerHTML;
        current.innerHTML = "";
        return operation;
      }
      function compute() {
        let comp;
        let currnum = parseFloat(current.innerHTML);
        let prevnum = parseFloat(prev.innerHTML);
        switch (operation) {
          case "+":
            comp = prevnum + currnum;
            break;
          case "-":
            comp = prevnum - currnum;
            break;
          case "*":
            comp = prevnum * currnum;
            break;
          case "÷":
            comp = prevnum / currnum;
            break;
        }
        current.innerHTML = comp;
        prev.innerHTML = "";
      }