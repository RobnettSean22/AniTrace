INSERT INTO planning
    (username, planning_code)
VALUES
    ($1, $2);

SELECT *
FROM planning
WHERE username = $1 ;