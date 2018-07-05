//-----------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------- BUDGET CONTROLLER --------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;

      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Create new item based on inc or exp
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //Push it into our data structure
      data.allItems[type].push(newItem);

      //Return the new element
      return newItem;
    },

    deleteItem: function(type, id) {
      var ids, index;
      // let id we wish to delete the element is id = 6
      // we have elements like ids = [1 2 4 6 8]
      // we can not simply delete the element at id 6 because the elemenet with that id is at index 3 here
      // data.allItems[type][id] we can not simply delete this
      // to solve this we will use the map function which will create a brand new array of the remaining ids like [1 2 4 6 8]
      var ids = data.allItems[type].map(function(current) {
        return current.id;
      });
      index = ids.indexOf(id);

      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },

    calculateBudget: function() {
      // calculate total income and total expenses
      calculateTotal("inc");
      calculateTotal("exp");
      // Calculate Budget = income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // Calculate % of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function() {
      data.allItems.exp.forEach(function(cur) {
        cur.calcPercentage(data.totals.inc);
      });
    },

    getPercentages: function() {
      var allPercentage = data.allItems.exp.map(function(cur) {
        return cur.getPercentage();
      });
      return allPercentage;
    },

    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },

    testing: function() {
      console.log(data);
    }
  };
})();

//-----------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------- UI CONTROLLER --------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------

var UIController = (function() {
  var DOMStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
    budgetLable: ".budget__value",
    incomeLable: ".budget__income--value",
    expensesLable: ".budget__expenses--value",
    percentageLable: ".budget__expenses--percentage",
    container: ".container",
    expPercentLable: ".item__percentage",
    dateLable: ".budget__title--month"
  };

  var formatNumber = function(num, type) {
    // + or - before a number
    // exactly 2 decimal points
    // comma separating the thousands
    // e.g. 2310.4758 ->>> +2,310.47
    num = Math.abs(num); // abs is a math function
    num = num.toFixed(2); // here the toFixed is a prototype of the number... Even if the num here is a premitive variable when we use the prototype of it, JavaScript automatically converts this preimitive variable to an object and it will return a string - here the value stored in num will be a string like "2.45"
    numSplit = num.split(".");
    int = numSplit[0];
    if (int.length > 3) {
      int =
        int.substr(0, int.length - 3) +
        "," +
        int.substr(int.length - 3, int.length);
    }

    dec = numSplit[1];

    return (type === "exp" ? "-" : "+") + " " + int + "." + dec;
  };

    var nodeListForEach = function(list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };
    
  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // we will get either 'inc' or 'exp'
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
      };
    },

    addListItem: function(obj, type) {
      // 1. Create HTML strig with placeholder text
      var html, newHtml, element;

      if (type === "inc") {
        element = DOMStrings.incomeContainer;

        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      } else if (type === "exp") {
        element = DOMStrings.expenseContainer;

        html =
          '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
      }

      // 2. Replace the placeholder text with actual data that is received from object
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", formatNumber(obj.value, type));

      // 3. Insert the HTML into the DOM : using adjacent html method
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    deleteListItem: function(selectorID) {
      var el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: function() {
      var fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMStrings.inputDescription + ", " + DOMStrings.inputValue
      );
      fieldsArr = Array.prototype.slice.call(fields);
      fieldsArr.forEach(function(current, index, arr) {
        current.value = "";
        // index.value = "";
        // arr.value = "";
      });
      fieldsArr[0].focus();
    },

    displayBudget: function(obj) {
      var type;
      obj.budget >= 0 ? (type = "inc") : (type = "exp");
      document.querySelector(DOMStrings.budgetLable).textContent = formatNumber(
        obj.budget,
        type
      );
      document.querySelector(DOMStrings.incomeLable).textContent = formatNumber(
        obj.totalInc,
        "inc"
      );
      document.querySelector(
        DOMStrings.expensesLable
      ).textContent = formatNumber(obj.totalExp, "exp");
      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLable).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMStrings.percentageLable).textContent = "--";
      }
    },

    displayPercentages: function(percentages) {
      var fields = document.querySelectorAll(DOMStrings.expPercentLable);

      nodeListForEach(fields, function(current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + "%";
        } else {
          current.textContent = "----";
        }
      });
    },

    displayMonth: function(){
        var now, year, month, months;
        now = new Date();    
        year = now.getFullYear();
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        month = now.getMonth();
        document.querySelector(DOMStrings.dateLable).textContent = months[month] + ', ' + year;
    },
      
    changedType: function(){
      var fields = document.querySelectorAll(
      DOMStrings.inputType + ',' + 
      DOMStrings.inputDescription + ',' + 
      DOMStrings.inputValue);  
        
      nodeListForEach(fields, function(cur){
         cur.classList.toggle('red-focus'); 
      });
        
      document.querySelector(DOMStrings.inputBtn).classList.toggle('red');    
    }, 
      
    getDOMStrings: function() {
      return DOMStrings;
    }
  };
})();

//-----------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------- GLOBAL APP CONTROLLER -----------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------
var controller = (function(budgetCtrl, UICtrl) {
  var setupEventListeners = function() {
    var DOM = UIController.getDOMStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
    document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);
      
    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    
  };

  var updateBudget = function() {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on UI
    UICtrl.displayBudget(budget);
  };

  var updatePercentages = function() {
    // 1. Calculate percentages
    budgetCtrl.calculatePercentages();
    // 2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();
    // 3. Update the UI with the new percentages
    UICtrl.displayPercentages(percentages);
  };

  var ctrlAddItem = function() {
    var input, newItem;

    // 1. Get the field input data
    input = UIController.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add new item to UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();

      // 6. Calculate and Update the percentages
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID) {
      // inc-1
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. Delete Item from Datastructure
      budgetCtrl.deleteItem(type, ID);
      // 2. Delete Item from UI
      UICtrl.deleteListItem(itemID);
      // 3. Update and show the new budget
      updateBudget();
      // 4. Calculate and Update the percentages
      updatePercentages();
    }
  };
  return {
    init: function() {
      console.log("Application has started");
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
