import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8aiptcw",   // Remplace par ton ID de service EmailJS
        "template_ta2quc6",  // Remplace par ton ID de template EmailJS
        form.current,
        "nFPYqaJmLKzrebS2I"    // Remplace par ta clé publique EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage(
            "Thank you! Your message has been sent successfully."
          );
          form.current.reset(); // Reset le formulaire après envoi
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="contact" className="max-w-screen font-poppins overflow-hidden">
      <section className="relative z-10 bg-gradient-to-br from-blue-100 py-20 sm:px-20 sm:py-40">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            
            {/* ==== Left Side Info ==== */}
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0 pl-4">
                <span className="text-red-800 mb-4 block text-base font-semibold">
                  Contact Us
                </span>

                <h2 className="text-black mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  Get in Touch with Us
                </h2>

                <p className="text-gray-700 mb-9 text-base leading-relaxed">
                  If you enjoyed one of our dishes, please don't hesitate to contact us. We'd love to hear your feedback and suggestions!
                </p>

                {/* Contact Info */}
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-blue-400/20 mr-6 flex h-[60px] w-[60px] items-center justify-center rounded sm:h-[70px] sm:w-[70px]" />
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">Our Location</h4>
                    <p className="text-body-color text-base">
                      99 St. Jomblo Park, Pekanbaru 28292, Indonesia
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-blue-400/20 mr-6 flex h-[60px] w-[60px] items-center justify-center rounded sm:h-[70px] sm:w-[70px]" />
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                    <p className="text-body-color text-base">
                      (+62) 81 414 257 9980
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="bg-blue-400/20 mr-6 flex h-[60px] w-[60px] items-center justify-center rounded sm:h-[70px] sm:w-[70px]" />
                  <div className="w-full">
                    <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                    <p className="text-body-color text-base">
                      info@bistrobliss.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ==== Right Side Form ==== */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-6">
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your Name"
                      className="w-full rounded border border-gray-200 py-3 px-[14px] text-base text-body-color outline-none focus:border-blue-500 focus-visible:shadow-none"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Your Email"
                      className="w-full rounded border border-gray-200 py-3 px-[14px] text-base text-body-color outline-none focus:border-blue-500 focus-visible:shadow-none"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <input
                      type="text"
                      name="user_phone"
                      placeholder="Your Phone"
                      className="w-full rounded border border-gray-200 py-3 px-[14px] text-base text-body-color outline-none focus:border-blue-500 focus-visible:shadow-none"
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Your Message"
                      className="w-full resize-none rounded border border-gray-200 py-3 px-[14px] text-base text-body-color outline-none focus:border-blue-500 focus-visible:shadow-none"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-blue-600 w-full rounded border border-blue-600 p-3 text-white transition hover:bg-blue-700"
                    >
                      Send Message
                    </button>
                  </div>

                  {successMessage && (
                    <p className="mt-4 text-green-600 font-semibold">{successMessage}</p>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
