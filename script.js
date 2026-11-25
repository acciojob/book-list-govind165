//your JS code here. If required.


        // Get form
        const form = document.getElementById("book-form");

        // Get book list
        const bookList = document.getElementById("book-list");

        // Add book
        form.addEventListener("submit", function(e) {

            e.preventDefault();

            // Get input values
            const title = document.getElementById("title").value.trim();
            const author = document.getElementById("author").value.trim();
            const isbn = document.getElementById("isbn").value.trim();

            if (!title || !author || !isbn) {
                return;
            }

            // Create table row
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${title}</td>
                <td>${author}</td>
                <td>${isbn}</td>
                <td>
                    <button class="delete" type="button">X</button>
                </td>
            `;

            // Add row to table
            bookList.appendChild(row);

            // Clear input fields
            form.reset();

        });

        // Delete book
        bookList.addEventListener("click", function(e) {

            if (e.target.classList.contains("delete")) {

                e.target.closest("tr").remove();

            }

        });

