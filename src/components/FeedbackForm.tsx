'use client';

import { useState } from 'react';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(false); // Reset in case of resubmit
    setError('');

    // Basic email validation
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    // Simulate sending data
    console.log({ name, email, message });

    // Clear form
    setName('');
    setEmail('');
    setMessage('');

    // Show thank-you message
    setSubmitted(true);
  };

  return (
    <div className="d-flex justify-content-center">
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-2">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className="form-control form-control-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              className="form-control form-control-sm"
              rows={3}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {error && <div className="alert alert-danger py-1">{error}</div>}
          {submitted && (
            <div className="alert alert-success py-1">Message received! We’ll get back to you shortly.</div>
          )}

          <button type="submit" className="btn btn-success btn-lg w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
