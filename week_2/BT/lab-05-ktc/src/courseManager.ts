import Course from "./Course";

class courseManager {
  private courses: Course[] = []; // tạo danh sách mảng các khóa học của
  private nextId = 1; // tạo trước để dùng tự động tăng id mỗi lần thêm

  // tạo khóa học
  addCourse(
    name: string = "Chưa được đặt tên",
    instructor: string = "Chưa xác định giảng viên",
    duration: number = 0
  ): void {
    const newCourse = new Course(
      this.nextId++,
      (name = "Chưa được đặt tên"),
      (instructor = "Chưa xác định giảng viên"),
      duration = 0
    );
    this.courses.push(newCourse);
  }

  // cập nhật khóa học
  updateCourse(
    id: number,
    name?: string,
    instructor?: string,
    duration?: number
  ): void {
    const course = this.courses.find((c) => c.id === id);

    if (!course) {
      console.log("Không tìm thấy khóa học với ID đã cho.");
      return;
    }

    // destructuring lấy name, instructor, duration rồi gán thành newName,... :)
    const {
      name: newName,
      instructor: newInstructor,
      duration: newDuration,
    } = { name, instructor, duration };

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
  }

  // In ra danh sách khóa hoc
  listCode(): void {
    console.log("Danh sách khóa học");
    this.courses.forEach((course, index) => {
      console.log(`${index + 1}. ${course.getCourses()}`);
    });
  }

  // Xóa khóa học
  deleteCourse(id: number): void {
    this.courses = this.courses.filter((course) => {
      course.id !== id;
    });
    console.log("Đã xóa khóa học thành công");
  }
}

export default courseManager