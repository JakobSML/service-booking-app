import Navbar from '../components/Navbar';

export default function Services() {
  const services = [
    { id: 1, name: 'Cleaning Service', price: '$50' },
    { id: 2, name: 'Plumbing Service', price: '$80' },
  ];

  return (
    <>
      <Navbar />
      <main>
        <h1>Our Services</h1>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h2>{service.name}</h2>
              <p>{service.price}</p>
              <button>Book Now</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
