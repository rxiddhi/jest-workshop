# Jest Workshop Submission

## Student Details
- Name: Riddhi Khera
- Roll Number: 2024-B-02042007
- GitHub Username: rxiddhi

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: No Coupon Cases (2 tests)
**What it protects against:**  
It prevents incorrect pricing calculations when customers checkout without any coupon. It ensures regular pricing works for orders < 1000 and the 5% bulk discount is correctly applied for orders >= 1000.

---

### 2. Test Name: SAVE10 Coupon (2 tests)
**What it protects against:**  
It prevents incorrect discount calculations for the SAVE10 coupon. It ensures the 10% discount is properly applied and the maximum cap of 100 is enforced, preventing excessive discounts on large orders.

---

### 3. Test Name: FLAT50 Boundary Case (2 tests)
**What it protects against:**  
It prevents negative final amounts when FLAT50 coupon is applied to small orders. It ensures the Math.max(0, ...) boundary protection works correctly, so customers never see negative prices.

---

### 4. Test Name: Invalid Subtotal Throws Error (1 test)
**What it protects against:**  
It prevents the system from processing invalid orders with negative amounts. It ensures only valid transactions are processed, protecting against data corruption and financial losses.

---

### 5. Test Name: Case-Insensitive Coupon (1 test)
**What it protects against:**  
It prevents customer frustration when they enter coupon codes in different cases. It ensures coupons work regardless of how users type them (uppercase, lowercase, mixed), improving user experience and preventing lost sales.

---

## CI Pipeline

- GitHub Actions CI implemented: **Yes** ✓
- Workflow file: `.github/workflows/test.yml`
- Runs on: Push to main branch and Pull Requests
- Command: `npm test`
- GitHub Actions Run URL: https://github.com/rxiddhi/jest-workshop/actions

---

## Reflection (1–2 lines)
What is **one thing** you understood better about testing or CI after this workshop?

I learned that small edge cases like zero totals, negative values, or coupon case sensitivity can cause real bugs if not tested properly. CI makes development less stressful because it instantly checks whether new changes break anything.