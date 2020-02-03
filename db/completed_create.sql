INSERT INTO completed
    (username, completed_code)
VALUES
    ($1, $2);
SELECT *
FROM completed
WHERE username = $1;