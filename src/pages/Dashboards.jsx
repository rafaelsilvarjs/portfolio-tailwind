function Dashboards() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Dashboards Power BI</h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Dashboard 1 */}
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard - OTIF</h2>
          <div className="aspect-video border border-gray-700 rounded-xl overflow-hidden">
            <iframe
              title="Dashboard OTIF"
              src="https://app.powerbi.com/view?r=eyJrIjoiZGVmOGNkY2UtMDU0My00ODAxLTliNTYtYTUxMDg5MmU3MTI0IiwidCI6ImJiZWZiMzA5LTAwNDEtNDg3NS1iMzZlLTE1OTc4OGZjOWM5NiJ9"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Dashboard 2 - Placeholder (você pode substituir o link) */}
        <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden p-4">
          <h2 className="text-xl font-semibold mb-4">Dashboard - Performance Comercial</h2>
          <div className="aspect-video border border-gray-700 rounded-xl overflow-hidden">
            <iframe
              title="Dashboard Performance Comercial"
              src="https://app.powerbi.com/view?r=eyJrIjoiYWE3NzcyM2EtMjg3OS00ZWFhLTgzNzQtZGVmMDJkYzFkMTQwIiwidCI6ImJiZWZiMzA5LTAwNDEtNDg3NS1iMzZlLTE1OTc4OGZjOWM5NiJ9"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;




