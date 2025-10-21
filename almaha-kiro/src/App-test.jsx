function App() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh',
      border: '5px solid #ff0000'
    }}>
      <h1 style={{
        color: '#ff0000',
        fontSize: '48px',
        textAlign: 'center',
        border: '3px solid #0000ff'
      }}>
        REACT TEST - If you can see this, React is working!
      </h1>
      <div style={{
        backgroundColor: '#00ff00',
        padding: '20px',
        margin: '20px 0',
        border: '3px solid #000000'
      }}>
        <p>This is a simple React test component.</p>
        <p>If you can see this green box with borders, then React is rendering correctly.</p>
      </div>
    </div>
  );
}

export default App;