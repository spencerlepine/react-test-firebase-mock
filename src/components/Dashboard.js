const Dashboard = (props) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>{JSON.stringify(props.auth)}</p>
    </div>
  )
}

export default Dashboard