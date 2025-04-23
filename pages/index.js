import UserProfile from '../components/UserProfile';
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';



export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <UserProfile
        name="Gabriel Hernandez"
        profilePicture="/Project.jpg"
        bio="Aspiring cybersecurity and programming expert. Passionate about front-end and Web Development."
      />

<Counter />
<TodoList />
    </div>
  );
}