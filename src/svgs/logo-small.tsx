import logoImage from '../app/imgs/RIMBERIO__2_-removebg-preview.png'

export const LogoSmall = () => {
  return (
    <img
      src={logoImage.src}
      alt="Rimberio Logo"
      width="116"
      height="61"
      style={{ objectFit: 'contain' }}
    />
  )
}
