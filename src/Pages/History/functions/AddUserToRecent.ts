export const addUserToRecent = (user: any) => {
  const storedUsers = JSON.parse(localStorage.getItem("recentUsers") || "[]");
  const userIndex = storedUsers.findIndex((u: any) => u.login === user.login);

  if (userIndex === -1) {
    storedUsers.unshift(user);
  } else {
    storedUsers.splice(userIndex, 1);
    storedUsers.unshift(user);
  }

  localStorage.setItem("recentUsers", JSON.stringify(storedUsers));
};
