function DashboardCard({ title, value, icon }) {
  return (
    <div className="dashboard-card">
      <h1>{icon}</h1>
      <h2>{title}</h2>
      <h3>{value}</h3>
    </div>
  );
}

export default DashboardCard;