UPDATE planning

SET episode_watched = $2

WHERE user_id = $1;

SELECT *
FROM planning
ORDER BY planning_id