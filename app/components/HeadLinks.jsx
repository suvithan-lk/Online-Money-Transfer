export default function HeadLinks() {
  const links = [
    '/assets/css/bootstrap.min.css',
    '/assets/css/animate.min.css',
    '/assets/css/fontawesome.min.css',
    '/assets/css/flaticon.css',
    '/assets/css/remixicon.css',
    '/assets/css/magnific-popup.min.css',
    '/assets/css/nice-select.css',
    '/assets/css/slick.min.css',
    '/assets/css/owl.carousel.min.css',
    '/assets/css/owl.theme.default.min.css',
    '/assets/css/meanmenu.css',
    '/assets/css/odometer.min.css',
    '/assets/css/style.css',
    '/assets/css/responsive.css',
    '/assets/css/dark-style.css',
    '/assets/css/web-bank-platform.css',
  ]

  return (
    <>
      {links.map(href => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </>
  )
}

