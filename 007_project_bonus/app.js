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

/**
 * przyciski usuwanie elementu
 *
 * przykład
 */

/**
 * Zadanie
 *
 * Na podstawie przykładu dodaj kolejne idki do przycisków tak żeby obsłużyć każdy z nich - dzięki temu po
 * wciśnieciu dowolnego przycisku usuń dany wiersz powinien zostać usunięty z dokumentu
 *
 */

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

/**
 * Inputy & Formularze
 *
 * na przykładzie
 * inputów typu text oraz checkbox oraz selecta
 */

/**
 * Formularz do tworzenia nowego użytkownika
 *
 * przykład bez wyświetlenia w tabelce
 */

const users = [];

/**
 * Zadanie
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
 */

/**
 * Zadanie
 *
 * Na podstawie przykładu poprzedniej tabeli spróbuj wykonać usuwanie
 * elementu po przyciśnieciu przycisku, użyj delegacji zdarzeń czyli dodaj jedno nasłuchiwanie na
 * klikniecie w obrębie tabelki i sprawdzaj kliknięty element jeżeli jest to delete button - usuń wiersz
 *
 */
