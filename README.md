# JavaScript Calculator

## Introduction

This project is the final JavaScript fundamentals assignment.  
The goal is to build a **fully functional on-screen calculator** using **HTML, CSS, and JavaScript**, combining everything learned so far: variables, functions, conditionals, arrays, DOM manipulation, and event handling.

By the end of this project, you should be comfortable structuring logic, managing state, and handling user input in JavaScript.

---

## Core Requirements

### 1. Calculator Logic

Implement basic math functions:

- `add(a, b)`
- `subtract(a, b)`
- `multiply(a, b)`
- `divide(a, b)`

Create an `operate(operator, a, b)` function that:

- Receives an operator (`+`, `-`, `*`, `/`)
- Calls the correct math function
- Returns the result

---

### 2. State Management

A calculation consists of:

- First number
- Operator
- Second number

These values must be stored and updated based on user input.

---

### 3. User Interface

- Buttons for digits (0–9)
- Buttons for operators (`+ - × ÷`)
- Equals (`=`)
- Clear (`C`)
- Display area showing the current input or result

---

### 4. Functionality

- Clicking digits updates the display
- Clicking an operator stores the current value
- Pressing `=` evaluates the operation
- Results appear in the display
- Pressing a new digit after a result starts a new calculation
- Pressing **Clear** resets everything

---

## Expected Behavior

- Only evaluate **two numbers at a time**
- Chained operations should work correctly  
  Example: `12 + 7 - 1 = 18`
- Do **not** evaluate when operators are pressed consecutively
- Division by zero should show an error message
- Long decimals should be rounded to prevent overflow
- Pressing `=` too early should not break the app

---

## Extra Credit (Optional)

- Decimal input (`.`), limited to one per number
- Backspace button
- Keyboard support

---

## Learning Goals

- Practice DOM manipulation
- Understand state and control flow
- Write clean, predictable logic
- Handle edge cases gracefully
- Build a real, interactive project from scratch

---

## Final Notes

- Commit early and often
- Focus on clarity over cleverness
- Break the problem down into small steps
- I know everything I need to solve this 🎯
