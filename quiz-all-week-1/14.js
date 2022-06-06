//soal 14
/*
 *  Peminjaman komik di taman bacaan
 *  hanya dibolehkan 3hari dihitung saat peminjaman,
 *  lebih dari 6 hari akan dikenakan denda sebesar
 *  Rp.500 tiap komik. biaya komik peminjaman Rp.2000/tiap komik.
 *  buat function dengan :
 *  totalKomikPinjam(starDate,endDate, totalkomik)
 *  startDate : tgl pinjam komik
 *  endDate : tgl kembalikan komik
 *  totalKomik : jumlah komik, maksimal 10 komik
 */

function tagihanKomik(tglPinjam, tglKembali, totalkomik) {
  const pinjam = tglPinjam.split("-").join("");
  const kembali = tglKembali.split("-").join("");

  if (isNaN(pinjam) && isNaN(kembali)) {
    return `Tgl.Pinjam ${tglPinjam} & Tgl.Kembali ${tglKembali} not valid formated date`;
  } else if (isNaN(pinjam)) {
    return `Tgl.Pinjam ${tglPinjam} not valid formated date`;
  } else if (isNaN(kembali)) {
    return `Tgl.Kembali ${tglKembali} not valid formated date`;
  } else if (totalkomik >= 10) {
    return `Peminjaman komik maksimal 10`;
  }

  const total = totalKomikPinjam(tglPinjam, tglKembali, totalkomik);
  return total;
}

function totalKomikPinjam(startDate, endDate, jumlahKomik) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let hari = 0;
  let totalKomik = 0;
  let tagihan = 0;
  const harga = 2000;
  const denda = 500;
  if (end.getDate() - start.getDate() <= 6) {
    hari += end.getDate() - start.getDate();
    totalKomik += jumlahKomik;
    tagihan += hari * harga * totalKomik;
    return `
    Total Hari = ${hari}
    Total Komik = ${totalKomik} x ${harga}
    ------------------------
    Total Tagihan = Rp.${tagihan}`;
  } else if (end.getDate() - start.getDate() >= 6) {
    hari += end.getDate() - start.getDate();
    totalKomik += jumlahKomik;
    tagihan += hari * (harga + denda) * totalKomik;
    return `
    Total Hari = ${hari}
    Total Komik = ${totalKomik} x ${harga + denda}
    ------------------------
    Total Tagihan = Rp.${tagihan}`;
  }
}

console.log(tagihanKomik("09-03-20xx", "09-06-2021", 4)); //Tgl.Pinjam 09-03-20xx not valid formated date
console.log(tagihanKomik("09-03-2021", "09-mm-2021", 4)); //Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-20xx", "09-mm-2021", 4)); //Tgl.Pinjam 09-03-20xx & Tgl.Kembali 09-mm-2021 not valid formated date
console.log(tagihanKomik("09-03-2021", "09-12-2021", 4));
/**
//  Total Hari = 3
//  Total Komik = 4 x 2500
//  ------------------------
//  Total Tagihan =Rp.30000
//  */
