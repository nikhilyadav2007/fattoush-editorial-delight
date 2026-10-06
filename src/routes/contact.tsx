import { createFileRoute } from '@tanstack/react-router';
import { PageIntro, Location, ReservationCTA } from '@/components/restaurant/sections';
import { pageHead } from '@/data/restaurant';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact & Reservations | Fattoush Chennai', 'Call 099623 30993 to reserve a table at Fattoush Restaurant & Banquet, Nookampalayam Link Road, Sholinganallur, Chennai.', '/contact'), component: ContactPage });
function ContactPage() { function ContactPage() {
  return (
    <div className="inner-page">
      <PageIntro
        eyebrow="LET’S CONNECT"
        title="We’ll Save You a Seat."
        description="Call us to reserve a table, plan a celebration or confirm today’s opening hours."
      />

      <Location />

      <ReservationCTA />

      <section className="reservation-form-section">
        <div className="container">
          <div className="reservation-form">
            <p className="eyebrow">TABLE RESERVATION</p>
            <h2>Reserve Your Table</h2>
            <p>Fill in your details and we'll get back to you to confirm your reservation.</p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your reservation request has been received.");
              }}
            >
              <div>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>

              <div>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="Your phone number" required />
              </div>

              <div>
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" required />
              </div>

              <div>
                <label htmlFor="time">Time</label>
                <input id="time" name="time" type="time" required />
              </div>

              <div>
                <label htmlFor="guests">Number of Guests</label>
                <select id="guests" name="guests" required>
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10+ Guests</option>
                </select>
              </div>

              <div>
                <label htmlFor="message">Special Request</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Birthday, anniversary, seating preference, etc."
                />
              </div>

              <button type="submit">REQUEST A RESERVATION</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
