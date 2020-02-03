UPDATE planning

SET episode_watched = $3

WHERE username = $1 AND planning_id = $2;

SELECT *
FROM planning
ORDER BY planning_id