SELECT users.Id, IFNULL(active_users.numberReviews, 0) AS reviews_number
FROM users
LEFT JOIN
    (SELECT userId, COUNT(userId) AS numberReviews
    FROM reviews
    WHERE
	DAY(reviews.created) = 9 AND MONTH(reviews.created) = 5
    GROUP BY reviews.userId) 
    AS active_users ON active_users.userId = users.ID;