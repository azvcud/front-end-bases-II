'use client';

import * as React from "react";

interface SelectInputProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  options,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col mt-8 max-md:max-w-full">
      <div className="font-medium text-black text-ellipsis max-md:max-w-full">
        {label}
      </div>
      <button
        type="button"
        className="flex items-center justify-between gap-4 px-4 py-2 mt-2 bg-white rounded-lg border border-solid border-neutral-200 text-zinc-500 max-md:flex-wrap max-md:px-5"
        onClick={handleToggle}
      >
        <div className="flex-1 text-ellipsis max-md:max-w-full">
          {value || "Seleccione una opción"}
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/245de0f0c45e9a16d332378bca3d5ff08d50f4cf294ae90ec616490145201c21?apiKey=f50096866ace49c1858e31fb063ed080&"
          alt=""
          className="shrink-0 w-6 aspect-square transition-transform duration-300"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="block w-full px-4 py-2 text-left hover:bg-neutral-100"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col mt-8 text-black max-md:max-w-full">
      <label
        htmlFor={`${label.toLowerCase()}Input`}
        className="font-medium text-ellipsis max-md:max-w-full"
      >
        {label}
      </label>
      <input
        id={`${label.toLowerCase()}Input`}
        type="text"
        value={value}
        onChange={handleChange}
        className="justify-center px-4 py-2 mt-2 whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:max-w-full"
      />
    </div>
  );
};

interface DateInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ label, value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex flex-col mt-8 text-black max-md:max-w-full">
      <label
        htmlFor={`${label.toLowerCase()}Input`}
        className="font-medium text-ellipsis max-md:max-w-full"
      >
        {label}
      </label>
      <input
        id={`${label.toLowerCase()}Input`}
        type="date"
        value={value}
        onChange={handleChange}
        className="justify-center px-4 py-2 mt-2 whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 text-ellipsis max-md:max-w-full"
      />
    </div>
  );
};

interface MenuItem {
  icon: string;
  label: string;
}

const MyComponent: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23a979084e1caf06971cdc3871ead192bf09178630689dfe54c437b4b7f280db?apiKey=f50096866ace49c1858e31fb063ed080&",
      label: "Cliente",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1d3e20209cf5a9e803b062d10c0d0cc749d7bee6b82176d24ca9e6b83e2bf4c4?apiKey=f50096866ace49c1858e31fb063ed080&",
      label: "Representante de ventas",
    },
  ];

  const [activeMenuItem, setActiveMenuItem] = React.useState(
    menuItems[0].label
  );

  const [formData, setFormData] = React.useState({
    nombre: "Fulanito",
    identificacion: "230984094328",
    correoElectronico: "carlitos79@xf.com",
    genero: "",
    fechaNacimiento: "",
    telefonoContacto: "3134563245",
    direccion: "Carrera 69 # 18 - 34",
    ciudad: "",
  });

  const handleMenuItemClick = (label: string) => {
    setActiveMenuItem(label);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Perform form submission logic here
  };

  return (
    <div className="bg-white">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
          <nav className="flex flex-col grow px-3 pt-9 pb-20 w-full font-medium bg-white border-r border-solid border-neutral-200 max-md:mt-10 max-md:max-w-full">
            <div className="self-start ml-4 text-3xl tracking-tight leading-8 text-lime-800 max-md:ml-2.5">
              NatamE
            </div>
            <div className="flex flex-col mt-5 text-base leading-6 text-black max-md:max-w-full">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`flex gap-4 px-4 py-2 whitespace-nowrap rounded-lg ${
                    activeMenuItem === item.label
                      ? "bg-neutral-100"
                      : "bg-white"
                  } max-md:flex-wrap max-md:px-5`}
                  onClick={() => handleMenuItemClick(item.label)}
                >
                  <img
                    src={item.icon}
                    alt=""
                    className="shrink-0 w-6 aspect-square"
                  />
                  <div className="flex-1 text-ellipsis">{item.label}</div>
                </button>
              ))}
            </div>
          </nav>
        </div>
        <main className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-5 my-auto max-md:mt-10 max-md:max-w-full">
            <h1 className="text-3xl font-semibold tracking-tight leading-8 text-black max-md:max-w-full">
              Registrar cliente
            </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col mt-8 text-base leading-6 max-md:max-w-full"
            >
              <div className="font-medium text-black text-ellipsis max-md:max-w-full">
                Representante asociado:
              </div>
              <div className="flex gap-5 justify-between self-start mt-8 font-medium text-black max-md:flex-wrap">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6386d6d4cb7c5d44a159313b0d594fc1c8a678322722f9a5b6384ed74d37d9a0?apiKey=f50096866ace49c1858e31fb063ed080&"
                  alt="Tomate Virgilio"
                  className="shrink-0 w-16 aspect-square"
                />
                <div className="justify-center my-auto text-ellipsis">
                  Tomate Virgilio
                </div>
              </div>
              <TextInput
                label="Nombre"
                value={formData.nombre}
                onChange={(value) => handleInputChange("nombre", value)}
              />
              <TextInput
                label="Identificación"
                value={formData.identificacion}
                onChange={(value) => handleInputChange("identificacion", value)}
              />
              <TextInput
                label="Correo Electrónico"
                value={formData.correoElectronico}
                onChange={(value) =>
                  handleInputChange("correoElectronico", value)
                }
              />
              <SelectInput
                label="Género"
                options={["Masculino", "Femenino", "Otro"]}
                value={formData.genero}
                onChange={(value) => handleInputChange("genero", value)}
              />
              <DateInput
                label="Fecha de nacimiento"
                value={formData.fechaNacimiento}
                onChange={(value) =>
                  handleInputChange("fechaNacimiento", value)
                }
              />
              <TextInput
                label="Teléfono de contacto"
                value={formData.telefonoContacto}
                onChange={(value) =>
                  handleInputChange("telefonoContacto", value)
                }
              />
              <TextInput
                label="Dirección"
                value={formData.direccion}
                onChange={(value) => handleInputChange("direccion", value)}
              />
              <SelectInput
                label="Ciudad"
                options={["Bogotá", "Medellín", "Cali", "Barranquilla"]}
                value={formData.ciudad}
                onChange={(value) => handleInputChange("ciudad", value)}
              />
              <button
                type="submit"
                className="justify-center self-start px-4 py-2 mt-8 font-medium text-white whitespace-nowrap bg-lime-800 rounded-lg"
              >
                Registrar
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MyComponent;