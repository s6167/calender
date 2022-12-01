let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date();
        let month = date.getMonth();
        let year = date.getFullYear();
        let selectedDate = date.getDate();
        
        let calendar = document.getElementById("calendar-body");
        let monthAndYear = document.getElementById("monthAndYear");
        let selectMonth = document.getElementById("month");
        let selectYear = document.getElementById("year");
        let submitButton = document.getElementById("submit");
        let inputDate = document.getElementById("date");

        showCalendar(month, year);

        submitButton.addEventListener("click", function() {
            selectedDate = inputDate.value;
            showCalendar(month, year);
        });

        function showCalendar(month, year) {
            //clear calendar
            while (calendar.firstChild) {
                calendar.removeChild(calendar.firstChild);
            }

            //update month and year
            selectMonth.value = month;
            selectYear.value = year;

            //get first day of month
            let firstDay = (new Date(year, month)).getDay();

            //find number of days in month
            let daysInMonth = 32 - new Date(year, month, 32).getDate();

            //create table rows
            let row = document.createElement("tr");
            let day = 1;

            //fill in blank days
            for (let i = 0; i < firstDay; i++) {
                let cell = document.createElement("td");
                cell.innerHTML = "";
                row.appendChild(cell);
            }

            //fill in days
            for (let i = firstDay; i < daysInMonth + firstDay; i++) {
                let cell = document.createElement("td");
                cell.innerHTML = day;
                if (day == selectedDate) {
                    if (cell.className == "active") {
                        cell.className = "inactive";
                    } else {
                        cell.className = "active";
                    }
                }
                row.appendChild(cell);
                if (i % 7 == 6) {
                    calendar.appendChild(row);
                    row = document.createElement("tr");
                }
                day++;
            }

            //fill in blank days
            while (row.children.length < 7) {
                let cell = document.createElement("td");
                cell.innerHTML = "";
                row.appendChild(cell);
            }
            calendar.appendChild(row);
        }