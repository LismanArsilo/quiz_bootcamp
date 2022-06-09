//soal 15
/**
    Buat function untuk membayar cicilan angsuran rumah,
    diketahui angsuran rumah per bulan Rp.3.500.000,

    function payment(tglBayar,tglJatuhTempo,cicilan);
    jika penghuni telat membayar dari tgl jatuh tempo
    akan dikenakan denda sebesar 2 mile/hari atau 2/1000 dari total angsuran.
    Pembayaran dapat dilakukan paling cepat 5 hari sebelum jatuh tempo.
 */

function payment(tglBayar, tglJatuhTempo, cicilan) {
  const bayar = new Date(tglBayar);
  const tempo = new Date(tglJatuhTempo);
  const angsuran = 3500000;
  let pembayaran = differenceInDays(tglBayar, tglJatuhTempo);
  let denda = 0;
  if (cicilan < angsuran) {
    return `Angsuran anda kurang dari Rp ${angsuran.toLocaleString(
      "id-ID"
    )} Silahkan isi sesuai angsuran`;
  }
  if (pembayaran < 0) {
    denda += Math.abs(pembayaran) * (angsuran * (2 / 1000));
  }
  if (pembayaran > 0 && pembayaran <= 5) {
    pembayaran = 0;
  } else if (pembayaran > 5) {
    return `Tagihan bulan ${bayar.getMonth()} belum tersedia`;
  }
  const tagihan = showTagihan(
    bayar,
    tempo,
    angsuran,
    cicilan,
    pembayaran,
    denda
  );
  return tagihan;
}

function showTagihan(payDate, dueDate, angsuran, cicilan, terlambat, denda) {
  const total = angsuran + denda;
  if (total > cicilan) {
    return `Angsuran anda kurang karena terkena denda Rp. ${denda}. Tagihan anda menjadi Rp. ${total.toLocaleString(
      "id-ID"
    )}  `;
  } else if (total === cicilan) {
    return ` --------------------------
        Tanggal Bayar : ${Intl.DateTimeFormat("id-ID").format(payDate)}
        Jatuh Tempo :  ${Intl.DateTimeFormat("id-ID").format(dueDate)}
        --------------------------
        Tagihan bulan ${
          payDate.getMonth() + 1
        },${payDate.getFullYear()} = Rp. ${angsuran.toLocaleString("id-ID")}
        Denda = Rp.${denda} (terlambat ${Math.abs(terlambat)} hari)
        Total = Rp.${total.toLocaleString("id-ID")} (lunas)
        --------------------------
        Kwitansi ini sebagai alat bukti pembayaran`;
  }
}

function differenceInDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  let tanggal = 0;

  tanggal += end.getDate() - start.getDate();
  return tanggal;
}

console.log(payment("09/30/2021", "09/27/2021", 50000)); //Angsuran anda kurang dari Rp 3.500.000,00. Silahkan isi sesuai angsuran
console.log(payment("09/21/2021", "09/27/2021", 3500000)); //Tagihan bulan 8 belum tersedia
console.log(payment("09/27/2021", "09/27/2021", 3500000));
/**
     --------------------------
          Tanggal Bayar : 27/9/2021
          Jatuh Tempo :  27/9/2021
          --------------------------
          Tagihan bulan 9,2021 = Rp.3500000
          Denda = Rp.0 (terlambat 0 hari)
          Total = Rp.3500000 (lunas)
          --------------------------
          Kwitansi ini sebagai alat bukti pembayaran
     */
