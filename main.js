

    halfmoon.toggleDarkMode()



    fetch("https://api.orhanaydogdu.com.tr/deprem/live.php")
  .then(response => response.json())
  .then(data => {


    for (let depremVerileri = 0; depremVerileri < data.result.length; depremVerileri++) {


        // console.log(data.result[depremVerileri]);

        const givenDate = new Date(data.result[depremVerileri].date);
        const currentDate = new Date();
        const diffInMinutes = (currentDate - givenDate) / 1000 / 60;
        const hours = Math.floor(diffInMinutes / 60);
        const minutes = Math.floor(diffInMinutes % 60);

     

        if (hours<1) {
          if (minutes<6) {

            if (data.result[depremVerileri].mag>0 && data.result[depremVerileri].mag<4) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td style="color:red;" class="blink">'+minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-primary"><b><b>'+data.result[depremVerileri].mag+'</b></b></span></td></tr>');  
            }
            if (data.result[depremVerileri].mag>4 && data.result[depremVerileri].mag<5) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td style="color:red;" class="blink">'+minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-secondary"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  
            }
            if (data.result[depremVerileri].mag>5 && data.result[depremVerileri].mag<10) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td style="color:red;" class="blink">'+minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-danger"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  

              }
            
          }else{
            if (data.result[depremVerileri].mag>0 && data.result[depremVerileri].mag<3) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td>'+minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-primary"><b><b>'+data.result[depremVerileri].mag+'</b></b></span></td></tr>');  
            }
            if (data.result[depremVerileri].mag>3 && data.result[depremVerileri].mag<4) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td>'+minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-secondary"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  
               }
            if (data.result[depremVerileri].mag>4 && data.result[depremVerileri].mag<10) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td>'+minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-danger"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  
              }
          }
            
        }
        else{

          
            if (data.result[depremVerileri].mag>0 && data.result[depremVerileri].mag<3) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td>'+hours + " sa. " + minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-primary"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  
            }
            if (data.result[depremVerileri].mag>3 && data.result[depremVerileri].mag<4) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td>'+hours + " sa. " + minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-secondary"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  
}
            if (data.result[depremVerileri].mag>4 && data.result[depremVerileri].mag<10) {
                $('#verileriDondur').append('<tr  onClick="showMap('+data.result[depremVerileri].lat+','+data.result[depremVerileri].lng+','+'\''+data.result[depremVerileri].lokasyon.replace("(", "").replace(")", "")+'\''+','+data.result[depremVerileri].mag+','+'\''+data.result[depremVerileri].date+'\''+')"><th>'+data.result[depremVerileri].lokasyon+'</th><td>'+hours + " sa. " + minutes + " dk."+' önce</td><td><span style="background-color: black;border: 1px solid white;text-align:center;" class="badge badge-primary"><b><b>'+data.result[depremVerileri].depth+' KM'+'</b></b></span></td><td><span class="badge badge-danger"><b>'+data.result[depremVerileri].mag+'</b></span></td></tr>');  
            
                }


            
        }

        
    }

    
   
// Tablonun ID'sini seçin
const tabloKontrol = document.getElementById("myTable");

// Tablonun satır sayısını alın
const rowCount = tabloKontrol.rows.length;
// Eğer satır sayısı 0 ise uyarı mesajı gösterin
if (rowCount < 1) {
  alert("Tabloda veri yok!");
  document.getElementById('veriUyarisi').style.display="block";
}


    

  })
  .catch(error => {
    console.error(error);
  });


// Get the table and the buttons
const table = document.getElementById("myTable");
const filter1Button = document.getElementById("filter1");
const filter2Button = document.getElementById("filter2");
const filter3Button = document.getElementById("filter3");

// Add event listeners to the buttons
filter1Button.addEventListener("click", function() {
  filterTable(table, 4, null, false);
});

filter2Button.addEventListener("click", function() {
  filterTable(table, 4, 3, true);
});

filter3Button.addEventListener("click", function() {
  filterTable(table, null, 3, false);
});

filter4Button.addEventListener("click", function() {
  filterTable(table,-Infinity, Infinity);
  });


// Function to filter the table based on the intensity values
function filterTable(table, max, min, between) {
  for (let i = 1; i < table.rows.length; i++) {
    let intensity = parseFloat(table.rows[i].cells[3].textContent);
    let showRow = false;
    if (between) {
      if (intensity > min && intensity < max) {
        showRow = true;
      }
    } else {
      if ((max && intensity > max) || (min && intensity < min)) {
        showRow = true;
      }
    }
    if (showRow) {
      table.rows[i].style.display = "";
    } else {
      table.rows[i].style.display = "none";
    }
  }
}




function showMap(lat, lng, konum, buyukluk, tarih) {


 const konumPopup = document.getElementById("konumPopup");
 const tarihPopup = document.getElementById("tarihPopup");
 const siddetPopup = document.getElementById("siddetPopup");
 const tehlikeDurumuPopup = document.getElementById("tehlikeDurumuPopup");
 const Yapilacaklarr = document.getElementById("Yapilacaklarr");



 const morkutucuk = document.getElementById("morkutucuk");

 morkutucuk.classList.add("animate__animated");

 konumPopup.innerHTML = konum;
 tarihPopup.innerHTML = tarih;
 siddetPopup.innerHTML = buyukluk;


 if (buyukluk>6) {
  tehlikeDurumuPopup.innerHTML = '<span class="badge badge-danger" >Tehlikeli</span> Olarak nitelendirildi.';
  Yapilacaklarr.innerHTML = '<li>Bölgedeki çoğu ev yıkılmış olabilir!</li><li>Yardıma ihtiyacı olan insanlar olabilir!</li><li>Çevre illerden de hissedilen güçlü bir deprem! Yerel afet birimlerine bilgi verin!</li>';
 }

 if (buyukluk>4 && buyukluk<6) {
  tehlikeDurumuPopup.innerHTML = '<span class="badge badge-secondary" >Şiddetli</span> Olarak nitelendirildi.';
  Yapilacaklarr.innerHTML = '<li>Çoğu kişinin hissettiği güçlü bir sarsılma yaşandı.</li><li>Problemli ve eski evler yıkılmış olabilir.</li><li>Bazı eşyalar düşmüş olabilir.</li><li>Yardıma ihtiyacı olan insanlar bulunabilir.</li>';
 }

 if (buyukluk<4) {
  tehlikeDurumuPopup.innerHTML = '<span class="badge badge-primary" >Hafif Sarsıntı</span> Olarak nitelendirildi.';
  Yapilacaklarr.innerHTML = '<li>Bazı kişiler hafif bir sarsılma hissetmiş olabilir.</li><li>Ciddi bir sarsıntı olmadı</li>';
 }






const src = `https://maps.google.com/maps?q=${lat},${lng}&z=9&output=embed`;
document.querySelector("iframe").src = src;
const mapGoster = document.getElementById("mapGoster");
mapGoster.style.display="flex";





}


function showMapClose() {



const mapGoster = document.getElementById("mapGoster");
mapGoster.style.display="none";




}



window.onload = function () {

  const loading = document.getElementById("loading");
  loading.style.display="none";
  
    
  };
