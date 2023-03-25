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
 * Policz średnią arytmetyczną liczb podanych w tablicy w zmiennej numbers
 *
 *  hint1: stwórz zmienną suma i użyj pętli do dodania wszystkich liczb z tablicy
 *  hint2: stwórz kolejną zmienną i przypisz wynik obliczenia
 *
 *
 * suma wszystkich liczb podzielona przez ilosć tych liczb
 *
 */

const numbers = [4, 2, 5, 8, 9, 1, 0];

let sum = 0;

numbers.forEach((num) => {
  sum += num;
});

const mathMean = sum / numbers.length;

console.log(`średnia arytmetyczna: ${mathMean}`);

let suma = 0;
for (let i = 0; i < numbers.length; i++) {
  suma = suma + numbers[i];
}
let mean = suma / numbers.length;

/**
 * Zadanie
 *
 * Na podstawie tablicy numbers stwórz nową tablicę które będzie składała się z liczb większych niż 5
 *
 * hint1: proponuje użyć metody dostępnej na tablicy - filter, ale możesz wykorzystać zwykłą pętle for
 * hint2: skonstruuj warunek (if) sprawdzający czy dana liczba jest większa niż 5
 */

const biggerThanFive1 = numbers.filter((number) => number > 5);

const biggerThanFive2 = numbers.filter((number) => {
  if (number > 5) {
    return true;
  } else {
    return false;
  }
});

console.log(biggerThanFive2);

/**
 * Zadanie ⭐
 *
 * Zadanie podobne do poprzedniego, tzn policz średnią arytetyczną liczb z tablicy numbers1
 * tym razem tablica numbers1 zawiera elementy inne niż liczby lub liczby ale w formacie string,
 * Twoim zadaniem jest obliczenie średniej arytmetycznej liczb zapisanych jako number oraz string oraz pominięcie innych elementów
 *
 */

const numbers1 = [
  null,
  2,
  "2",
  undefined,
  9,
  10,
  0,
  -5,
  20,
  "22",
  "cześć", // not a number
  { name: "John" },
  [1, 2, 3],
];

let sum2 = 0;

numbers1.forEach((element) => {
  if (
    typeof element === "number" ||
    (typeof element === "string" && !isNaN(element))
  ) {
    sum2 += Number(element);
  }
});

console.log(`Suma: ${sum2}`);

/**
 * Zadanie
 *
 * Sprawdź czy user jest dorosły czy nie (age > 18).
 *
 * Przemapuj/przeiteruj się po tablicy userów (zmienna users),
 * gdzie userem jest obiekt:
 *
 * np.
 *
 * const user = {
 *      name: 'John',
 *      lastName: 'Doe',
 *      age: 23,
 * }
 *
 * iterując się po tablicy dodawaj nowe pole o nazwie "isAdult" userowi z danej iteracji
 *
 * np.
 *
 * user.isAdult = 'jakaś nowa wartość';
 *
 * do tego pola przypisz wartość boolowską true jeżeli user jest dorosły (age > 18)
 * natomiast jeżeli user jest nieletni (age < 18) przypisz wartość false
 *
 *
 * przykładowe dane wejściowe:
 *
 * const users = [{name: 'John', age: 20}, {name: 'Jane', age: 16}];
 *
 * przykładowe dane wyjściowe (wynik działania Twojego kodu):
 *
 * const usersWithIsAdult = [{name: 'John', age: 20, isAdult: true}, {name: 'Jane', age: 16, isAdult: false}];
 *
 */

const users = [
  { name: "Jane", lastName: "Doe", age: 10 },
  { name: "Paul", lastName: "Walker", age: 20 },
  { name: "John", lastName: "Doe", age: 32 },
  { name: "Jack", lastName: "Jackson", age: 25 },
  { name: "Jerry", lastName: "Jazz", age: 15 },
];
// porejscie 1 - mutowanie danych
users.forEach((user) => {
  if (user.age >= 18) {
    user.isAdult = true;
  } else {
    user.isAdult = false;
  }
});
// podejście 2 - tworzenie nowych danych
const usersWithIsAdult = users.map((user) => {
  const newUser = { ...user, isAdult: user.age > 18 };

  return newUser;
});

console.table(usersWithIsAdult);

// console.table(users);

/**
 *
 * Zadanie ⭐
 *
 * Na podstawie wyniku z zadania poprzedniego policz średnią arytmetyczną wieku osób dorosłych
 *
 */

/**
 * Zadanie ⭐⭐
 *
 * Na podstawie tablicy z poprzedniego zadania policz ilość osób pełnoletnich i niepełnoletnich
 * wynik wyświetl w dowolny znany Ci sposób np w konsoli.
 *
 */

/**
 * Zadanie
 *
 * Na podstawie tablicy z poprzedniego zadania, odfiltruj nieletnich userów.
 * Tzn stwórz nową tablicę na podstawię tablicy z porzedniego zadania gdzie elementem tablicy był user z polem isAdult
 * Podczas iteracji sprawdzaj czy user jest dorosły (isAdult === true) jeżeli tak niech będzie elementem nowej tablicy
 * jeżeli nie pomiń go.
 *
 */

const usersAdult = usersWithIsAdult.filter((user) => {
  if (user.isAdult === true) {
    return true;
  } else {
    return false;
  }
});

// console.log(usersAdult);

const adultUsers = usersWithIsAdult.filter((user) => user.isAdult);

console.log(adultUsers);
