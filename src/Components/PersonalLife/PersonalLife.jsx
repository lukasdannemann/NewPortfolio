import './PersonalLife.css'

// Byt ut mot riktiga bilder när du har dem:
// import img1 from '../../assets/foto1.jpg'
// import img2 from '../../assets/foto2.jpg'
// import img3 from '../../assets/foto3.jpg'

const photos = [
  {
    className: 'photo-card--big',
    // src: img1,
    label: '// centralamerika',
    caption: 'Någonstans längs vägen',
    alt: 'Centralamerika',
  },
  {
    className: 'photo-card--top',
    // src: img2,
    label: '// natur',
    caption: 'Vandring / utsikt',
    alt: 'Natur',
  },
  {
    className: 'photo-card--bottom',
    // src: img3,
    label: '// sydamerika',
    caption: 'Kort beskrivning',
    alt: 'Sydamerika',
  },
]

export default function PersonalLife() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; utanför skärmen</span></p>
      <p className="about-desc">
        Backpackade Syd- och Centralamerika — planerat lite, upplevt mycket.
      </p>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.className} className={`photo-card ${photo.className}`}>
            {/* När du har bilder: ta bort photo-placeholder och avkommentera img */}
            {/* <img src={photo.src} alt={photo.alt} /> */}
            <div className="photo-placeholder">{photo.alt}</div>
            <div className="photo-caption">
              <span className="photo-caption-label">{photo.label}</span>
              {photo.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}