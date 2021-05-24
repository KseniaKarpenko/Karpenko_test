SELECT vendorName,createdAt, length(descr)
FROM vendors JOIN products ON vendorId = vendors.ID
WHERE length(descr)>10;