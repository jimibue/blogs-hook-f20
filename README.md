# BLOG API DOCS

## here is how to use this API

- GET /api/blogs => returns an array of blogs [{id, title, body, user_id, updated_at}]

- POST /api/blogs = need user to be logged in and pass {title:'string', body:'string'}
  => returns created users or 422 error

## Models

BLOG

t.string "title"
t.text "body"
t.bigint "user_id", null: false
t.datetime "created_at", precision: 6, null: false
t.datetime "updated_at", precision: 6, null: false

end

USER
t.string "name"
t.string "nickname"
t.string "image"
t.string "email"

# SLACK THIS OUT NOW TO FRONTEND GUY

# PRE PLANING BEFORE

# WHAT DOES YOUR DB LOOK LIKE, WHAT DOES YOUR API LOOK LIKE, WHAT DOES YOUR UI/UX LOOK LIKE

# The more you preplan your database design/structure and plan your UI/UX

# the easier it is going to be to separate tasks on a team
