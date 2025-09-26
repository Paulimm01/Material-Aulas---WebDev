import { Button } from "@/components/ui/button"
import { GraficoBarras } from "./GraficoBarras"
import { GraficoPizza }  from"./GraficoPizza";
export default function Relatorios() {
  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Relatórios</h1>
      <p className="mt-2 text-gray-600">Página de relatórios.</p>
      <Button onClick={() => handClick(Clicou)}>Click me</Button>
      <div className = "grid grid-cols-2">
      <GraficoBarras/>
      <GraficoPizza/>
      </div>
    </div>
  );
}
