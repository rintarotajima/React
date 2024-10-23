import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "Rintaro Tajima",
  email: "12345@789.com",
  address: "matsumoto4"
}

export default function App() {
  return (
    <UserCard user={user} />
  );
};