function Home() {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      {/* Test Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '90px',
        backgroundColor: '#ffffff',
        border: '3px solid #ff0000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        TEST HEADER - Should be visible with red border
      </div>
      
      {/* Test Slider */}
      <div style={{
        marginTop: '90px',
        height: '500px',
        backgroundColor: '#f8f9fa',
        border: '3px solid #007bff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        TEST SLIDER - Should be visible with blue border
      </div>
      
      {/* Test Content */}
      <div style={{
        padding: '20px',
        backgroundColor: '#e9ecef',
        minHeight: '300px'
      }}>
        <h1>Simple Home Test</h1>
        <p>This is a simplified Home component to test if the basic layout works.</p>
        <p>If you can see the red header and blue slider borders, then the issue is with the complex components.</p>
      </div>
    </div>
  );
}

export default Home;