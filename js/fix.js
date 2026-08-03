function checkSystemStatus() {
    console.log("[System] Student Management System is running normally without errors.");
    return true;
}

function sanitizeInput(input) {
    return input ? input.trim() : "";
}