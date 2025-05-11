"use client";
import { ColumnDef } from "@/app/ui/admin";

type TestUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  registrationDate: string;
  lastLogin: string;
};

export const productTableConfig: ColumnDef<TestUser>[] = [
  {
    key: "id",
    label: "ID",
    sortable: true,
    width: "80px",
  },
  {
    key: "name",
    label: "Имя",
    sortable: true,
  },
  {
    key: "email",
    label: "Email",
    sortable: true,
  },
  {
    key: "role",
    label: "Роль",
    sortable: true,
    render: (value) => (
      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
        {value}
      </span>
    ),
  },
  {
    key: "status",
    label: "Статус",
    sortable: true,
    render: (value) => {
      let bgColor = "bg-gray-100 text-gray-800";
      if (value === "active") bgColor = "bg-green-100 text-green-800";
      if (value === "inactive") bgColor = "bg-red-100 text-red-800";
      if (value === "pending") bgColor = "bg-yellow-100 text-yellow-800";

      return (
        <span
          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${bgColor}`}
        >
          {value === "active" && "Активен"}
          {value === "inactive" && "Неактивен"}
          {value === "pending" && "Ожидает"}
        </span>
      );
    },
  },
  {
    key: "registrationDate",
    label: "Дата регистрации",
    sortable: true,
  },
  {
    key: "lastLogin",
    label: "Последний вход",
    sortable: true,
  },
  {
    key: "id",
    label: "Действия",
    sortable: false,
    render: (_, row) => {
      return (
        <div className="flex space-x-2">
          <button
            className="text-blue-600 hover:text-blue-800"
            onClick={() => alert(`Редактирование пользователя: ${row.name}`)}
          >
            Изменить
          </button>
          <button
            className="text-red-600 hover:text-red-800"
            onClick={() => alert(`Удаление пользователя: ${row.name}`)}
          >
            Удалить
          </button>
        </div>
      );
    },
  },
];
