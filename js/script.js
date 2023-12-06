// // validasi 
// const alas = document.getElementById("alas")
// const tinggi = document.getElementById("tinggi")
// const form = document.getElementById("form")
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//   let message = []
//   if (alas.value === ''|| alas.value == null) {
//     message.push('Alas tidak boleh kosong')
//   }
//   if (message.length > 0) {
//     e.preventDefault()
//     errorElement.innerText = message.join(', ')
//   }
// })



// hitung luas
function hitungLuas() {
  alas=document.getElementById("alas").value;
  tinggi=document.getElementById("tinggi").value;
  luas=(alas*tinggi)*0.5;

  // document.getElementById("luas").value=luas;
  // alert(luas);
  console.log(luas);
  document.getElementById("hasil-luas").value = Math.floor(luas)

}

// hitung keliling segitiga
function hitungKel() {
  s1 = document.getElementById("s1").value
  s2 = document.getElementById("s2").value
  s3 = document.getElementById("s3").value
  kel= (parseInt(s1) + parseInt(s2) + parseInt(s3));

  console.log(kel);
  document.getElementById("hasil-kel").value = Math.floor(kel)
}
