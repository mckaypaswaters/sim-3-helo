SELECT u.username, u.profile_pic, p.title, p.img, p.content, p.author_id FROM posts p
JOIN users u ON p.author_id = u.id;