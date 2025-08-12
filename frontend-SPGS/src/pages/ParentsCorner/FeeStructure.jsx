import fee from '../../assets/image.png';


const FeeStructure = () => {
  return (
    <>
    <section
      style={{
        maxWidth: '950px',
        margin: '2rem auto',
        background: '#fff',
        borderRadius: '12px',
        boxShadow: '0 6px 24px rgba(0,0,0,0.05)',
        padding: '2rem',
        textAlign: 'center'
      }}
    >
      <h2
        style={{
          color: '#1a237e',
          fontWeight: 700,
          fontSize: '2rem',
          marginBottom: '1rem'
        }}
      >
         Fee List
      </h2>
      <p style={{ color: '#555', marginBottom: '2rem' }}>
        Below is the latest fee schedule for Students.
      </p>
      <div
        style={{
          border: '1px solid #eee',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'inline-block'
        }}
      >
        <img
          src={fee}
          alt="Office Fee List"
          style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
        />
      </div>
      <div style={{ marginTop: '1.5rem', color: '#888' }}>
        <small>
          For more details, contact the office administration.
        </small>
        
      </div>
    </section>

    </>
  )
}



export default FeeStructure;
