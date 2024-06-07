import Input from "../shared/Input";

const Form = () => {
  return (
    <form className="w-full bg-tertiary">
      <div className="w-[70%] mx-auto max-w-[1450px] flex flex-col gap-4 items-center py-8">
        <h2 className="text-3xl font-bold uppercase text-primary">Como podemos colaborar?</h2>
        <div className="border-b border-primary w-full mb-8"></div>
        <div className="flex gap-4 w-[80%]">
          <Input type={"name"} placeholder={"Nome"} />
          <Input type={"email"} placeholder={"Email"} />
        </div>
        <textarea placeholder="Como podemos colaborar...?" 
        rows={10}
        className="text-gray-900 shadow-sm shadow-quaternary ring-1 ring-inset ring-gray-300 
        placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 border 
        w-[80%] border-gray-200 p-2 py-1.5"/>
        <button className="py-2 px-12 border-2 border-primary uppercase font-bold text-primary mt-6">Enviar!</button>
      </div>
    </form>
  );
};

export default Form;
