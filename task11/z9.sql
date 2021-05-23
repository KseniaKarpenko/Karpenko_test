SELECT descr, rating, COUNT(*) AS count
FROM products JOIN reviews ON productId = products.ID
GROUP BY id
HAVING count>3;