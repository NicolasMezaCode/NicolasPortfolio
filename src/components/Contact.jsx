import React, { useState } from 'react';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Construct the form submission URL
    const formUrl = 'https://formspree.io/f/xnqyygra'; 

    try {
      const response = await fetch(formUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        // Form submitted successfully
        console.log('Form submitted successfully!');
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // Handle error
        console.log('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.log('Error submitting form:', error.message);
    }
  };

  return (
<section className="min-h-screen bg-background">
  <div className="flex flex-col justify-center items-center p-8">
    <h1 className="text-white text-4xl font-bold mb-4 sm:mb-8">Contact Me</h1>
    <p className="text-white text-lg text-center mb-8">
        If you have any questions or would like to work together, please feel free to reach out to me.
    </p>
    <div className="max-w-lg w-full sm:max-w-xl">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          className="mb-4 p-2 border border-gray-300 rounded w-full"
        />

        <button
          type="submit"
          className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-dark transition w-full"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</section>
  );
}