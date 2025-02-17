import Navbar from '../components/Navbar';

export default function Login() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Login</h1>
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <input type="password" name="password" required />
          </label>
          <button type="submit">Login</button>
        </form>
      </main>
    </>
  );
}
