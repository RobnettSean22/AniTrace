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

```sql
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    family_name TEXT NOT NULL,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
)
INSERT INTO users(family_name, username, email, password)
VALUES
('Robnett', 'universoul', 'robnettsean22@gmail.com', 'Blindreaper22')

CREATE TABLE anime(
    code INTEGER,
    user_id INTEGER REFERENCES user(user_id)
)
```
