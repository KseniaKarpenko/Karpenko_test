select descr, createdAt, validUntil, datediff(current_date(),createdAt)
FROM up11.products AS p
WHERE createdAt=(
SELECT min(createdAt) 
FROM up11.products);