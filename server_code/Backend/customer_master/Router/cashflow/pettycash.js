const express = require('express');
const router = express.Router();
const db = require('../../../db');

// Add pettycash database
router.post('/pettycash', (req, res) => {
  const bookData = req.body;
  db.query('INSERT INTO pettycash SET ?', bookData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to insert data into MySQL" });
    }
    return res.status(200).json({ message: "Data inserted successfully" });
  });
});
// delete Billing data
router.delete('/pettycash/:voucherno', (req, res) => {
  const voucherno = req.params.voucherno;
  db.query('DELETE FROM pettycash WHERE voucherno = ?', voucherno, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to delete data from MySQL" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    return res.status(200).json({ message: "Data deleted successfully" });
  });
});
// update pettycash details
router.put('/pettycash/:voucherno', (req, res) => {
  const voucherno = req.params.voucherno;
  const updatedCustomerData = req.body;
  db.query('UPDATE pettycash SET ? WHERE voucherno = ?', [updatedCustomerData, voucherno], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Failed to update data in MySQL" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Customer not found" });
    }
    return res.status(200).json({ message: "Data updated successfully" });
  });
});
// collect data for pettycash table

// filter data from pettycash database
router.get('/pettycash', (req, res) => {
  const { fromDate, toDate } = req.query;
  let query = 'SELECT * FROM pettycash WHERE 1=1';
  let params = [];
  if (fromDate && toDate) {
    query += ' AND date >= DATE_ADD(?, INTERVAL 0 DAY) AND date <= DATE_ADD(?, INTERVAL 1 DAY)';
    params.push(fromDate);
    params.push(toDate);
  }
  db.query(query, params, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve booking details from MySQL' });
    }
    return res.status(200).json(result);
  });
});
// End pettycash database

module.exports = router;