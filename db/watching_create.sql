INSERT INTO watching
    (username, watching_code)
VALUES
    ($1, $2);
SELECT *
FROM watching
WHERE username = $1;
