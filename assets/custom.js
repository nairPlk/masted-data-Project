
// Data Table Data Pelanggan



// Menampilkan Jam

function updateJam(){
    const tanggalSekarang = new Date();
  // var jam = now.getHours();
  const teks = document.getElementById('teks1');
  teks.innerHTML = tanggalSekarang.toLocaleDateString() + ' ' + tanggalSekarang.toLocaleTimeString();
//   var now = new Date();
//   var hours = now.getHours();
//   var minutes = now.getMinutes();
//   var seconds = now.getSeconds();

// // format the time as HH:MM:SS with leading zeros
//    var timeString = hours.toString().padStart(2, '0') + ':' + 
//                  minutes.toString().padStart(2, '0') + ':' + 
//                  seconds.toString().padStart(2, '0');

// // update the content of the clock element
//    document.getElementById('teks1').innerHTML = timeString;
}
setInterval(updateJam, 1000);





