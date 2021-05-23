SELECT distinct vendorName
FROM up11.products 
AS p JOIN up11.vendors AS v ON p.vendorId = v.ID 
WHERE validUntil >= current_date();