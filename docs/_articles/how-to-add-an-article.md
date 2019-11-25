---
layout: article
title: How to add an article
date: 2019-11-20T12:00:00.000Z
type: article
published: true
status: publish
---
# How to add an article

Below are examples of the content produced by the controls markdown, use this to see how things will appear if you use the Rich Text editor.

# Example Header 1

This is a block of text

## Example Header 2

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

_Note:_ You can use switch from "Rich Text" to "Markdown" mode to see the raw [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) created by the editor, this allows you to manually add special classes to elements or raw HTML from the [govuk design-system](https://design-system.service.gov.uk/).

Example - Lead paragraph:

```
This is a lead paragraph created by manually adding a special class
{: .govuk-body-l}
```

This is a lead paragraph created by manually adding a special class
{: .govuk-body-l}

Example - Summary list:

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
