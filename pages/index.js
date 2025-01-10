import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Service Booking</h1>
        <p>Book services with ease.</p>
        <Link href="/services">View Services</Link>
      </main>
    </>
  );
}
