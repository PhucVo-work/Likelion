"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var courseManager_1 = require("./courseManager");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var manager = new courseManager_1.default();
// Hiển thị menu
function showMenu() {
    console.log("\n===== MENU =====");
    console.log("1. Tạo khóa học mới");
    console.log("2. Hiển thị danh sách khóa học");
    console.log("3. Cập nhật khóa học");
    console.log("4. Xóa khóa học");
    console.log("5. Thoát");
    rl.question("Chọn chức năng: ", handleMenu);
}
// Xử lý lựa chọn menu
function handleMenu(choice) {
    switch (choice) {
        case "1":
            // Arrow function dùng trong callback
            rl.question("Tên khóa học: ", function (nameInput) {
                var name = nameInput.trim() || "Chưa được đặt tên";
                rl.question("Giảng viên: ", function (instructorInput) {
                    var instructor = instructorInput.trim() || "Chưa xác định giảng viên";
                    rl.question("Thời lượng: ", function (durationInput) {
                        var duration = durationInput.trim()
                            ? parseFloat(durationInput)
                            : 0;
                        manager.addCourse(name, instructor, duration);
                        showMenu();
                    });
                });
            });
            break;
        case "2":
            manager.listCode();
            showMenu();
            break;
        case "3":
            rl.question("ID khóa học cần cập nhật: ", function (idInput) {
                var id = parseInt(idInput);
                rl.question("Tên mới (Enter để giữ nguyên): ", function (name) {
                    rl.question("Giảng viên mới (Enter để giữ nguyên): ", function (instructor) {
                        rl.question("Thời lượng mới (Enter để giữ nguyên): ", function (duration) {
                            var updated = __assign(__assign(__assign({}, (name.trim() && { name: name })), (instructor.trim() && { instructor: instructor })), (duration.trim() && { duration: parseFloat(duration) }));
                            manager.updateCourse(id, updated.name, updated.instructor, updated.duration);
                            showMenu();
                        });
                    });
                });
            });
            break;
        case "4":
            rl.question("ID khóa học cần xóa: ", function (id) {
                manager.deleteCourse(parseInt(id));
                showMenu();
            });
            break;
        case "5":
            console.log("Thoát chương trình.");
            rl.close();
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            showMenu();
    }
}
showMenu();
