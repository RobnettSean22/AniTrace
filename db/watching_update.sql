UPDATE watching

SET episode_watched = $2

WHERE user_id = $1;

SELECT *
FROM watching
ORDER BY watching_id