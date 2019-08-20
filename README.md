# street-manager-docs

Welcome to the new Street Manager documentation repository.  This repo should be considered the primary source of truth for technical documentation relating to the DfT Street Manager service.

This repo will be updated and extended regularly, but will initially include the initial Street Manager API specification and business rules documentation.

Please contact the Street Manager team directly through email or Slack, should you have any queries or require additional support.

**NOTE:** This documentation is being trialled for use with the Street Manager pilot and private beta, it is not in final state and should not be taken as production documentation.

## Updating the API documentation

Steps for creating a new API Specification version:
1. Copy the previous versions entire folder (e.g. `cp -r docs/api-documentation/V0.2 docs/api-documentation/V0.3`)
2. Update the API documentation in the new version
3. Add a link to the new version in the `docs/api-documentation/index.html`

Notes for updating the API documentation:
* The API Documentation uses markdown augmented with [gov.uk design system styles](https://design-system.service.gov.uk/)
* See [here](https://digitaldrummerj.me/styling-jekyll-markdown/) for guide on adding CSS styles to markdown HTML
* Code sections should be wrapped in `<code>...</code>` tags
* All paragraphs need to be followed with `{: .govuk-body}`
* All heading must be followed by `{: .govuk-heading-l}`, `{: .govuk-heading-m}` etc.
* Some HTML elements must use explicit HTML in markdown to render correctly, such as lists/tables, e.g. `<ol class="govuk-list govuk-list--bullet"><li>item</li></ol>` NOT `* item`

## GitHub pages

This repository contains a folder `/docs` which is intended to be served as a [Jekyll](https://jekyllrb.com/docs/github-pages/) static HTML site for serving the documentation via [GitHub pages](https://departmentfortransport.github.io/street-manager-docs/). See [here](https://help.github.com/en/articles/configuring-a-publishing-source-for-github-pages) for details on setting up the repository.

### Run locally

You can clone and run the site locally to verify changes before pushing them.

**Requires:**
* [Ruby 2.1.0 or higher](https://www.ruby-lang.org/en/downloads/)
* [Bundler](https://bundler.io/) (run `gem install bundler`)

```
cd docs
bundle install
bundle exec jekyll serve # runs on http://127.0.0.1:4000/street-manager-docs/
```

## Run in devcontainer

Requires:
- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Visual Studio Code Remote - Containers extension](https://code.visualstudio.com/docs/remote/containers)

1. Open folder
2. Click bottom left corner and select "Remote-Containers: Open Folder in Container" (requires extension)
3. Wait for container to be built
4. Run task to launch Jekyll via `Terminal -> Run Task -> Jeykll`
5. Browse to http://localhost:4000
