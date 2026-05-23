const BASE_URL = "https://open.er-api.com/v6/latest";

const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
    for (let codes in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = codes;
        newOption.value = codes;

        if (select.name === "from" && codes === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && codes === "INR") {
            newOption.selected = true;
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let img = element.parentElement.querySelector("img");
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Initial flags
for (let select of dropdowns) {
    updateFlag(select);
}

const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let amtVal = parseFloat(amount.value);

    if (isNaN(amtVal) || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
    }

    if (fromCurr.value === toCurr.value) {
        msg.innerText = `${amtVal} ${fromCurr.value} = ${amtVal} ${toCurr.value}`;
        return;
    }

    try {
        msg.innerText = "Fetching...";

        const URL = `${BASE_URL}/${fromCurr.value}`;
        let response = await fetch(URL);

        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

        let data = await response.json();

        if (data.result === "error") {
            throw new Error(data["error-type"] || "API error");
        }

        let rate = data.rates[toCurr.value];
        let finalAmount = (rate * amtVal).toFixed(2);

        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

    } catch (error) {
        msg.innerText = `Error: ${error.message}`;
        console.error("Fetch error:", error);
    }
});