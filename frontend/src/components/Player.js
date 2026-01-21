function Player({ url, title }) {
  if (!url) {
    return (
      <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-2">Now Playing</h2>
        <div className="text-gray-300">Select a song to play</div>
      </div>
    );
  }

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Now Playing</h2>
      <div className="mb-4">
        <div className="font-semibold text-lg">{title}</div>
        <div className="text-gray-400 text-sm">Streaming from server</div>
      </div>
      <audio controls className="w-full">
        <source src={url} />
      </audio>
    </div>
  );
}

export default Player;
