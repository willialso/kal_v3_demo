import { useState } from 'react'

const DEFAULT_ATTICUS_LOGO_URL = 'https://i.ibb.co/KpbRyd7w/atticus-copy.png'

function PresentationGate({ onAgree }) {
  const [tvpLogoLoadFailed, setTvpLogoLoadFailed] = useState(false)
  const [atticusLogoLoadFailed, setAtticusLogoLoadFailed] = useState(false)

  const tvpLogoSrc = import.meta.env.VITE_TVP_LOGO_URL || '/tvp-logo.png'
  const atticusLogoSrc = import.meta.env.VITE_ATTICUS_LOGO_URL || DEFAULT_ATTICUS_LOGO_URL

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '760px',
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 18px 35px rgba(15, 23, 42, 0.08)',
        padding: '2rem'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem'
        }}>
          {!atticusLogoLoadFailed ? (
            <img
              src={atticusLogoSrc}
              alt="Atticus"
              onError={() => setAtticusLogoLoadFailed(true)}
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          ) : (
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>
              Atticus
            </div>
          )}

          <div style={{ fontSize: '1.125rem', fontWeight: 700, color: '#9ca3af' }}>
            &lt;&gt;
          </div>

          {!tvpLogoLoadFailed ? (
            <img
              src={tvpLogoSrc}
              alt="Trammell Venture Partners"
              onError={() => setTvpLogoLoadFailed(true)}
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          ) : (
            <div style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>
              Trammell Venture Partners
            </div>
          )}
        </div>

        <div style={{
          textAlign: 'center',
          color: '#4b5563',
          lineHeight: 1.55,
          marginBottom: '1.75rem'
        }}>
          <p style={{ margin: '0 0 0.4rem 0', fontWeight: 600, color: '#1f2937' }}>
            For TVP internal presentation purposes.
          </p>
          <p style={{ margin: '0 0 0.4rem 0' }}>
            This preview includes private, sensitive product information.
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#6b7280' }}>
            Please review confidentially.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            onClick={onAgree}
            style={{
              backgroundColor: '#111827',
              color: '#ffffff',
              border: 'none',
              borderRadius: '10px',
              padding: '0.7rem 1.35rem',
              fontSize: '0.95rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1f2937' }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#111827' }}
          >
            Agree & Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default PresentationGate
