// Script to append gov.uk styles to HTML pages generated from Netlify CMS markdown
// see https://design-system.service.gov.uk/ for styles
$('.govuk-main-wrapper h1').addClass('govuk-heading-xl');
$('.govuk-main-wrapper h2').addClass('govuk-heading-l');
$('.govuk-main-wrapper h3').addClass('govuk-heading-m');
$('.govuk-main-wrapper h4').addClass('govuk-heading-s');

$('.govuk-main-wrapper p').addClass('govuk-body');
$('.govuk-main-wrapper a').addClass('govuk-link');

$('.govuk-main-wrapper ol').addClass('govuk-list govuk-list--number');
$('.govuk-main-wrapper ul').addClass('govuk-list govuk-list--bullet');

$('.govuk-main-wrapper blockquote').addClass('govuk-inset-text');

// correct cms uploaded image url
$('.govuk-main-wrapper img').each(function() {
  $(this).attr('src') = $(this).attr('src').replace|('/docs', '/street-manager-docs');
});