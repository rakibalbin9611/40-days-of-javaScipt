function createExpenseTracker(username, initialBudget) {
  let user = {
    name: username,
    budget: initialBudget,
  };

  let expenses = [];
  let expenseId = 1;

  return {
    // Add Expenses
    addExpense(amount, category, descriptions) {
      if (amount > user.budget) {
        console.log("Not enough budget");
      }
      expenses.push({ id: expenseId, amount, category, descriptions });
      user.budget = user.budget - amount;
      console.log("Expense added successfully");
    },
    // remove expenses
    removeExpense(id) {
      const index = expenses.findIndex((exp) => exp.id === id);
      if (index !== -1) {
        user.budget += expenses[index].amount;
        expenses.splice(index, 1);
        console.log("Expense removed");
      } else {
        console.log("Expense not found");
      }
    },
    // Udate expense
    updateExpense(id, updatedData) {
      const expense = expenses.find((exp) => exp.id === id);
      if (!expense) return console.log("Expense not found!");

      user.budget += expense.amount;

      expense.amount = updatedData.amount ?? expense.amount;
      expense.category = updatedData.category ?? expense.category;
      expense.description = updatedData.description ?? expense.description;

      if (expense.amount > user.budget) {
        console.log("Not enough budget for the update!");
        return;
      }

      user.budget -= expense.amount;
      console.log("Expense updated!");
    },
    // get total expenses
    getTotalExpenses() {
      return expenses.reduce((total, exp) => total + exp.amount, 0);
    },
    // get expenses by category
    getExpenseByCategory(category) {
      return expenses.filter((exp) => exp.category === category);
    },
    // get Highest expenses
    getHighestExpenses() {
      return expenses.reduce((max, exp) =>
        exp.amount > max.amount ? exp : max
      );
    },

    // lowest expense
    getLowestExpense() {
      expenses.reduce((min, exp) => (exp.amount < min.amount ? exp : min));
    },

    // User Info
    getUserInfo() {
      return { ...user };
    },
    // showing all expenses
    showAllExpenses() {
      return [...expenses];
    },

    // user Update
    updateUserData(newName, newBudget) {
      user.name = newName ?? user.name;
      user.budget = newBudget ?? user.budget;
      console.log("User data updated!");
    },
  };
}

const tracker = createExpenseTracker("Rakib", 5000);

tracker.addExpense(300, "Food", "Lunch");
tracker.addExpense(1000, "Shopping", "T-shirt");
tracker.addExpense(200, "Transport", "Uber");

console.log("All Expenses:", tracker.showAllExpenses());
console.log("Total Expenses:", tracker.getTotalExpenses());
console.log("Expenses in Food:", tracker.getExpenseByCategory("Food"));
console.log("Highest Expense:", tracker.getHighestExpenses);
console.log("Lowest Expense:", tracker.getLowestExpense());

tracker.removeExpense(2); // Removes T-shirt expense

console.log("After removing expense:", tracker.showAllExpenses());
tracker.updateExpense(1, { amount: 400, description: "Dinner" });

console.log("Updated User Info:", tracker.getUserInfo());
tracker.updateUserData("Rakibul", 7000);
console.log("After User Update:", tracker.getUserInfo());
