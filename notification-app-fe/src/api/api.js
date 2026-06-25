const TOKEN = "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YWlzaG5hdmkyNnJlZGR5QGdtYWlsLmNvbSIsImV4cCI6MTc4MjM4MTEzOSwiaWF0IjoxNzgyMzgwMjM5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiYTFmOWRiNjktYzgxYS00NzdkLTlmNmUtMzc4OGUzNmI1ZWJjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFpc2huYXZpIHJlZGR5Iiwic3ViIjoiYzM2Yzg4YWUtYmViZS00NzFiLWFkZWQtYzAyMmM0OGZjNGQ4In0sImVtYWlsIjoidmFpc2huYXZpMjZyZWRkeUBnbWFpbC5jb20iLCJuYW1lIjoidmFpc2huYXZpIHJlZGR5Iiwicm9sbE5vIjoiMjMyMTFhMTJiNiIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImMzNmM4OGFlLWJlYmUtNDcxYi1hZGVkLWMwMjJjNDhmYzRkOCIsImNsaWVudFNlY3JldCI6IlZHUEh4VXh5SlhQeUplY0EifQ.bl_DrL2G5tr-uRPY6unp_q89ByQwLv2vBl4O74WcxEk";

export const fetchNotifications = async () => {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/notifications",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );

  const data = await response.json();

  console.log("API Response:", data);

  return data;
};