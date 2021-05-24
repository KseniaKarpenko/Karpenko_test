SELECT * 
FROM  up11.products 
JOIN (SELECT productId,AVG(rating) AS average FROM up11.reviews GROUP BY up11.reviews.productId) 
    as AV 
    on up11.products.ID=AV.productId 
    where AV.average>3;