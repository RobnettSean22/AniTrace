DELETE FROM watching
WHERE user_id = $1 AND watching_id = $2;

SELECT *
FROM watching
ORDER BY watching_id