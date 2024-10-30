import React, { useState } from "react";
import { List, Checkbox, Input, Button, Tag, DatePicker, Select, notification } from "antd";
import dayjs from "dayjs"; // For formatting the date
import "./styles/App.css";

const initialTasks = [
  {
    id: 1,
    title: "Học lập trình web với React",
    dueDate: "2024/10/2",
    tagColor: "gold",
  },
  {
    id: 2,
    title: "Gửi email nộp bài tập về nhà",
    dueDate: "2024/10/2",
    tagColor: "red",
  },
  {
    id: 3,
    title: "Học từ vựng tiếng Anh mỗi ngày",
    dueDate: "2024/10/2",
    tagColor: "orange",
  },
  {
    id: 4,
    title: "Viết tiểu luận môn Triết học",
    dueDate: "2024/10/2",
    tagColor: "green",
  },
];

const tagColors = [
  { value: "blue", label: "Blue" },
  { value: "red", label: "Red" },
  { value: "green", label: "Green" },
  { value: "orange", label: "Orange" },
  { value: "gold", label: "Gold" },
  { value: "purple", label: "Purple" },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState(null);
  const [tagColor, setTagColor] = useState("blue");
  const handleAddTask = () => {
    if (newTask && dueDate) {
      setTasks([
        ...tasks,
        {
          id: tasks.length + 1,
          title: newTask,
          dueDate: dueDate.format("YYYY-MM-DD"),
          tagColor: tagColor,
        },
      ]);
       
        notification.success(
          {
            message: "Task added successfully",
            description: "The new task has been added to your list.",
    
          }
        )
      
      setNewTask("");
      setDueDate(null);
      setTagColor("blue");
    }
    else {
      notification.error({
        message: "Error adding task",
        description: "Please fill in both the task title and due date.",
      });
    }
  };

  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <div>
        <h2 style={{ color: "black" }}>My work 🎯</h2>

        <List
          itemLayout="horizontal"
          dataSource={tasks}
          renderItem={(task) => (
            <List.Item>
              <Checkbox onChange={() => handleCheck(task.id)} />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  marginLeft: "10px",
                }}
              >
                {task.title}
              </span>
              <Tag color={task.tagColor} style={{ marginLeft: "auto" }}>
                {task.dueDate}
              </Tag>
            </List.Item>
          )}
        />

        <Input
          placeholder="Add task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onPressEnter={handleAddTask}
          style={{ width: "300px", marginRight: "10px" }}
        />

        <DatePicker
          onChange={(date) => setDueDate(date)}
          style={{ marginRight: "10px" }}
        />

        <Select
          defaultValue={tagColor}
          onChange={(value) => setTagColor(value)}
          style={{ width: "120px", marginRight: "10px" }}
        >
          {tagColors.map((color) => (
            <Select.Option key={color.value} value={color.value}>
              {color.label}
            </Select.Option>
          ))}
        </Select>

        <Button style={{ color: "black" }} onClick={handleAddTask}>
          Add task
        </Button>
      </div>
    </div>
  );
}

export default App;
