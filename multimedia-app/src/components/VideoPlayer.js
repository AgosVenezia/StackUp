export const VideoPlayer = ({ path }) => {
    return (
      <div style={{ width: "100%" }}>
        <video controls>
          <source src={path} type="video/mp4" />
        </video>
      </div>
    )
  }