import courseData from "./courseData";

class Course implements courseData {
  constructor(
    public id: number,
    public name: string = "Chưa được đặt tên",
    public instructor: string = "Chưa xác định giảng viên",
    public duration: number = 0
  ) {
    this.id = id;
    this.name = name;
    this.instructor = instructor;
    this.duration = duration;
  }

  getCourses(): string {
    return `ID: ${this.id} Tên: ${this.name} Giảng viên: ${this.instructor} thời lượng: ${this.duration}`;
  }
}

export default Course;
