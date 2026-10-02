'use client';

import { useState, FormEvent } from 'react';

// Интерфейс для пропсов формы
interface ContactFormProps {
  dict: Record<string, string>;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let isFormValid = true;

    if (name.trim() === "") {
      setErrorName(true);
      isFormValid = false;
    } else {
      setErrorName(false);
    }

    if (!email.includes('@') || email.trim() === "") {
      setErrorEmail(true);
      isFormValid = false;
    } else {
      setErrorEmail(false);
    }

    if (message.trim() === "") {
      setErrorMessage(true);
      isFormValid = false;
    } else {
      setErrorMessage(false);
    }

    if (isFormValid) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 4000);

      setName('');
      setEmail('');
      setMessage('');
    } else {
      setIsSuccess(false);
    }
  };

  return (
    <section id="contact" className="cta-block">
      <h2 data-lang="contact-heading">{dict['contact-heading']}</h2>
      
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        
        {/* Поле Имени */}
        <div className="form-group">
          <input 
            type="text" 
            placeholder={dict['form-name'] || "YOUR NAME"} 
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className={`error-message ${errorName ? 'visible' : ''}`} data-lang="error-name">
            {dict['error-name']}
          </span>
        </div>

        {/* Поле Почты */}
        <div className="form-group">
          <input 
            type="email" 
            placeholder={dict['form-email'] || "YOUR EMAIL"} 
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className={`error-message ${errorEmail ? 'visible' : ''}`} data-lang="error-email">
            {dict['error-email']}
          </span>
        </div>

        {/* Поле Сообщения */}
        <div className="form-group">
          <textarea 
            placeholder={dict['form-message'] || "YOUR MESSAGE"} 
            className="form-input" 
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <span className={`error-message ${errorMessage ? 'visible' : ''}`} data-lang="error-message">
            {dict['error-message']}
          </span>
        </div>

        <button type="submit" className="btn btn--contact" data-lang="contact-btn">
          {dict['contact-btn']}
        </button>

        {isSuccess && (
          <p className="succes" style={{ display: 'block', marginTop: '15px' }} data-lang="submit-success">
            {dict['submit-success']}
          </p>
        )}
      </form>
    </section>
  );
}
