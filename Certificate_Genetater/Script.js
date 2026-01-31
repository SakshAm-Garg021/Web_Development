let qr;

function updateCertificate() {
    let name = document.getElementById("name").value;
    let event = document.getElementById("event").value;
    let certId = document.getElementById("certId").value;

    document.getElementById("cName").innerText = name || "Student Name";
    document.getElementById("cEvent").innerText = event || "Event Name";
    document.getElementById("cId").innerText = certId || "XXXX";

    let verifyURL = `verify.html?id=${certId}`;

    document.getElementById("qrcode").innerHTML = "";
    qr = new QRCode("qrcode", {
        text: verifyURL,
        width: 80,
        height: 80
    });
}
