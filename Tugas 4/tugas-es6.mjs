const transaksi = [
    {id: 1, barang: "Buku", harga: 5000, qty: 4, kategori: "ATK"},
    {id: 2, barang: "Pensil", harga: 3000, qty: 5, kategori: "ATK"},
    {id: 3, barang: "Binder", harga: 12_000, qty: 2, kategori: "ATK"},
    {id: 4, barang: "Mouse", harga: 150_000, qty: 1, kategori: "Elektronik"},
    {id: 5, barang: "Powerbank", harga: 120_000, qty: 2, kategori: "Elektronik"},
    {id: 6, barang: "Tipe-x", harga: 5000, qty: 3, kategori: "ATK"},
    {id: 7, barang: "Pulpen", harga: 4000, qty: 4, kategori: "ATK"},
    {id: 8, barang: "Charger", harga: 80_000, qty: 2, kategori: "Elektronik"},
];

const tampilkanTransaksi = ({id, barang, harga, qty, kategori }) => {
    return {id, barang, harga, qty, kategori };
};

const transaksiATK = transaksi.filter(
    ({ kategori }) => kategori === "ATK"
);

const transaksiSubtotal = transaksi.map (
    ({ id, barang, harga, qty, kategori}) => ({
        id,
        barang,
        harga,
        qty,
        kategori,
        subtotal: harga * qty
    })
);

const totalBelanja = transaksiSubtotal.reduce(
    (total, {subtotal}) => total + subtotal,
    0
);

const totalATK = transaksiSubtotal
    .filter(({kategori}) => kategori === "ATK")
    .reduce((total, {subtotal}) => total + subtotal, 0);



console.log("=== DATA TRANSAKSI ===");
transaksiSubtotal.forEach(({ barang, subtotal }) =>
    console.log(`${barang}: Rp${subtotal}`)
);

console.log("\nTransaksi ATK:");
transaksiATK.forEach(({ barang }) =>
    console.log(barang)
);

console.log("\nTotal Belanja: Rp" + totalBelanja);
console.log("Total ATK: Rp" + totalATK);