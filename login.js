function login(username, password) {
    if (username === "admin" && password === "1234") {
        console.log("로그인 성공!");
        return true;
    } else {
        console.log("로그인 실패!");
        return false;
    }
}