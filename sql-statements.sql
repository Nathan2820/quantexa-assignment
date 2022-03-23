CREATE TABLE data (
	department_family VARCHAR(100),
	entity VARCHAR(10),
	date VARCHAR(10),
	expense_type VARCHAR(100),
	expense_area VARCHAR(100),
	supplier VARCHAR(100),
	transaction_number INT,
	amount DECIMAL,
	invoice_currency_unit VARCHAR(10)
)

LOAD DATA INFILE 'EPSRCAllTransactionsDec2016.csv'
INTO TABLE data
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 5 ROWS;