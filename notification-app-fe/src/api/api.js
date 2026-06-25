const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2YWlzaG5hdmkyNnJlZGR5QGdtYWlsLmNvbSIsImV4cCI6MTc4MjM3ODczMSwiaWF0IjoxNzgyMzc3ODMxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiN2FkMzJhZjktYWU4NC00NGY0LWJmNGEtZjdhMzMwOGRkNWRjIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmFpc2huYXZpIHJlZGR5Iiwic3ViIjoiYzM2Yzg4YWUtYmViZS00NzFiLWFkZWQtYzAyMmM0OGZjNGQ4In0sImVtYWlsIjoidmFpc2huYXZpMjZyZWRkeUBnbWFpbC5jb20iLCJuYW1lIjoidmFpc2huYXZpIHJlZGR5Iiwicm9sbE5vIjoiMjMyMTFhMTJiNiIsImFjY2Vzc0NvZGUiOiJhaFhqdnAiLCJjbGllbnRJRCI6ImMzNmM4OGFlLWJlYmUtNDcxYi1hZGVkLWMwMjJjNDhmYzRkOCIsImNsaWVudFNlY3JldCI6IlZHUEh4VXh5SlhQeUplY0EifQ.fWhlrh87H1MgboUL8WCFT5gNHPmtDvj_bJfrAnHpnjw";

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