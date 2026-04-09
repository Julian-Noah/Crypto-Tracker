# Crypto Tracker 📈

This is my sixth independent project built during my web development journey — and the first one I built completely on my own, without any course or platform like Scrimba guiding me. A clean crypto tracker that fetches live prices and 24h changes for the most popular cryptocurrencies.

## 🔗 Live Demo
[https://crypto-tracker44.netlify.app/](https://crypto-tracker44.netlify.app/)

## 🛠 Tech Stack
* **HTML5** - For the structure of the app
* **CSS3** - For styling and layout
* **JavaScript** - For API calls and dynamic rendering
* **CoinGecko API** - For free real-time crypto price data

## 🧠 What I focused on in this project:
* **Working with APIs:** Fetching live crypto data from the CoinGecko public API without needing an API key
* **Fetch & Promises:** Using `fetch()` with `.then()` chains to handle asynchronous data loading — the same pattern I learned from my weather app
* **Dynamic DOM Rendering:** Building each coin card programmatically with `document.createElement` and `innerHTML`
* **Number Formatting:** Writing helper functions to format prices and market caps cleanly (e.g. $1.23T, $456.78B)
* **Auto-Refresh:** Implementing a `setInterval` to automatically refresh prices every 60 seconds
* **UX Details:** Color-coded 24h price changes (green/red), coin logos, and a manual refresh button

## 🚀 Upcoming Features
* Search / filter coins by name
* Toggle between USD and EUR
* Add more coins to the list

---
Created by Julian Schütt – 2026
