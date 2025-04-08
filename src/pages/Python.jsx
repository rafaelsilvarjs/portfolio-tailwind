import React from "react";

export default function Python() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Projetos Python</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Projeto 1 - Análise de Salário */}
        <div className="bg-gray-800 text-white shadow-lg rounded-xl p-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
            📊 Análise de Salário Médio
          </h2>
          <p className="mb-4 text-gray-300">
            Este projeto analisa a média salarial por setor usando bibliotecas como Pandas e Matplotlib.
          </p>
          <div className="bg-gray-900 p-4 rounded mb-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import pandas as pd
import matplotlib.pyplot as plt

salarios = pd.read_csv('salarios.csv')
media_por_setor = salarios.groupby('Setor')['Salario'].mean()
media_por_setor.plot(kind='bar')
plt.title('Salário Médio por Setor')
plt.xlabel('Setor')
plt.ylabel('Salário Médio')
plt.show()`}
            </pre>
          </div>
          <img
            src="/images/python/grafico_salario.png"
            alt="Gráfico de Salários"
            className="rounded-xl w-full"
          />
        </div>

        {/* Projeto 2 - Gráfico PIB */}
        <div className="bg-gray-800 text-white shadow-lg rounded-xl p-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
            📈 Gráfico do PIB Brasileiro
          </h2>
          <p className="mb-4 text-gray-300">
            Gráfico de linha mostrando a evolução do PIB brasileiro ao longo dos anos, utilizando dados reais.
          </p>
          <div className="bg-gray-900 p-4 rounded mb-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import plotly.express as px

df = px.data.gapminder().query("country == 'Brazil'")
fig = px.line(df, x='year', y='gdpPercap', title='PIB do Brasil')
fig.show()`}
            </pre>
          </div>
          <img
            src="/images/python/grafico_pib.png"
            alt="Gráfico PIB do Brasil"
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
}









