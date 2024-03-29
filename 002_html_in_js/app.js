/**
 * Przed rozpoczęciem kilka słów o tym jak pracować z tym plikiem
 *
 * 1) zadania możesz uruchomić dzięki uruchomieniu pliku index.html w przeglądarce - pamiętaj o połączeniu skryptu do pliku html
 * 2) zadania oznaczone ⭐ są dla chętnych oraz dla tych co skończyli zadania bez oznaczeń
 *    Do rozwiązywania zadań możesz praktycznie wszystko (chyba że w zadaniu jest opisane co można a co nie) tzn.
 *    - tworzyć zmienne
 *    - tworzyć funkcje
 *    - korzystać z internenetu
 *    - ZADAWAĆ PYTANIA
 *    - etc.
 * 3) czasem po rozwiązaniu zadania będziesz musiał/musiała zakomentować rozwiazanie
 *    żeby nie "przysłaniać" nazw zmiennych - będę wskazywał kiedy należy to robić
 * 4) każde zadanie posiada przykładowe rozwiązanie w pliku który często nazywa się solution.js
 * 5) jeżeli masz problem ze zrozumieniem treści lub nie wiesz jak ruszyć zadania zgłoś to do mnie z chęcią Ci pomogę :)
 *    chyba że chcesz sam/a powalczyć to spróbuj przeanalizować rozwiązanie z pliku solution.js
 * 6) nie przejmuj się jeżeli nie udało Ci się rozwiązać zadania - bądź dla siebie wyrozumiała/ły - te materiały zostają
 *    dla Ciebie będziesz mógł/mogła zrobić to na spokojnie po zajęciach
 * 7) jeżeli Twoje rozwiązanie różni się od zaproponowanego przezemnie nie musi to oznaczać że Twoje jest złe/gorsze
 *    problemy w programowaniu mają często wiele rozwiązań
 *
 */

/**
 * Zadanie
 *
 * Stwórz jegneo stringa na podstawie tablicy stringów w zmiennej phrases.
 * Nowo stworzony string powinien być przypisany do nowej zmiennej.
 *
 * Do zadania mozesz podejść na conajmniej dwa sposoby - chciałbym żebyś spróbował/a zrobić obydwa podejścia
 *
 * 1) istnieje metoda do łączenia elementów w tablicy w jednego stringa - metoda ta jest dostępna na tablicy
 * 2) użyj pętli idealnie jakby to był forEach lub reduce
 *
 */

const phrases = [
  "Lorem ipsum dolor",
  "sit amet consectetur",
  "adipisicing elit.",
  "Harum, qui praesentium",
  "rem atque",
  "assumenda aspernatur.",
];

// 1)
const phrasesJoined = phrases.join(" ");

// 2)

let joinedPhrases1 = "";

phrases.forEach((phrase) => {
  joinedPhrases1 = joinedPhrases1 + `${phrase}`;
});

console.log(joinedPhrases1);

/**
 * HTML w JS? o co w tym wszystkim chodzi?
 *
 * Do tej pory JS był nieco "odseparowany" od duetu HTML&CSS,
 * Zanim połączymy w pełni JS z dokumentem HTML różnymi interakcjiami itp rzeczami to potworzymy sobie
 * strukturalnie poprawnego HTMLa ale zapisanego jako JavaScript-owy string
 *
 * Przykłady + małe omówienie poniżej
 *
 */

// div jako zmienna???

const div = "<div>" + "<div></div>" + "</div>";

const div1 = `
  <div>
    <div></div>
  </div>
`;

const span = `<span class="moj-super-span" id="spanId" name="span"></span>`;

const labelka = "To jest labelka zapisana w JSie";

const wartoscInputa = 1500100900;

const input = `
  <label>
      ${labelka}
      <input value="${1500100900}" readonly />
  </label>
  `;

const form = `
<form>
  <input type="checkbox" checked/>
</form>
`;

/**
 *
 * Z tego względu że w codziennej pracy ale również w tym bloku będziemy mieli do czynienia z różnego
 * rodzaju listingami i gridami (tabelami) dwa zadania:
 *
 */

/**
 * Zadanie
 *
 * Na podstawie poprzednich przykładów stwórz listę HTML-ową <ul></ul>
 * ale zapisaną w postaci stringa
 * stringa przypisz do zmiennej o nazwie htmlList
 *
 * niech lista posiada 3 list itemy <li></li>
 * a w środku rzeczy do zrobienia (todo lista)
 *
 */

const htmlList1 = `
<h1>Todo List:</h1>
  <ul>
    <li>wake up</li>
    <li>take shower</li>
    <li>have breakfast</li>
  </ul>
`;

const list = `
TO DO LIST
  <ul> 
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
  </ul>
`;
console.log(list);

const htmlList = `
  <ul>
    <li>Eat</li>
    <li>Sleep</li>
    <li>Code</li>
    <li>Repeat</li>
  </ul>`;

console.log(htmlList);

const templateString = `

  asdfasdf
  adsfasdf


  asdfadf

  ${htmlList}

  adfasdf
`;

/**
 * Zadanie
 *
 * Na podstawie poprzednich przykładów stwórz tabele HTML-ową
 * ale zapisaną w postaci stringa
 * stringa przypisz do zmiennej o nazwie htmlTable
 *
 * niech tabela składa się z 3 nagłówków, 3 kolumn i 2 wierszy oprócz nagłówków
 * 3 kolumna wyświetla input typu checkbox który reprezentuje wartość boolowską true/false (checked/unchecked)
 * niech komórki z wartością Name posiadają atrubut class="bold-text"
 *
 * |---------------------------------------|
 * | Name      | Last Name | Is Adult?     |
 * |-----------|-----------|---------------|
 * | Jane      | Doe       |  ✅           |
 * | Jack      | Jake      |  ⬜           |
 * |---------------------------------------|
 *
 */

const htmlTable = `
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Last Name</th>
      <th>Is Adult?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="bold-text">Jane</td>
      <td>Doe</td> 
      <td>
        <input type="checkbox" checked disabled>
      </td>
    </tr>
    <tr>
      <td class="bold-text">Jack</td>
      <td>Jacke</td> 
      <td>
        <input type="checkbox" disabled>
      </td>
    </tr>
  </tbody>
</table>
`;

/**
 * Zadanie
 *
 * Na podstawie tablicy userów (users) stwórz tabele HTMLową w stringu w zmiennej usersTable.
 * Niech tabela składa się z tagów table, tbody, tr, oraz td
 * Użyj wszystkich danych które są dostępne w userze - tzn powinny być 3 kolumny
 *
 * |---------------------------------------|
 * | Name      | Last Name | Age           |
 * |-----------|-----------|---------------|
 * | Jane      | Doe       |  20           |
 * | Jack      | Jake      |  15           |
 * | John      | Doe       |  30           |
 * |---------------------------------------|
 *
 * Pamiętaj żeby traktować HTML jak zwykły JSowy string
 * tzn. że możesz konkatenować stringi (łączyć ze sobą).
 *
 * hint1: to zadanie jest dość podobne do pierwszego zadania z tego pliku z tą różnicą
 * że bedziesz musiał/a umieścić dane w odpowiednie miejsce w wierszu w HTMLowej tabelce
 *
 * hint2: użyj backticków `` (klawisz pod esc) oraz zapisu ${dane} żeby umieścić wybrane dane w określonym miejscu
 *
 * hint3: użyj przypisania do zmiennej "z wcześniejszą wartością" przykład poniżej
 * możesz sobie wyciągnąć ten przykład i sprawdzić rezultat w konsoli
 *
 * let paragraph = 'trelemorele';
 *
 * paragraph = paragraph + <h2>cześć</h2>;
 *
 * paragraph = paragraph + <h2>cześć po raz drugi</h2>;
 *
 * console.log(paragraph)
 *
 */

const users = [
  { name: "Jane", lastName: "Doe", age: 20 },
  { name: "Jack", lastName: "Jake", age: 15 },
  { name: "John", lastName: "Doe", age: 30 },
  { name: "Jerry", lastName: "Smith", age: 50 },
];

let htmlTable2 = "";

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

console.log(htmlTable2);

/**
 * Zadanie ⭐
 *
 * Na podstawie tablicy produktów stwórz listę (niekoniecznie ul/ol) div-ów jako string przypisany do zmiennej productList
 *
 * lista będzie zawierała:
 * 1) heading (h2) z tytułem aukcji (title)
 * 2) paragraf (p) z ceną (price)
 * 3) paragraf (p) z opisem (description)
 * 4) obrazek produktu (img) wartością atrubutu src niech będzie pole image
 * 4a) niech tag img ma określony atrybut height="100"
 *
 * hint1: pamiętaj że pisany tutaj html jest stringiem i możesz używać template stringów do przypisania src
 * hint2: żeby poprawnie przypisać atrubut src mozesz posłużyć się przykładem poniżej
 * const jakasKlasaCSSowa = 'bold-text'
 * const h1 = <h1 class="${jakasKlasaCSSowa}">Heading</h1>
 *
 */

const products = [
  {
    title: "Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket",
    image: "../server/assets/products/1.jpg",
  },
  {
    title: "Acer SB220Q bi 21.5 inches Full HD",
    price: 599,
    description:
      "Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing",
    image: "../server/assets/products/2.jpg",
  },
  {
    title: "SanDisk SSD PLUS 1TB Internal",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA",
    image: "../server/assets/products/3.jpg",
  },
];

// podejscie 1 - poprawne
// let productList = "";

// products.forEach((product) => {
//   productList =
//     productList +
//     `<div>
//   <h2>${product.title}</h2>
//   <p>${product.price}</p>
//   <p>${product.description}</p>
//     <img src="${product.image}"  height="100"/>
//   </div>`;
// });

// document.write(productList);

// podejście 2 ambitniejsze ze stylami
const styleH2 = "font-weight: 200";
const divStyle = "border: 1px solid black; border-radius: 5px";

let productList = "";

products.forEach((product, index) => {
  productList =
    productList +
    `
      <div class="${divStyle}">
        <h2 class="${styleH2}">${product.title}</h2>
        <p>${product.price}</p>
        <p>${product.description}</p>
        <img src=${product.image} height="100">
      </div>
  `;
});

// document.write(productList);

// console.log();

// console.table(products);

// /**
//  * for
//  * forEach
//  *
//  * map
//  * filter
//  * reduce
//  */

// const temp = products.map();

// const temp1 = products.filter();
