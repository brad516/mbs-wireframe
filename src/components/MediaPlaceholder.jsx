const sizeClasses = {
  tall: 'min-h-[400px]',
  landscape: 'min-h-[220px] aspect-video',
  square: 'aspect-square min-h-[200px]',
}

export default function MediaPlaceholder({ label, size = 'landscape', showPlay = false }) {
  return (
    <div
      className={`bg-gradient-to-br from-[#dde3ed] to-[#c8d0de] border-2 border-dashed border-[#c8d0de] rounded-lg flex flex-col items-center justify-center text-[#5a6a80] text-[13px] font-medium text-center p-5 ${sizeClasses[size] || sizeClasses.landscape}`}
    >
      {showPlay && (
        <div className="w-12 h-12 bg-red/90 text-white rounded-full flex items-center justify-center text-lg mb-3 shadow-lg">
          &#9654;
        </div>
      )}
      <span>{label}</span>
    </div>
  )
}
