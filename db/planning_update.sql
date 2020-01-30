UPDATE planning

SET episode_watched = $2

WHERE username = $1;

SELECT *
FROM planning
ORDER BY planning_id