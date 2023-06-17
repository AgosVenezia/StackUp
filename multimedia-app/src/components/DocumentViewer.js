export const DocumentViewer = ({ path }) => {
    return (
      <div style={{width:"100%"}}>
        <iframe style={{width:"100%", height: "300px"}} src={path}></iframe>
      </div>
    )
  }