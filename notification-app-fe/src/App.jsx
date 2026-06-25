import { useEffect, useState } from "react";
import { fetchNotifications } from "./api/api";

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await fetchNotifications();
      console.log(data);
      setNotifications(data.notifications || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div style={{ padding: "20px" }}>
    <h1>Notifications</h1>

    {notifications.map((item) => (
      <div
        key={item.ID}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "15px",
          marginBottom: "15px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h3>{item.Type}</h3>
        <p>
          <strong>Message:</strong> {item.Message}
        </p>
        <p>
          <strong>Time:</strong> {item.Timestamp}
        </p>
      </div>
    ))}
  </div>
);
}