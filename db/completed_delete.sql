DELETE FROM completed
WHERE username = $1 AND completed_id = $2;

SELECT *
FROM completed
WHERE username = $1
ORDER BY completed_id;
