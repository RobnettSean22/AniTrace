UPDATE completed

SET episode_watched = $3

WHERE username = $1 AND completed_id = $2;

SELECT *
FROM completed
ORDER BY completed_id;