const posts = [];
function writePost(title, content) {
    posts.push({ id: posts.length + 1, title, content });
    console.log(`[게시글 작성] ${title}`);
}