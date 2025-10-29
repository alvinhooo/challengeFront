import Fotocapa from "../assets/hops.jpg";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Bem-vindo ao Portal Local</h1>
        <img src={Fotocapa} alt="" />
        <p className="text-gray-700">
          Projeto solução sobre o HC (Hospital das Clínicas)
        </p>
      </div>
    </div>
  );
}