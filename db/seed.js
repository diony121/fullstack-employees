import db from "./client.js";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    { name: "Alice Johnson", birthday: "1990-05-15", salary: 75000 },
    { name: "Bob Smith", birthday: "1985-08-22", salary: 82000 },
    { name: "Carol Davis", birthday: "1992-11-03", salary: 68000 },
    { name: "Dan Wilson", birthday: "1988-02-14", salary: 91000 },
    { name: "Eve Brown", birthday: "1995-07-30", salary: 72000 },
    { name: "Jack Thomas", birthday: "1989-12-01", salary: 88000 }
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
