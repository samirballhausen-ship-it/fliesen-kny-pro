import React from 'react'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('App Error:', error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0D0D0D',
            color: '#FAF8F5',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{ fontSize: '24px', marginBottom: '16px', fontWeight: 600 }}>
              Fliesen Kny
            </h1>
            <p style={{ marginBottom: '8px', color: '#D9D0C1' }}>
              Es ist ein Fehler aufgetreten.
            </p>
            <p style={{ color: '#D9D0C1' }}>Bitte laden Sie die Seite neu.</p>
            <button
              onClick={() => window.location.reload()}
              style={{
                marginTop: '24px',
                padding: '14px 28px',
                backgroundColor: '#CE1A1E',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Seite neu laden
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
