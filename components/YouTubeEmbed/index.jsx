function YouTubeEmbed({ videoId, title }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded"
      style={{ aspectRatio: '16 / 9' }}
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export default YouTubeEmbed
