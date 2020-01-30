UPDATE completed

SET episode_watched = $2

WHERE username = $1;

SELECT *
FROM complete
ORDER BY completed_id