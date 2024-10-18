import { TodoType } from "./types/todo";
import { FC } from "react";

export const Todo: FC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(ユーザ：${userId})`}</p>;
};
