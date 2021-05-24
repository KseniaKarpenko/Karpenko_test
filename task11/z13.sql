SELECT vendorName, COUNT(*) AS Count
FROM vendors JOIN products ON vendorId = vendors.ID
 WHERE datediff(curdate(),createdAt)<=10
 GROUP BY vendorName
 HAVING Count >3;