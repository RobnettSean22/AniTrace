DELETE FROM watching
WHERE username = $1 AND watching_id = $2;

SELECT *
FROM watching
WHERE username = $1
ORDER BY watching_id;