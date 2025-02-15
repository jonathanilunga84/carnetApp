'use client';
import React, { useState } from 'react';
import { TextInput, Button, Text } from '@mantine/core';

export default function Login() {
  const [formData, setFormData] = useState({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // 'type' n'est pas nécessaire ici
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(formData);
  // const handleSubmit =
  return (
    <div className="bg-[rgba(209,209,209,1)] h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center shadow-xl h-[400px] w-[350px] px-5 rounded-xl bg-white">
        {/* <h3 className="text-3xl font-bold">Connexion</h3> */}
        <h3>
          <Text className="text-3xl uppercase" size="lg" fw={700}>
            Connexion
          </Text>
        </h3>

        <form action="" className="w-[100%]">
          {/* <div className="mt-10">
            <label className="block">
              <span className="block text-[20px] font-medium text-slate-700">
                Username
              </span>
              <input
                type="text"
                className="w-full px-3 py-2 bg-whiteM border-2 border-gray-700/40M rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800"
                placeholder="Saisir l'adresse mail "
              />
            </label>
          </div> */}
          {/* <div className="mt-5">
            <label className="block">
              <span className="block text-[20px] font-medium text-slate-700">
                Mot de passe
              </span>
              <input
                type="text"
                className="w-full px-3 py-3 bg-whiteM border-2 border-gray-700/40 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:border-blue-800"
                placeholder="Saisir le mot de passe "
              />
            </label>
          </div> */}

          <div className="mt-5">
            <TextInput
              name="email"
              value={formData.email || ''}
              onChange={handleChange}
              label="Email"
              placeholder="Saisir votre mail"
              inputWrapperOrder={['label', 'input', 'description', 'error']}
            />
          </div>

          <div className="mt-3">
            <TextInput
              type="text"
              name="password"
              value={formData.password || ''}
              onChange={handleChange}
              label="Mot de passe"
              placeholder="Saisir votre mot de passe"
              inputWrapperOrder={['label', 'input', 'description', 'error']}
            />
          </div>

          <div className="flex justify-end mt-5">
            {/* <button
              type="submit"
              className="bg-blue-800 py-3 px-5 rounded-md text-white font-bold hover:bg-blue-800/80"
            >
              Connexion
            </button> */}
            <Button
              type="submit"
              className="px-5 rounded-md text-[1.1rem]"
              variant="filled"
            >
              Connexion
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
