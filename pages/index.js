import UserProfile from '../components/UserProfile';
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';
import Link from 'next/link';




export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
    <nav style={{ marginBottom: '2rem' }}>
      <Link href="/" style={{ marginRight: '1rem', color: 'cyan' }}>Home</Link>
      <Link href="/about" style={{ color: 'cyan' }}>About</Link>
    </nav>

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