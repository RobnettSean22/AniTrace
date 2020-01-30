Dependences
###Front-End
---axios
---react redux
---react-router-dom

###Server Side
---bcyrpt
---express
---massive
---dotenv

///////////////////////////////////

Front-End

###Components

---Landing/Login/Register

---Anime List

---Anime ALL

---Tracker

---Form

---Single Anime

---Single All

SQL Data Base
++++users+++++++++++++

```sql
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    family_name TEXT NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);
INSERT INTO users(family_name, username, email, password)
VALUES
('Robnett', 'universoul', 'robnettsean22@gmail.com', 'Blindreaper22');




```

++++++++planning+++++++++++

```sql
CREATE TABLE planning(
    planning_id SERIAL PRIMARY KEY NOT NULL,
    planning_code INTEGER,
    episode_watched BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INTEGER REFERENCES user(user_id)
)

INSERT INTO planning(planning_code, user_id)
VALUES
()

/////////////read

SELECT * FROM planning
WHERE user_id = $1;



********************************
********************************

////////////update

UPDATE planning

SET episode_watched = $2

WHERE user_id = $1;

SELECT * FROM planning
ORDER BY planning_id

********************************
********************************

/////////////delete

DELETE FROM planning
WHERE user_id = $1 AND planning_id = $2;

SELECT * FROM planning
ORDER BY planning_id

********************************
********************************

```

++++++++++watching+++++++

```sql
CREATE TABLE watching(
    watching_id SERIAL PRIMARY KEY NOT NULL,
    watching_code INTEGER,
     episode_watched BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO watching(watching_code, user_id)
VALUES
()

/////////////read

SELECT * FROM watching
WHERE user_id = $1;

********************************
********************************

////////////update

UPDATE watching

SET episode_watched = $2

WHERE user_id = $1;

SELECT * FROM watching
ORDER BY watching_id


********************************
********************************

/////////////delete

DELETE FROM watching
WHERE user_id = $1 AND watching_id;

SELECT * FROM watching
ORDER BY watching_id

********************************
********************************

```

+++++++++completed++++++++

```sql
CREATE TABLE completed(
    completed_id SERIAL PRIMARY KEY NOT NULL,
    completed_code INTEGER,
     episode_watched BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INTEGER REFERENCES users(user_id)
);

INSERT INTO watching(watching_code, user_id)
VALUES
()

/////////////read

SELECT * FROM completed
WHERE user_id = $1;


********************************
********************************

////////////update

UPDATE completed

SET episode_watched = $2

WHERE user_id = $1;

SELECT * FROM complete
ORDER BY completed_id


********************************
********************************

/////////////delete

DELETE FROM completed
WHERE user_id = $1 AND completed_id;

SELECT * FROM completed
ORDER BY completed_id

********************************
********************************

```
