---
layout: article
title: How to add an article
date: 2019-11-20T12:00:00.000Z
type: article
published: true
status: publish
---
# How to add an article

1. Go to the [/admin](/admin) page of the site (note: this is only available on the CMS version of the site and only usable for authorised GitHub users) - you will need to login via GitHub and authorise the CMS Application to use your account
2. Click "New Article" button (or click existing article to edit)
3. Set the Title for the article (this must be unique)
4. Add content for the article using the Rich Text controls
5. Click "Save" in the top left to save the unpublished article
6. Optionally after saving you can wait a minute and click the "Check for preview" link and click again to view a preview version of the site with your change before it is published, go to `/articles` of the preview to get a link to the page
7. Ask someone to review your changes by going to the [/admin](/admin) page to view the unpublished article and setting the status using the control in the top right to ready
8. When your article is ready, click the "Publish" button in the top right, once finished this will add your article to [/articles](/articles) list and available to link on the main site

_Notes:_

* Your content must still be linked from a main page before users can easily see it
* Existing content must be converted to simple markdown before it can be edited using the Rich Text editor
* You can upload images to your articles using the "+" button on the Rich Text editor

![Editor controls](/docs/assets/images/cms/how-to-add-an-article-image.png "Editor controls")

## Content examples

Below are examples of the content produced by the controls markdown, use this to see how things will appear if you use the Rich Text editor.

# Example H1

## Example H2

This is a block of text

This is an example bullet list

* Item 1
* Item 2
  * sub-item 2-1
  * sub-item 2-2

This is an example numbered list

1. Numbered item 1
2. Numbered item 2
   1. sub-item 2-1
   2. sub-item 2-2

Quote:

> This is a quote.

Code block:

```
print("code block")
i=i+1
```

Code statement: `print("code line")`

This is a paragraph with a link back to [home](/).

This is a paragraph with **bold** and _italic_ text.

Below is an uploaded image:

![govuk crest](/docs/assets/images/cms/govuk-crest.png "govuk crest uploaded")

Images will appear on separate lines.

## Custom elements

You can use switch from "Rich Text" to "Markdown" mode to see the raw [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) created by the editor, this allows you to manually add special classes to elements or raw HTML from the [govuk design-system](https://design-system.service.gov.uk/).

**Example** - Lead paragraph:

```
This is a lead paragraph created by manually adding a special class
{: .govuk-body-l}
```

This is a lead paragraph created by manually adding a special class
{: .govuk-body-l}

**Example** - Summary list:

```
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
</dl>
```

<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Name
    </dt>
    <dd class="govuk-summary-list__value">
      Sarah Philips
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>
    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>
  </div>
</dl>
