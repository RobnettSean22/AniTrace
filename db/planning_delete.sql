DELETE FROM planning
WHERE username = $1 AND planning_id = $2;

SELECT *
FROM planning
WHERE username = $1
ORDER BY planning_id;