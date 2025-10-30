import { useForm } from "react-hook-form";
import { api } from "../services/Api";

type FormData = {
  nome: string;
  email: string;
  sexo: string;
  nascimento: string;
  cpf: string;
  telefone: string;
  mensagem: string;
};

export default function ContatoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await api.post("/contato", data);
      alert(`Mensagem enviada com sucesso!\nNome: ${data.nome}\nEmail: ${data.email}`);
      reset();
    } catch (error: any) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar a mensagem. Tente novamente mais tarde.");
    }
  };

  return (
    <main className="bg-gray-100 py-10 px-4 min-h-screen flex items-start justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-center text-xl font-bold mb-6">Envie uma mensagem</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
          <input {...register("nome", { required: "Nome é obrigatório" })} placeholder="Nome" className="border rounded px-3 py-2" />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

          <input {...register("email", { required: "Email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} placeholder="E-mail" className="border rounded px-3 py-2" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <select {...register("sexo", { required: "Selecione o sexo" })} className="border rounded px-3 py-2">
            <option value="">Selecione o sexo</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          {errors.sexo && <p className="text-red-500 text-sm">{errors.sexo.message}</p>}

          <input {...register("nascimento", { required: "Ano de nascimento é obrigatório", min: { value: 1900, message: "Ano inválido" }, max: { value: new Date().getFullYear(), message: "Ano inválido" } })} placeholder="Ano de nascimento" type="number" className="border rounded px-3 py-2" />
          {errors.nascimento && <p className="text-red-500 text-sm">{errors.nascimento.message}</p>}

          <input {...register("cpf", { required: "CPF obrigatório", pattern: { value: /^\d{11}$/, message: "CPF deve ter 11 números" } })} placeholder="CPF (apenas números)" maxLength={11} className="border rounded px-3 py-2" />
          {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}

          <input {...register("telefone", { required: "Telefone obrigatório", pattern: { value: /^\d{10,11}$/, message: "Telefone deve ter 10 ou 11 números" } })} placeholder="Telefone (com DDD)" maxLength={11} className="border rounded px-3 py-2" />
          {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone.message}</p>}

          <textarea {...register("mensagem", { required: "Mensagem obrigatória" })} placeholder="Mensagem" className="border rounded px-3 py-2 h-24" />
          {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem.message}</p>}

          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Enviar</button>
        </form>
      </div>
    </main>
  );
}
