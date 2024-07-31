interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "James",
    lastName: "Doe",
    age: 28,
    location: "New York"
  };
  
  const student2: Student = {
    firstName: "Jasmin",
    lastName: "Doe",
    age: 27,
    location: "London"
  };
  
  const studentsList: Student[] = [student1, student2];
  
  function renderTable() {
    const table = document.createElement("table");
    studentsList.forEach(student => {
      const row = table.insertRow();
      const firstNameCell = row.insertCell();
      firstNameCell.innerHTML = student.firstName;
      const locationCell = row.insertCell();
      locationCell.innerHTML = student.location;
    });
    document.body.appendChild(table);
  }
  
  renderTable();
