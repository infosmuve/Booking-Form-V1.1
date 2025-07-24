import Head from 'next/head';
import BookingForm from '../components/BookingForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Booking Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main>
        <BookingForm />
      </main>
    </>
  );
}