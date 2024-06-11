"use client"

import { useState } from "react";
import Input from "../shared/Input";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(formData)
    

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Adicione este log
    console.log("Server response:", result); // Adicione este log

      if (response.ok) {
        alert("Email sent successfully");
      } else {
        alert("Failed to send email" + result.message);
      }
    } catch (error) {
      // alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full bg-form bg-cover" id="contactSection">
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col gap-4 items-center py-8 max-sm:w-[85%] max-md:w-[85%]">
        <h2 className="text-3xl font-bold uppercase text-primary">
          Como podemos colaborar?
        </h2>
        <div className="border-b border-primary w-full mb-8"></div>
        <div className="flex gap-4 w-[80%] max-sm:w-[100%] max-md:w-[100%]">
          <Input
            type={"name"}
            name="name"
            placeholder={"Nome"}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type={"email"}
            name="email"
            placeholder={"Email"}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Como podemos colaborar...?"
          rows={10}
          value={formData.message}
          onChange={handleChange}
          className="text-gray-900 shadow-sm shadow-quaternary ring-1 ring-inset ring-gray-300 
        placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border 
        w-[80%] border-gray-200 p-2 py-1.5 max-sm:w-[100%] max-md:w-[100%]"
        />
        <button
          type="submit"
          className="py-2 px-12 border-2 border-primary uppercase font-bold text-primary mt-6 mb-12 max-md:text-tertiary max-md:border-tertiary"
        >
          Enviar!
        </button>
      </div>
    </form>
  );
};

export default Form;
