"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course_1 = require("./Course");
var courseManager = /** @class */ (function () {
    function courseManager() {
        this.courses = []; // tạo danh sách mảng các khóa học của
        this.nextId = 1; // tạo trước để dùng tự động tăng id mỗi lần thêm
    }
    // tạo khóa học
    courseManager.prototype.addCourse = function (name, instructor, duration) {
        if (name === void 0) { name = "Chưa được đặt tên"; }
        if (instructor === void 0) { instructor = "Chưa xác định giảng viên"; }
        if (duration === void 0) { duration = 0; }
        var newCourse = new Course_1.default(this.nextId++, name, instructor, duration);
        this.courses.push(newCourse);
    };
    // cập nhật khóa học
    courseManager.prototype.updateCourse = function (id, name, instructor, duration) {
        var course = this.courses.find(function (c) { return c.id === id; });
        if (!course) {
            console.log("Không tìm thấy khóa học với ID đã cho.");
            return;
        }
        // destructuring lấy name, instructor, duration rồi gán thành newName,... :)
        var _a = { name: name, instructor: instructor, duration: duration }, newName = _a.name, newInstructor = _a.instructor, newDuration = _a.duration;
        if (newName !== undefined && newName !== "") {
            course.name = newName;
        }
        if (newInstructor !== undefined && newInstructor !== "") {
            course.instructor = newInstructor;
        }
        if (newDuration !== undefined && !isNaN(newDuration)) {
            course.duration = newDuration;
        }
        console.log("Đã cập nhật khóa học.");
    };
    // In ra danh sách khóa hoc
    courseManager.prototype.listCode = function () {
        console.log("Danh sách khóa học");
        this.courses.forEach(function (course, index) {
            console.log("".concat(index + 1, ". ").concat(course.getCourses()));
        });
    };
    // Xóa khóa học
    courseManager.prototype.deleteCourse = function (id) {
        this.courses = this.courses.filter(function (course) {
            course.id !== id;
        });
        console.log("Đã xóa khóa học thành công");
    };
    return courseManager;
}());
exports.default = courseManager;
