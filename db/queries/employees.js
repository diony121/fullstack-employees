import db from "../client.js";

/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
   const SQL = `
    INSERT INTO employees (name, birthday, salary)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  await db.query(SQL, [name, birthday, salary]);
  console.log(`Inserted: ${name}`);
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const SQL = `
    SELECT *
    FROM employees
    `;
    const response = await db.query(SQL);
    return response.rows;
} 

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
}
