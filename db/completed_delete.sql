DELETE FROM completed
WHERE user_id = $1 AND completed_id = $2;

SELECT *
FROM completed
ORDER BY completed_id
