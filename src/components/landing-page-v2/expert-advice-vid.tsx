export default async function VideoComponent() {
  return (
    <video controls style={{ width: "500px", height: "500px" }}>
      <source src="https://www.youtube.com/watch?v=X2jakwIVLbY&t=1s" />
    </video>
  );
}
