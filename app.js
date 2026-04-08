var coins = [
    "bitcoin",
    "ethereum",
    "solana",
    "binancecoin",
    "ripple",
    "dogecoin",
    "cardano",
    "avalanche-2"
]

function formatPrice(price) {
    if (price >= 1000) {
        return "$" + price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
    if (price >= 1) {
        return "$" + price.toFixed(2)
    }
    return "$" + price.toFixed(5)
}

function formatMarketCap(num) {
    if (num >= 1000000000000) {
        return "$" + (num / 1000000000000).toFixed(2) + "T"
    }
    if (num >= 1000000000) {
        return "$" + (num / 1000000000).toFixed(2) + "B"
    }
    return "$" + (num / 1000000).toFixed(2) + "M"
}

function loadPrices() {
    document.getElementById("lastUpdated").textContent = "Loading..."
    document.getElementById("errorText").style.display = "none"

    var url = "https://api.coingecko.com/api/v3/coins/markets"
        + "?vs_currency=usd"
        + "&ids=" + coins.join(",")
        + "&order=market_cap_desc"
        + "&per_page=10"
        + "&page=1"
        + "&sparkline=false"
        + "&price_change_percentage=24h"

    console.log("fetching crypto prices...")

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            console.log("crypto data:", data)
            showPrices(data)
        })
        .catch(function(error) {
            console.log("error:", error)
            document.getElementById("lastUpdated").textContent = "Error loading data."
            document.getElementById("errorText").style.display = "block"
        })
}

function showPrices(data) {
    var list = document.getElementById("coinList")
    list.innerHTML = ""

    for (var i = 0; i < data.length; i++) {
        var coin = data[i]
        var change = coin.price_change_percentage_24h
        var changeClass = change >= 0 ? "positive" : "negative"
        var changeText = change >= 0 ? "+" + change.toFixed(2) + "%" : change.toFixed(2) + "%"

        var card = document.createElement("div")
        card.className = "coin-card"
        card.innerHTML =
            "<div class='coin-left'>"
            + "<img src='" + coin.image + "' alt='" + coin.name + "' />"
            + "<div>"
            + "<div class='coin-name'>" + coin.name + "</div>"
            + "<div class='coin-symbol'>" + coin.symbol.toUpperCase() + "</div>"
            + "</div>"
            + "</div>"
            + "<div class='coin-meta'>"
            + "<p>Market Cap</p>"
            + "<strong>" + formatMarketCap(coin.market_cap) + "</strong>"
            + "</div>"
            + "<div class='coin-right'>"
            + "<div class='coin-price'>" + formatPrice(coin.current_price) + "</div>"
            + "<div class='coin-change " + changeClass + "'>" + changeText + " (24h)</div>"
            + "</div>"

        list.appendChild(card)
    }

    var now = new Date()
    document.getElementById("lastUpdated").textContent = "Updated: " + now.toLocaleTimeString()
}

loadPrices()

setInterval(function() {
    loadPrices()
}, 60000)
