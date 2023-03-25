/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
 *
 * Document Object Model (DOM) - przeglądarka interpretuje kod HTML i dostarcza obiekt, który JS jest w stanie odczytywać i modyfikować
 *
 * najprościej mówiąc DOM dostarcza nam obiekt który nazywa się "document" i ten obiekt ma bardzo bardzo bardzo dużo
 * różnych pól i metod które pozwalają na interakcje z HTMLem
 *
 */

/**
 * Tworzenie elementu
 *
 * 1) createElement
 *
 * 2) template string (backticki - znaki pojedynczego cudzysłowia pod klawiszem esc) + właściwości/pola innerHTML/innerText
 *
 */

const div1 = `<div></div>`;

const div = document.createElement("div");

div.classList.add("jakas-testowa-klasa");

/**
 * Osadzanie nowostworzonego elementu w elemncie body
 */

// https://developer.mozilla.org/en-US/docs/Web/API/Document/write
// 1) document.write ❌

// 2) document.body... ✅

// document.body.appendChild(div);

/**
 * Pobieranie elementów z dokumentu HTML
 */

// 1) metoda querySelector

const h1_1 = document.querySelector("h1");

const h1_2 = document.querySelector("#heading");

console.log(h1_1);
console.log(h1_2);

// 2) metoda getElementById

const h1_3 = document.getElementById("heading");

// 3) metoda getElementsByClassName

const superDivs = document.getElementsByClassName("super-div");

console.log(superDivs);

const superDivsArray = Array.from(superDivs);

console.log(superDivsArray);

/**
 * Zadanie
 *
 * stwórz dowolny element htmlowy w pliku index.html
 * dodaj mu potrzebne atrubuty i spróbuj go pobrać nowo poznanymi Ci metodami
 * wynik przypisz do zmiennej po czym wykonsoluj zmienną z pobranym element (console.log)
 */

const blogPostSection = document.getElementById("blog-post");

/**
 * manipulowanie classami - lista klas jest dostępna pod polem classList
 * dodatkowo można manipulować tymi klasami przy pomocy szerokiej gamy metod dostępnej też pod tym polem
 */

console.log(blogPostSection.classList);

blogPostSection.classList.remove("text-bold");

const result = blogPostSection.classList.contains("text-bold");

if (result === true) {
  console.log("blog post jest napisany pogrubioną czcionką");
} else {
  console.log("blog post jest napisany normalną czcionką");
}

/**
 * bezpośrednie stylowanie elementu
 * element.style = '';
 */

blogPostSection.style.color = "#fff";
blogPostSection.style.fontSize = "30px";

const h2 = document.createElement("h2");

const span = `<span>Testowa tresc</span>`;

h2.innerHTML = span;

/**
 * Wstawianie elementu / osadzanie w dowolnym miejscu w dokumencie
 */

// blogPostSection.appendChild(h2);

/**
 * Ustawianie/setowanie atrubutów na przykładzie checkboxa
 */

const checkbox = document.querySelector("#checkbox");

console.log(checkbox);

checkbox.setAttribute("checked", "");

/**
 * Usuwanie elementu - metoda remove dostępna na elemencie HTML/Nodzie
 */

checkbox.remove();

/**
 * Stwórz sekcje za pomocą metody createElement który będzie wrapperem na wpis na blogu
 *
 * niech wpis na blogu zawiera nagłówek h2 oraz 2 paragafy z tekstem
 *
 * nagłówek h2 i paragrafy niech będą stworzone jako string (html in js)
 *
 * do nowostowrzonego obiektu seckji przypisz za pomocą pola innerHTML elmentu h2 i p
 *
 * umieść sekcjie w istniejącej sekcji blog-post
 */

// podejście 1
const sectionNew = document.getElementById("blog-post");

const section = document.createElement("section");

const post = `
    <h2>Nagłówek</h2>
    <p>TEKST WPISU NA BLOGA</p>
    <p>TEKST WPISU NA BLOGA druga część</p>
`;

// section.innerHTML = post;

// sectionNew.appendChild(section);

// podejście 2
const divBlog = document.createElement("div");

const heading2 = `<h2>Lorem ipsun</h2>`;

const p = `<p>Lorem lorem</p>, <p>Lorem ipsum2</p>`;

// divBlog.innerHTML = `${heading2} ${p}`;

// sectionNew.appendChild(divBlog);

/**
 * tworzenie elementów HTMLowych w JSie
 */

// 1) za pomocą stringa
const przykladowyDiv = '<div class="super-div">Jakis tekst</div>';

// 2) za pomocą metody dostępnej na obiekcie document
const przykladowyDiv1 = document.createElement("div");

// przykladowyDiv1.innerHTML = '<div class="super-div">Jakis tekst</div>';

// pobranyElement to zmienna która przchowuje sekcje HTMLową jako obiekt JSowy
// <section> innerHTML/innerText/appendChild() </section>
const pobranyElement = document.getElementById("blog-post");

// pobranyElement.innerHTML = przykladowyDiv;
// pobranyElement.appendChild(przykladowyDiv1);

/**
 * Zadanie
 *
 * Stwórz w JSie element html div który będzie miał 100px szerokości i 100px wysokości
 * oraz dowolny kolor
 *
 * niech ten div ma w sobie zagnieżdzony kolejny div który będzie miał 50% szerokości i wyskokści oraz inny kolor od rodzica
 *
 * zakoduj też następujący scenariusz:
 *
 * niech:
 *  po 3 sekundach element ten zwiększy swoją wysokość i szerokosc o 100px na każdą długość
 *  po 8 sekundach usuń element
 *
 */

// const newDiv = document.createElement("div");
// newDiv.style.width = "100px";
// newDiv.style.height = "100px";
// newDiv.style.color = "#ff6";
// newDiv.style.background = "#ff6";

// document.body.appendChild(newDiv);
// const newDiv2 = document.createElement("div");
// newDiv2.style.width = "50%";
// newDiv2.style.height = "50%";
// newDiv2.style.backgroundColor = "red";
// newDiv.appendChild(newDiv2);

// setTimeout(() => {
//   newDiv.style.width = "200px";
//   newDiv.style.height = "200px";
// }, 3000);

// setTimeout(() => {
//   newDiv.remove();
// }, 8000);

/**
 * Zadanie
 *
 * Przekopiuj jedno z zadań z poprzedniego modułu (002_html_in_js) któro wymagało stworzenia struktury HTML w zmiennej
 * i umieść tą strukturę w wybranym miejscu na stronie za pomocą pola innerHTML
 *
 *
 * możesz stworzyć dodatkowy element w pliku HTML lub w JSie
 * i dopiero osadzić przekopiowaną strukture HTML
 *
 * experymentuj a w razie coś pytaj😀
 *
 * 1a) stworzenie nowego elementu
 * 1b) pobranie istniejacego elementu
 *
 * 2) przekopiowany kod z folderu 002_html_in_js a dokładniej zmienną która przchowuje
 * strukturę HTML przypisujecie do pole .innerHTML pobranego lub nowostworzonego elementu
 *
 */

const users = [
  { name: "Jane", lastName: "Doe", age: 20 },
  { name: "Jack", lastName: "Jake", age: 15 },
  { name: "John", lastName: "Doe", age: 30 },
  { name: "Jerry", lastName: "Smith", age: 50 },
];

let htmlTable2 = `

`;

users.forEach((user, index) => {
  htmlTable2 =
    htmlTable2 +
    `
      <tr style="border: 1px solid black">
        <td>${user.name}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
      </tr>
    `;
});

htmlTable2 = `
  <table>
    <tbody>
      ${htmlTable2}
    </tbody>
  </table>
  `;

const usersTableContainer = document.getElementById("users-table-container");

usersTableContainer.innerHTML = htmlTable2;

/*
    Zadanie

    umieść zmienną htmlList która przechowuje liste HTMLową  w dokumencie index.html

    dodatkowo spopuluj list itemy zmiennymi taskN
*/

const task1 = "Eat";
const task2 = "Sleep";
const task3 = "Code";
const task4 = "Repeat";

const htmlList = `
    <ul>
        <li>${task1}</li>
        <li>${task2}</li>
        <li>${task3}</li>
        <li>${task4}</li>
    </ul>
`;

const listContainer = document.getElementById("list-container");

console.log(listContainer);

listContainer.innerHTML = htmlList;

/**
 * Zadanie ⭐⭐
 *
 * pobierz element po id-ku znaną Ci metodą i przypisz go do zmiennej o dowolnej nazwie (sugestia: flexContainer)
 *
 * ustaw interwał czasowy (setInterval) który będzie co 2 sekundy wybierał z tablicy klas randomową klasę i ustawiał ją
 * jako klase elementu flexContainer pamiętaj o usunięciu klasy z poprzedniego wywołania
 *
 * do wylosowania randomowej liczy z przedziału możesz zaimplementować funkcje bądź skorzystać z dobrodziejstw internetu
 * https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
 *
 * jeżeli chcesz gotowca to patrz hint3
 *
 * hint1: przypisz klase bezpośrednio do pola classList
 * hint2: żeby pominąć pisanie nie potrzebnej logiki sprawdzającej jakie klasy są w danym elemencie możesz przypisać
 * do classList wartości randomowej plus "flex-container" która była na początku i jest potrzebna do tego żeby element dalej
 * był flex kontenerem
 *
 * hint3: do wylosowania randomowej liczby z przedziału możesz użyć funkcji poniżej i wywoływać ją w interwale z parametrami 0 oraz 2
 *
 * function randomIntFromInterval(min, max) {
 *  return Math.floor(Math.random() * (max - min + 1) + min)
 * }
 *
 */
