function hitungTotal() {
    var harga = parseFloat(document.getElementById('harga').value);
    var jumlah = parseInt(document.getElementById('jumlah').value);
    var member = document.getElementById('member').checked;
    var diskon = parseFloat(document.getElementById('diskon').value);

    var total;

    if (isNaN(harga) || isNaN(jumlah)) {
        alert('Mohon isi harga dan jumlah tiket dengan angka.');
        return;
    }

    total = harga * jumlah;

    if (member) {
        // Berlaku diskon untuk member
        if (!isNaN(diskon)) {
            total -= diskon;
        }
    }

    document.getElementById('total').value = total.toFixed(2);
}
