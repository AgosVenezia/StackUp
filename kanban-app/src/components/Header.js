export function Header () {
    return(
      <header style={styles.header}>
        <h1 style={styles.title}>Kanban Board</h1>
        <p style={styles.subtitle}>Built by Aguito</p>
      </header>
    )
  }

  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '20px',
      backgroundColor: '#2c3e50',
      color: '#ffffff',
      width: '100%',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1
    },
    title: {
      margin: 0,
      padding: 0,
      fontSize: '2.5rem', 
      fontWeight: 'bold',
      textShadow: '2px 2px 2px #000000'
    },
    subtitle: {
      margin: 0,
      padding: 0,
      fontSize: '1.5rem',
      fontWeight: 'bold',
      textShadow: '2px 2px 2px #000000'
    }
  }
