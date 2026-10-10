const sizeClasses = {
  tall: 'min-h-[400px]',
  landscape: 'min-h-[220px] aspect-video',
  square: 'aspect-square min-h-[200px]',
}

export default function MediaPlaceholder({ label, size = 'landscape', showPlay = false, photo, sizes = '(min-width: 1024px) 50vw, 100vw' }) {
  const playButton = showPlay && (
    <div className="w-12 h-12 bg-red/90 text-white rounded-full flex items-center justify-center text-lg mb-3 shadow-lg">
      &#9654;
    </div>
  )

  if (photo) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-[#dde3ed] shadow-sm ring-1 ring-navy/5 ${sizeClasses[size] || sizeClasses.landscape}`}>
        <img
          src={photo.src}
          srcSet={photo.srcSet}
          sizes={sizes}
          width={photo.width}
          height={photo.height}
          alt={photo.alt || label}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {showPlay && <div className="absolute inset-0 flex items-center justify-center">{playButton}</div>}
      </div>
    )
  }

  return (
    <div
      className={`bg-gradient-to-br from-[#dde3ed] to-[#c8d0de] border-2 border-dashed border-[#c8d0de] rounded-lg flex flex-col items-center justify-center text-[#5a6a80] text-[13px] font-medium text-center p-5 ${sizeClasses[size] || sizeClasses.landscape}`}
    >
      {playButton}
      <span>{label}</span>
    </div>
  )
}
