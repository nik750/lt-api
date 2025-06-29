CREATE TABLE IF NOT EXISTS inventory (
    id VARCHAR(50) PRIMARY KEY,
    storeId VARCHAR(50) NOT NULL,
    product VARCHAR(100) NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(12,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS store (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL
);

INSERT INTO inventory (id, storeId, product, quantity, price) VALUES
('inv-001', 'store-001', 'Whole Wheat Bread', 30, 2.50),
('inv-002', 'store-001', 'Croissant', 20, 1.75),
('inv-003', 'store-001', 'Chocolate Muffin', 25, 2.00),
('inv-004', 'store-001', 'Apple Pie', 10, 3.50),
('inv-005', 'store-001', 'Fresh Orange Juice', 15, 2.25),
('inv-006', 'store-001', 'Mango Smoothie', 12, 3.00),
('inv-007', 'store-001', 'Banana Shake', 18, 2.75),
('inv-008', 'store-001', 'Carrot Cake', 8, 3.25),
('inv-009', 'store-001', 'Lemon Tart', 14, 2.80),
('inv-010', 'store-001', 'Mixed Fruit Juice', 20, 2.50);
