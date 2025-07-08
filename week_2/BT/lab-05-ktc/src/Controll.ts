import * as readline from "readline"; 
import courseManager from "./courseManager";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const manager = new courseManager();

// Hiển thị menu
function showMenu(): void {
  console.log("\n===== MENU =====");
  console.log("1. Tạo khóa học mới");
  console.log("2. Hiển thị danh sách khóa học");
  console.log("3. Cập nhật khóa học");
  console.log("4. Xóa khóa học");
  console.log("5. Thoát");
  rl.question("Chọn chức năng: ", handleMenu);
}

// Xử lý lựa chọn menu
function handleMenu(choice: string): void {
  switch (choice) {
    case "1":
      // Arrow function dùng trong callback
      rl.question("Tên khóa học: ", (name) => {
        rl.question("Giảng viên: ", (instructor) => {
          rl.question("Thời lượng: ", (dur) => {
            manager.addCourse(name, instructor, parseFloat(dur));
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
      rl.question("ID khóa học cần cập nhật: ", (idInput) => {
        const id = parseInt(idInput);

        rl.question("Tên mới (Enter để giữ nguyên): ", (name) => {
          rl.question(
            "Giảng viên mới (Enter để giữ nguyên): ",
            (instructor) => {
              rl.question(
                "Thời lượng mới (Enter để giữ nguyên): ",
                (duration) => {
                  const updated = {
                    ...(name.trim() && { name }),
                    ...(instructor.trim() && { instructor }),
                    ...(duration.trim() && { duration: parseFloat(duration) }),
                  };

                  manager.updateCourse(
                    id,
                    updated.name,
                    updated.instructor,
                    updated.duration
                  );

                  showMenu();
                }
              );
            }
          );
        });
      });
      break;

    case "4":
      rl.question("ID khóa học cần xóa: ", (id) => {
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
