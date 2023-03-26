/**
 * Zadanie
 *
 * Na podstawie kodu z poprzedniego modułu stwórz aplikację wyświetlającą
 * userów (dla leniwych możesz kopiować kod - zachęcam do próba napisania tego jeszcze raz)
 *
 * o ile wyświetlanie będzie takie jak w poprzednim module
 * o tyle żeby dodać nowego usera trzeba wyświetlić modal który zawiera
 * formularz żeby to zrobić musisz:
 * - ustawić atrybut open w elemencie <dialog></dialog> w dokumencie html
 * żeby zrobić to z poziomu JSa musisz najpierw pobrać ten element
 * a następnie wykorzystać metody setAttribute/removeAttribute
 * jeżeli potrzebujesz pomocy to plik solution.js może być przydatny :)
 */

let users = [];

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

const modal = document.querySelector("#modalForm");
const openModalButton = document.querySelector("#openModal");

openModalButton.addEventListener("click", () => {
  modal.setAttribute("open", "");
});

const submitButton = document.querySelector("#submitButton");
const cancelButton = document.querySelector("#cancelButton");

cancelButton.addEventListener("click", () => {
  modal.removeAttribute("open");
});

const userNameInput = document.querySelector("#name");
const userLastNameInput = document.querySelector("#lastName");
const userAgeInput = document.querySelector("#age");

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
