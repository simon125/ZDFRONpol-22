/**
 * Eventy, event listnery - interakcja z UI
 */

/**
 * Procedura/flow nasłuchiwania na eventy
 *
 * 1) pobranie elementu i przypisanie go do zmiennej (można też nie przypisywać ale często się jednak tak robi)
 * 2) wywołanie metody addEventListener która jest dostępna na dowolnym elmenecie htmlowym który mamy w pamięci programu
 * np w zmiennej (patrz punkt 1)
 * 3) addEventListener przyjmuje co najmniej dwa argumenty
 *   - typ eventu - w przeglądarce mamy ich sporo
 *   - funkcje (callback) który ma się wykonać w momencie wystąpienia eventu
 *
 */

const body1 = document.body;

const body2 = document.querySelector("body");

// body1.addEventListener("click", (event) => {
//   console.log(event);
//   const element = event.target;

//   // tak jak byśmy zrobili getElementById lub querySelector
//   // ale selector jest określony miejscem kliknięcia

//   console.log("Click");
// });

/**
 * przyciski usuwanie elementu
 *
 * przykład
 */

/**
 * Zadanie
 *
 * Na podstawie przykładu dodaj kolejne idki do przycisków tak żeby obsłużyć każdy z nich - dzięki temu po
 * wciśnieciu dowolnego przycisku usuń dany wiersz
 * - element powinien zostać usunięty z dokumentu
 * - możesz edytować plik index.html (np dodać idki do buttonów)
 *
 */

const deleteButton1 = document.querySelector("#deleteButton1");
const deleteButton2 = document.querySelector("#deleteButton2");
const deleteButton3 = document.querySelector("#deleteButton3");
const deleteButton4 = document.querySelector("#deleteButton4");

const handleDeleteButtonClick = (event) => {
  // event.target.parentNode.parentNode.remove();

  const button = event.target;

  const td = button.parentNode;

  const tr = td.parentNode;

  tr.remove();
};

// deleteButton1.addEventListener("click", handleDeleteButtonClick);
// deleteButton2.addEventListener("click", handleDeleteButtonClick);
// deleteButton3.addEventListener("click", handleDeleteButtonClick);
// deleteButton4.addEventListener("click", handleDeleteButtonClick);

// const allDeleteButtons = document.querySelectorAll(".deleteButton");

// for (const button of allDeleteButtons) {
//   button.addEventListener("click", (event) => {
//     event.target.parentNode.parentNode.remove();
//   });
// }

/**
 * Stety/niestety to co zrobiliśmy nie jest najlepszym podejściem do usuwania elementów i obługi
 * przycisków usuwania w tabeli
 *
 * Na pomoc przychodzi
 *
 * Delegacja zdarzeń czyli fachowa obsługa zdarzeń które występują w tabelce
 *
 */

/**
 * DELEGACJA ZDARZEŃ OMÓWIENIE
 */

document
  .querySelector("#usersStaticTable")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
      // event.target.parentNode.parentNode.remove();

      const button = event.target;

      const td = button.parentNode;

      const tr = td.parentNode;

      tr.remove();
    } else {
      console.log("Nie trafiłeś w delete buttona");
    }
  });

/**
 * Zadanie
 *
 * Pod tabelką znajdują się 4 przyciski z labelkami
 * Green Red Blue oraz Yellow
 * Twoim zadaniem jest nasłuchiwanie zdarzeń na kliknięcie w obrębie diva który jest kontenerem (rodzicem) przycisków (delegacja zdarzeń)
 * posiada on id colorSwitch którego możesz użyć do pobrania elementu
 *
 * zadanie polega na tym żeby zmienić kolor tła tabelki (albo elementu body wersja prostsza) na taki jaki jest określony
 * w labelce przycisku - możesz ale nie musisz edytować kod html np żeby dodać odpowiednie idki lub klasy,
 * najprościej taki efekt możesz osiągnąć przypisując bezpośrednio style do pobranego wcześniej elementu table
 *
 *
 * hint:
 * Zadanie krok po kroku:
 *  1) pobierz element rodzica przycisków z labelkami Green Red Blue oraz Yellow i przypisz go do zmiennej
 *  2) dodaj nasłuchiwanie zdarzeń przy pomocy metody addEventListener - typ eventu to 'click'
 *  3) dodaj funkcje callback do eventListenera który będzie zawierał logikę oraz akcje zmieniania koloru
 *  4) zmienić kolor tabelki możesz osiagnąć pobierając element tabelki i ustawienie/przypisanie odpowiedniego koloru
 *     określonego w labelce klikniętego buttonu - dla ułatwienia możesz dodać różne id-ki do buttonów
 *  5) posiadając tabelke w zmiennej np usersTable możesz się odnieść do styli używajac pola style
 */

// const table1 = document.querySelector("#usersStaticTable");
// const usersTable = document.querySelector("#colorSwitch");

// usersTable.addEventListener("click", (event) => {
//   if (event.target.classList.contains("green")) {
//     table1.style.backgroundColor = "green";
//   } else if (event.target.classList.contains("red")) {
//     table1.style.backgroundColor = "red";
//   } else if (event.target.classList.contains("blue")) {
//     table1.style.backgroundColor = "blue";
//   } else {
//     table1.style.backgroundColor = "yellow";
//   }
// });

// const table1 = document.querySelector("#usersStaticTable");
// document.querySelector("#colorSwitch").addEventListener("click", (event) => {
//   const classes = event.target.classList;

//   if (classes.contains("green")) {
//     table1.style.background = "green";
//   } else if (classes.contains("red")) {
//     table1.style.background = "red";
//   } else if (classes.contains("blue")) {
//     table1.style.background = "blue";
//   } else if (classes.contains("yellow")) {
//     table1.style.background = "yellow";
//   }
// });

// const table1 = document.querySelector("#usersStaticTable");

// document.querySelector("#colorSwitch").addEventListener("click", (event) => {
//   if (event.target.classList.contains("button")) {
//     table1.style.backgroundColor = event.target.innerText;
//   }
// });

// const colorSwitch = document.querySelector("#colorSwitch");
// const table = document.querySelector("table");

// colorSwitch.addEventListener("click", (event) => {
//   const color = event.target.innerText;
//   table.style.backgroundColor = color;
// });

/**
 * Inputy & Formularze
 *
 * na przykładzie
 * inputów typu text oraz checkbox oraz selecta
 */

// const testInputText = document.querySelector('input[name="testInput"]');

const output = document.getElementById("output");

// Kod odpowiedzialny za input textowy
const testInputText = document.querySelector("#testInput");

testInputText.addEventListener("input", (event) => {
  const input = event.target;

  const inputValue = input.value;

  // wstawienie wartości z inputu pomiędzy spana o idku output (patrz html)
  output.innerText = inputValue;
});

// Kod odpowiedzialny za input selecta

const testSelect = document.getElementById("testSelect");

testSelect.addEventListener("change", (event) => {
  const select = event.target;

  // wstawienie wybranej opcji z selecta pomiędzy spana o idku output (patrz html)
  output.innerText = select.value;
});

// Kod odpowiedzialny za input checkboxa

const testCheckbox = document.getElementById("testCheckbox");

testCheckbox.addEventListener("change", (event) => {
  const checkbox = event.target;

  output.innerText = checkbox.checked
    ? "Checkbox jest zaznaczony"
    : "Checkbox jest odznaczony";

  //   console.log(checkbox.checked);
});

const testButton = document.getElementById("testButton");

testButton.addEventListener("click", () => {
  const obiekt = {
    wartoscZInputu: testInputText.value,
    wartoscZSelecta: testSelect.value,
    wartoscZCheckboxa: testCheckbox.checked,
  };

  console.log(obiekt);
});

/**
 * Formularz do tworzenia nowego użytkownika
 *
 * przykład bez wyświetlenia w tabelce
 */

const userNameInput = document.querySelector("#name");

const userLastNameInput = document.querySelector("#lastName");

const userAgeInput = document.getElementById("age");

// kliknąć submit

const submitButton = document.querySelector("#userFormSubmitButton");

/**
 * Zadanie
 *
 * userNameInput.value == "" || userLastnameInput.value == "" || userAgeInput.value == ""
 *
 * Dla przećwiczenia nowo zdobytej wiedzy dodaj do formularza
 * dodatkowe 2 inputy (tekstowe) do wprowadzenia lastName oraz age - żeby zrealizować zadanie
 * musisz zaktualizować plik index.html o odpowiednie inputy - użyj istniejącego inputu (name) jako wzór
 *
 * Wartości z inputów należy wyciągnąć w taki sam sposób jak wartość z inputa name
 * wyciągnięte wartosci przypisz do zmiennch które wykorzystasz jako nowe pola w obiekcie user
 *
 */

/**
 * Zadanie
 *
 * W module 002_html_in_js często opieralismy się o tablice takie jak teraz stworzyliśmy za pomocą formularza
 * wykorzystaj wiedzę zdobytą w module 002_html_in_js i stwórz tabelkę HTMLową zapisaną w stringu
 * zauważ że w pliku index.html jest już podstawowa struktura tabelki wraz z tagiem tbody
 * jednak jest to tabela pusta bez tr-ek (ale już nie długo)
 *
 * na podstawie tablicy (users) z poprzedniego zadania zbuduj stringa który będzie zawierał
 * tagi tr zpopulowane danymi z tablicy
 *
 * const przykladowyOczekiwanyString = `
 *  <tr>
 *      <td>Dane z tablicy</td>
 *      <td>Dane z tablicy</td>
 *      <td>Dane z tablicy</td>
 *  </tr>
 *  <tr>
 *      <td>Dane z tablicy</td>
 *      <td>Dane z tablicy</td>
 *      <td>Dane z tablicy</td>
 *  </tr>
 * `
 *
 *
 * 1) pobierz element tbody w którym umieścisz TRki i przypisz go do zmiennej
 * 2) stwórz strukturę htmlową (tr-ki) spopulowane danymi z tablicy users (patrz parametr)
 *    wynik przypisz do zmiennej htmlTRs
 * 3) przypisz tę strukturę do pola pobranego tbody.innerHTML
 * 4) wywołaj tę funkcję w momencie kliknięcia po tym jak dodasz nowo stworzonego usera do tablicy (push)
 * 5) pamiętaj o przekazaniu parametru users
 *
 */

/**
 * users - stan aplikacji - tablica użytkowników którą populujemy użytkownikami z formularza
 */
let users = [];

let users1 = [
  { name: "Jane", lastName: "Doe", age: 20 },
  { name: "Jack", lastName: "Jake", age: 15 },
  { name: "John", lastName: "Doe", age: 30 },
  { name: "Jerry", lastName: "Smith", age: 50 },
];

/**
 *  rawUsers - tablica użytkowników
 *  dzięki temu że mamy parametr (rawUsers - nazwa dowolna)
 *  możemy wywoałć tę funkcję dla każdej innej tablicy np users1
 */
function renderUsersTable(rawUsers) {
  const tbody = document.getElementById("dynamic-users");
  let tableRows = ""; // <tr> <td>NAME</td>  <td>LAST NAME</td>  <td>AGE</td> </tr>

  rawUsers.forEach((rawUser) => {
    tableRows =
      tableRows +
      `
            <tr>
                <td>
                   ${rawUser.name}
                </td>
                <td>
                   ${rawUser.lastName}
                </td>
                <td>
                   ${rawUser.age}
                </td>
                <td>
                    <button class="deleteButton" id="${rawUser.id}">
                        DELETE
                    </button>
                </td>
            </tr>
        `;
  });

  tbody.innerHTML = tableRows;
}

submitButton.addEventListener("click", () => {
  const user = {
    id: Math.random(),
    name: userNameInput.value,
    lastName: userLastNameInput.value,
    age: userAgeInput.value,
  };

  users.push(user);

  renderUsersTable(users);

  console.table(users);

  userNameInput.value = "";
  userLastNameInput.value = "";
  userAgeInput.value = "";
});

/**
 * Zadanie
 *
 * Na podstawie przykładu poprzedniej tabeli spróbuj wykonać usuwanie
 * elementu po przyciśnieciu przycisku, użyj delegacji zdarzeń czyli dodaj jedno nasłuchiwanie na
 * klikniecie w obrębie tabelki i sprawdzaj kliknięty element jeżeli jest to delete button - usuń wiersz
 *
 * 
 *  
   <td>
        <button class="delteButton">
            DELETE
        </button>
    </td>
 */

document.getElementById("dynamic-users").addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
    console.log("Usuwanie elementu");

    const deleteButton = event.target;

    console.log(
      `ID usera któro przekazaliśmy jako atrubut htmlowy ID: ${deleteButton.id}`
    );

    /**
     * na podstawie deleteButton.id któro defacto jest idkiem usera - usuwamy element z tablicy users o takim
     * samym id
     */

    //  users =  users.filter(/* logika usuwająca usera o podanym id */)

    const idUseraKtoregoChcemyUsunac = deleteButton.id;

    users = users.filter((user) => {
      console.log({
        idUseraKtoregoChcemyUsunac,
        aktualneId: user.id,
      });

      return user.id !== Number(idUseraKtoregoChcemyUsunac);
    });

    renderUsersTable(users);
  }
});
