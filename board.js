const posts = [];

function writePost(title, content, author) {
    const post = { id: posts.length + 1, title, content, author, date: new Date().toLocaleDateString() };
    posts.push(post);
    console.log(`[게시글 등록] "${title}" 글이 작성되었습니다.`);
    return post;
}

function getPosts() {
    console.log("--- 게시판 목록 ---");
    console.log(posts);
    return posts;
}