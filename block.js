var e = document.createElement('div');
e.id = 'block';
e.style.display = 'none';
document.body.appendChild(e);

window.addEventListener("load", function () {
    if (!document.getElementById("block")) {
        // Người dùng đang bật AdBlock
        alert("Bạn đang sử dụng AdBlock!");
    }
});

$(window).on("load", function () {
    if (!document.getElementById("block")) {
        // AdBlock đang hoạt động
    }
});