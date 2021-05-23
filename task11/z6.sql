SELECT users.userName, createdAt, descr
FROM products JOIN users ON products.userName = users.ID
ORDER BY createdAt ASC;