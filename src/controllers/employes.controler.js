import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Algo anduvo mal",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(505).json({
      message: "Algo anduvo mal",
    });
  }
};

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body;
    try {
    const [rows] = await pool.query(
      "INSERT INTO empleado(name,salario) VALUES(?,?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(505).json({
      message: "Algo anduvo mal",
    });
  }
};

export const deleteEmployees = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleado WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no encontrado.",
      });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Algo anduvo mal.",
    });
  }
};

export const updateEmployees = async (req, res) => {
    const { id } = req.params;
    const { name, salario } = req.body;

    try {
    const [result] = await pool.query(
      "UPDATE empleado SET name =IFNULL(?,name),salario=IFNULL(?,salario) WHERE id = ?",
      [name, salario, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({
        message: "Empleado no afectado",
      });

    const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [
      id,
    ]);

    console.log(result);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Algo anduvo mal",
    });
  }
};
