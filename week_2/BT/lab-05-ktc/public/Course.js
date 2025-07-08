"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Course = /** @class */ (function () {
    function Course(id, name, instructor, duration) {
        if (name === void 0) { name = "Chưa được đặt tên"; }
        if (instructor === void 0) { instructor = "Chưa xác định giảng viên"; }
        if (duration === void 0) { duration = 0; }
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.duration = duration;
    }
    Course.prototype.getCourses = function () {
        return "ID: ".concat(this.id, " T\u00EAn: ").concat(this.name, " Gi\u1EA3ng vi\u00EAn: ").concat(this.instructor, " th\u1EDDi l\u01B0\u1EE3ng: ").concat(this.duration);
    };
    return Course;
}());
exports.default = Course;
