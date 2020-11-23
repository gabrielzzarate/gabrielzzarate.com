export default function share(shareLink = '', socialLink = '', socialMedia = '', title = '') {
  const link = !shareLink ? window.location.href : shareLink;

  window.open(
    `${socialLink}${link}`,
    `${socialMedia}, _blank`,
    'width=400,height=400'
  );
  }
