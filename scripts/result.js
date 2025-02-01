const rezultat = localStorage.getItem('rezultat');
const rezultatContainer = document.getElementById('rezultat');
const opisContainer = document.getElementById('opis');

if (rezultat) {
  rezultatContainer.textContent = rezultat;

  switch (rezultat) {
    case 'Nogomet':
      opisContainer.textContent = 'Nogomet je sport u kojem igraju dva tima od po 11 igrača. Ako voliš akciju i timsku igru, nogomet je pravi izbor za tebe!';
      document.body.style.backgroundImage = 'url("../images/soccer-ball-goal.webp")';
      break;
    case 'Rukomet':
      opisContainer.textContent = 'Rukomet je timski sport u kojem dva tima pokušavaju postići gol. Ako voliš brzu igru i fizičke izazove, rukomet je tvoj sport!';
      document.body.style.backgroundImage = 'url("../images/handballPhoto.jpg")';
      break;
    case 'Tenis':
      opisContainer.textContent = 'Tenis je sport u kojem dva igrača koriste rekete. Ako voliš preciznost i individualnu konkurenciju, tenis je za tebe!';
      document.body.style.backgroundImage = 'url("../images/tennisPhoto.jpg")';
      break;
    case 'Boks':
      opisContainer.textContent = 'Boks je borilački sport u kojem se dva natjecatelja udaraju šakama na kojima imaju rukavice. Ako voliš izazove i izdržljivost, boks može biti tvoj sport!';
      document.body.style.backgroundImage = 'url("../images/boxingPhoto.webp")';
      break;
    case 'Plivanje':
      opisContainer.textContent = 'Plivanje je sport u kojem natjecatelji plivaju u različitim disciplinama. Ako voliš vježbanje u vodi, plivanje je odličan izbor!';
      document.body.style.backgroundImage = 'url("../images/swimmingPhoto.jpg")';
      break;
    case 'Vaterpolo':
      opisContainer.textContent = 'Vaterpolo je timski sport u vodi. Ako voliš strategiju i timsku igru u vodi, vaterpolo je pravi sport za tebe!';
      document.body.style.backgroundImage = 'url("../images/waterpoloPhoto.jpg")';
      break;
    default:
      opisContainer.textContent = 'Nismo uspjeli odrediti sport. Pokušaj ponovno!';
  }

  document.body.style.backgroundSize = 'cover'; 
  document.body.style.backgroundRepeat = 'no-repeat'; 
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundAttachment = 'fixed';

} else {
  rezultatContainer.textContent = 'Nema podataka o rezultatu!';
}
