'use client';
import * as React from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SelectOption {
  label: string;
  value: string;
}

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  onChange: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex flex-col mt-8 text-black whitespace-nowrap max-md:max-w-full">
    <label className="font-medium text-ellipsis max-md:max-w-full">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="justify-center px-4 py-2 mt-2 bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:max-w-full"
    />
  </div>
);

export const PasswordInput: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex flex-col mt-8 text-black whitespace-nowrap max-md:max-w-full">
    <label className="font-medium text-ellipsis max-md:max-w-full">{label}</label>
    <input
      type="password"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="justify-center px-4 py-2 mt-2 bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:max-w-full"
    />
  </div>
);

const DateInput: React.FC<InputProps> = ({ label, value, onChange }) => (
  <div className="flex flex-col mt-8 max-md:max-w-full">
    <label className="font-medium text-black text-ellipsis max-md:max-w-full">{label}</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex gap-4 px-4 py-2 mt-2 bg-white rounded-lg border border-solid border-neutral-200 text-zinc-500 max-md:flex-wrap max-md:px-5"
    />
  </div>
);

const Select: React.FC<SelectProps> = ({ label, options, onChange }) => (
  <div className="flex flex-col mt-8 max-md:max-w-full">
    <label className="font-medium text-black text-ellipsis max-md:max-w-full">{label}</label>
    <div className="relative">
      <select
        onChange={(e) => onChange(e.target.value)}
        className="flex gap-4 px-4 py-2 mt-2 bg-white rounded-lg border border-solid border-neutral-200 text-zinc-500 max-md:flex-wrap max-md:px-5 appearance-none w-full"
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?apiKey=f50096866ace49c1858e31fb063ed080&"
        alt=""
        className="absolute right-4 top-1/2 -translate-y-1/2 shrink-0 w-6 aspect-square pointer-events-none"
      />
    </div>
  </div>
);

const MyComponent: React.FC = () => {
  const [name, setName] = React.useState("");
  const [identification, setIdentification] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [contractDate, setContractDate] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [regional, setRegional] = React.useState("");
  const [formUser, setFormUser] = React.useState("");
  const [formPassword, setFormPassword] = React.useState("");

  const handleChangeCredentials = () => {
    localStorage.setItem("user", formUser)
    localStorage.setItem("password", formPassword)
    toast.success('Se cambiaron las credenciales.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }

  const genderOptions: SelectOption[] = [
    { label: "Masculino", value: "M" },
    { label: "Femenino", value: "F" },
    { label: "Otro", value: "O" },
  ];

  const regionalOptions: SelectOption[] = [
    { label: "North", value: "north" },
    { label: "South", value: "south" },
    { label: "East", value: "east" },
    { label: "West", value: "west" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const representanteData = {
      identificacion: parseInt(identification),
      correo: email,
      nombre1: name,
      nombre2: '', // Opcional
      apellido1: 'a',
      apellido2: '', // Opcional
      genero: gender.charAt(0),
      fechaNacimiento: new Date(birthdate).toISOString(), // Convertir la fecha de nacimiento a formato ISO 8601
      fechaContratacion: new Date(contractDate).toISOString(), // Convertir la fecha de contrato a formato ISO 8601
      telefono: parseInt(phone),
      diraccion: 'a',
      codigoRegion: 1, //TODO: hacerlo dinamico
    };

    console.log(representanteData);
    
  
    try {
      const response = await axios.post('http://localhost:8080/representante/agregar', representanteData, {
        headers: {
          user: localStorage.getItem("user"),
          password: localStorage.getItem("password"),
        },
      });
      console.log('Representante registrado con éxito:', response.data);
      toast.success('Representante registrado con éxito', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    } catch (error: any) {
      console.error('Error al registrar representante:', error.response.data);
      toast.error(`Error al registrar representante: ${error.response.data}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

  };

  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <nav className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow px-3 pt-9 pb-20 w-full font-medium bg-white border-r border-solid border-neutral-200 max-md:mt-10 max-md:max-w-full">
            <div className="self-start ml-4 text-3xl tracking-tight leading-8 text-lime-800 max-md:ml-2.5">
              NatamE
            </div>
            <div className="flex flex-col mt-5 text-base leading-6 text-black max-md:max-w-full">
              <button className="flex gap-4 px-4 py-2 rounded-lg bg-neutral-100 max-md:flex-wrap max-md:px-5">
                <img loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e20209cf5a9e803b062d10c0d0cc749d7bee6b82176d24ca9e6b83e2bf4c4?apiKey=f50096866ace49c1858e31fb063ed080&" 
                alt="" className="shrink-0 w-6 aspect-square" 
                />
                <div className="flex-1 text-ellipsis">Representante de ventas</div>
              </button>
              <button className="flex gap-4 px-4 py-2 whitespace-nowrap bg-white rounded-lg max-md:flex-wrap max-md:px-5">
                <img loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?apiKey=f50096866ace49c1858e31fb063ed080&" 
                alt="" className="shrink-0 w-6 aspect-square" 
                />
                <div className="flex-1 text-ellipsis">Cliente</div>
              </button>
            </div>
            <Input label="Usuario" value={formUser} onChange={(value) => setFormUser(value)} />
            <PasswordInput label="Contraseña" value={formPassword} onChange={(value) => setFormPassword(value)} />
            <button
                onClick={handleChangeCredentials}
                className="justify-center self-start px-4 py-2 mt-8 font-medium text-white whitespace-nowrap bg-lime-800 rounded-lg"
              >
                Cambiar credenciales
            </button>
          </div>
        </nav>
        <main className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-3xl font-semibold tracking-tight leading-8 text-black max-md:max-w-full">
              Registrar representante de venta
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col mt-8 text-base leading-6 max-md:max-w-full">
              <div className="font-medium text-black text-ellipsis max-md:max-w-full">Representante asociado:</div>
              <div className="flex gap-5 justify-between self-start mt-8 font-medium text-black max-md:flex-wrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6386d6d4cb7c5d44a159313b0d594fc1c8a678322722f9a5b6384ed74d37d9a0?apiKey=f50096866ace49c1858e31fb063ed080&"
                  alt="Tomate Virgilio"
                  className="shrink-0 w-16 aspect-square"
                />
                <div className="justify-center my-auto text-ellipsis">Tomate Virgilio</div>
              </div>
              <Input label="Nombre" value={name} onChange={(value) => setName(value)} />
              <Input label="Identificación" value={identification} onChange={(value) => setIdentification(value)} />
              <Input label="Correo Electrónico" value={email} onChange={(value) => setEmail(value)} />
              <Select label="Género" options={genderOptions} onChange={(value) => setGender(value)} />
              <DateInput label="Fecha de nacimiento" value={birthdate} onChange={(value) => setBirthdate(value)} />
              <DateInput label="Fecha de contrato" value={contractDate} onChange={(value) => setContractDate(value)} />
              <Input label="Teléfono de contacto" value={phone} onChange={(value) => setPhone(value)} />
              <Select label="Regional" options={regionalOptions} onChange={(value) => setRegional(value)} />
              <button
                type="submit"
                className="justify-center self-start px-4 py-2 mt-8 font-medium text-white whitespace-nowrap bg-lime-800 rounded-lg"
              >
                Registrar
              </button>
            </form>
          </section>
        </main>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MyComponent;