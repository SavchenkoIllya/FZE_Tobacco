"use client";
import { adminAppConfig, Table } from "@/app/ui/admin";

type TestUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  registrationDate: string;
  lastLogin: string;
};

const generateFakeUsers = (count: number): TestUser[] => {
  const roles = ["Администратор", "Пользователь", "Модератор", "Редактор"];
  const statuses: Array<"active" | "inactive" | "pending"> = [
    "active",
    "inactive",
    "pending",
  ];

  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const registrationDate = new Date(
      Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000,
    );
    const lastLogin = new Date(
      Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000,
    );

    return {
      id,
      name: `Пользователь ${id}`,
      email: `user${id}@example.com`,
      role: roles[Math.floor(Math.random() * roles.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
      registrationDate: registrationDate.toISOString().split("T")[0],
      lastLogin: lastLogin.toISOString().split("T")[0],
    };
  });
};

export const ProductsTable = () => {
  const users = generateFakeUsers(10);

  return (
    <Table
      data={users}
      columns={adminAppConfig.products.table}
      totalCount={99}
      pageSize={10}
      page={1}
      onPageChange={console.log}
      onPageSizeChange={console.log}
      onSortChange={(props) => {
        console.log(JSON.stringify(props));
      }}
      onSearchChange={console.log}
    />
  );
};
