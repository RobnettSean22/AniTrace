UPDATE watching

SET episode_watched = $3

WHERE username = $1 AND watching_id =$2;

SELECT *
FROM watching
ORDER BY watching_id