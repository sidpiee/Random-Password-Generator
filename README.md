# 🔐 Random Password Generator (React + Tailwind)

A modern **Random Password Generator** built using **React** and **Tailwind CSS**.  
It allows users to generate secure passwords with adjustable length and optional inclusion of **numbers** and **special characters** via checkboxes.

The password updates automatically whenever options change using React hooks.

---

## ✨ Features

- Random password generation
- Slider to control password length (8–15)
- Checkbox toggles for:
  - Numbers
  - Special Characters
- Auto-regenerates password on every change
- One-click copy to clipboard
- Responsive UI styled with Tailwind CSS

---

## 🛠️ Tech Stack

- React
- Tailwind CSS
- JavaScript

---

## ⚙️ Logic Overview

- Base characters (`a-z` and `A-Z`) are always included.
- Numbers (`0-9`) and special characters (`!@#$%^&*`) are conditionally added.

- Clipboard API copies the generated password.

---
