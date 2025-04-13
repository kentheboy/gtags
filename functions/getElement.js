// get entered email value
function () {
    return document.querySelector("[name=mail]").value;
}

// get entered tel value
function () {
    return '+81' + document.querySelector("[name=tel_no]").value.replace(/[^0-9]/g, '').replace('0', '') || "";
}

// get innerText of elements
function () {
    return document.querySelector("XXXXXX").innerText.trim();
}

// get price data
function () {
    return document.querySelector("XXXXXX").innerText.replace(/(¥)/g, '').trim();
}
function () {
    var dataList = document.querySelectorAll(".line-item > p");
    var value = '';
    dataList.forEach(function (elm) {
        if (elm.innerText.includes("注文合計")) {
            value = elm.nextElementSibling.innerText.replace(/[^0-9]/g, '');
        }
    });
    return value;
}