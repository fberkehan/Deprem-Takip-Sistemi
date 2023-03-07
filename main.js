
const tableBody = document.getElementById("verileriDondur");
let depremData = [];

function showDepremData() {
  tableBody.innerHTML = "";
  if (depremData.length === 0) {
    document.getElementById("veriUyarisi").style.display = "block";
    return;
  }
  document.getElementById("veriUyarisi").style.display = "none";
  // console.log(depremData);
  depremData.forEach((deprem) => {

    function formatTarih(tarih) {
  const d = new Date(tarih);
  const gun = d.getDate().toString().padStart(2, "0");
  const ay = (d.getMonth() + 1).toString().padStart(2, "0");
  const yil = d.getFullYear();
  return `${gun}/${ay}/${yil}`;
}

function formatSaat(tarih) {
  const d = new Date(tarih);
  const saat = d.getHours().toString().padStart(2, "0");
  const dakika = d.getMinutes().toString().padStart(2, "0");
  return `${saat}:${dakika}`;
}




    const row = `
      <tr onClick="showMap('${deprem.latt}','${deprem.lonn}','${deprem.lokasyon.replace("(", "").replace(")", "")}','${deprem.siddet}','${deprem.tarih}')">
        <td>${deprem.lokasyon}</td>
        <td>${formatTarih(deprem.tarih)}<br/>${formatSaat (deprem.tarih)}</td>
        <td><span class="badge">${deprem.depth} km</span></td>
        <td><span class="badge">${deprem.siddet}</span></td>
      </tr>
    `;


    tableBody.innerHTML += row;
  });
}

function fetchDeprems() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const start = yesterday.toISOString().slice(0, 19).replace("T", " ");
  const end = today.toISOString().slice(0, 19).replace("T", " ");

  const url = `https://cors-anywhere.herokuapp.com/https://deprem.afad.gov.tr/apiv2/event/filter?start=${start}&end=${end}&limit=10000&offset=5&orderby=timedesc`;



  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("API'den veriler alınamadı");
    }
    return response.json();
  })
  .then((data) => {
   
    depremData = data.map((deprem) => {
      return {
        lokasyon: deprem.location,
        tarih: deprem.date.replace('T', ' '),
        depth: deprem.depth,
        siddet: deprem.magnitude,
        latt: deprem.latitude,
        lonn: deprem.longitude,
      };
    });
    showDepremData();
    const loading = document.getElementById("loading");
    loading.style.display = "none";
  })
  .catch((error) => {
    console.error(error);
  });

}

fetchDeprems();












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




var darkModeMu = 0;

function darkModeGecis() {


  if (darkModeMu == 0) {
  halfmoon.toggleDarkMode();

  document.querySelector('.content-wrapper').style.removeProperty('background-color');
  document.querySelector('#morkutucuk').style.removeProperty('background-color');
  document.querySelector('#morkutucuk').style.removeProperty('border');
  document.querySelector('#kapatbutton').style.removeProperty('backgroundColor');
  document.querySelector('#kapatbutton').style.removeProperty('color');

  document.querySelector('.content-wrapper').style.setProperty('background-color', 'white');
  
  document.querySelector('#morkutucuk').style.setProperty('background-color', 'white');
  
  document.querySelector('#morkutucuk').style.setProperty('border', '1px solid black');
  
  document.querySelector('#kapatbutton').style.setProperty('background-color', 'white');
  
  darkModeMu++;
}else {
  halfmoon.toggleDarkMode();

  document.querySelector('.content-wrapper').style.removeProperty('background-color');
  document.querySelector('#morkutucuk').style.removeProperty('background-color');
  document.querySelector('#morkutucuk').style.removeProperty('border');
  document.querySelector('#kapatbutton').style.removeProperty('backgroundColor');
  document.querySelector('#kapatbutton').style.removeProperty('color');


document.querySelector('.content-wrapper').style.setProperty('background-color', 'black');

document.querySelector('#morkutucuk').style.setProperty('background-color', 'black');

document.querySelector('#morkutucuk').style.setProperty('border', '1px solid #6f009d');

document.querySelector('#kapatbutton').style.setProperty('background-color', '#6f009d');

darkModeMu = 0;
}


}