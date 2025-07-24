export default function BookingForm() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Booking Form</h1>
      <form>
        <label>Full Name:</label>
        <input type="text" name="fullName" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}