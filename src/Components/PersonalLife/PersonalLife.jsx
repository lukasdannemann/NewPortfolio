import './PersonalLife.css'

// Byt ut mot riktiga bilder när du har dem:
import img1 from '../../assets/Acatenango.jpg'
import img2 from '../../assets/HighCoast.jpg'
import img3 from '../../assets/SaltMine.jpg'

const photos = [
  {
    className: 'photo-card--big',
    src: img1,
    caption: 'Acatenango',
    alt: 'Centralamerika',
  },
  {
    className: 'photo-card--top',
    src: img2,
    caption: 'Höga Kusten',
    alt: 'Natur',
  },
  {
    className: 'photo-card--bottom',
    src: img3,
    caption: 'Salineras de Maras',
    alt: 'Sydamerika',
    position: 'center 70%'
  },
]

export default function PersonalLife() {
  return (
    <div className="about-card">
      <p><span className="about-label">&gt; afk</span></p>
      <p>
        
      </p>

      <div className="photo-grid">
        {photos.map((photo) => (
          <div key={photo.className} className={`photo-card ${photo.className}`}>
            {/* När du har bilder: ta bort photo-placeholder och avkommentera img */}
            <img src={photo.src} alt={photo.alt} style={{ objectPosition: photo.position  }}/>
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