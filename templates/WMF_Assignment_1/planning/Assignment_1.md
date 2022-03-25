# **Assignment 1**

---
---

## **BDD**

---

Objectives:
Create a web api that allows users to

1. Retrieve all active screening movies
2. Retrieve movies based on substring of movie name, in ascending order
3. Retrieve all genre
4. Returns JSON data
5. Fill up Web API description
6. Design Database Schema

### **Project Structure**

---

```-
directory/
├──  package.json
├── server.js
├── controller
│   └── app.js
├── models
    └── movie.js
    └── genre.js  
    └── user.js
    └── databaseconfig.js
```

### **Tables**

---
---

#### **Movie**

---

> | movie_id (PK) | name | description | release_date | image_url | genre_id (FK) | date_created |
> |--|--|--|--|--|--|--|
> | 1 | dune | space GoT | 03/09/2021 | `image_url` | 1 | 27/11/2021 |

---

#### **Genre**

> | genre_id (PK) | name | description |
> |--|--|--|
> | 1 | sci-fi | sciency fictiony |

---

#### **User**

> | user_id (PK) | email | name | role | password |
> |--|--|--|--|-|
> | 1 | `user@test.com` | admin1 | admin | test1234 |

---
---

## **WMF**

---

Objectives:

* JSX
* Components and Props
* State and Component Lifecycle
* Handling Events
* Forms
* Conditional Rendering
* Lists and Keys
* React Router

### **TODOS:**

---

* Movie Listing - allows users to view list of movies
* Genre Filtering - allows users to filer movies by genre
* Movie Review Page - allows users to view reviews of movies
* Commentary - allows users to comment on movies. (Comments can disappear??)
* Fetch movie catalouge data from an external source
* Remember user's filter preference in cache
* Loading page at the start for query calls to load first
