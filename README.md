# Specialist title logos

An image set of logos used by Specialist Titles (eg Investors Chronicle, Non-executive Directors' Club)

## Usage

As with all image sets, these are available via the [Image Service](https://www.ft.com/__origami/service/image/v2).

To get a logo from the Image Service, use the following URL (replace the `product_source` with your product name and `title_name` with the logo you want)

`https://www.ft.com/__origami/service/image/v2/images/raw/specialisttitle-v1:{title_name}?source={product_source}`

So to get the Non-executive Directors' Club:
`https://www.ft.com/__origami/service/image/v2/images/raw/specialisttitle-v1:ned-logo?source=test`

### Getting these images in a different colour/format/size

The Image Service will convert these images on the fly if you pass in the right parameters. To find out more about this, please see the [Image Service documentation](https://www.ft.com/__origami/service/image/v2/docs/api)

## Adding or modifying logos

To keep images consistent, please follow these guidelines:

- Logos must be SVG format
- Logos must be named as the title they represent. Filenames must be all lower-case hyphenated.
	- **good**: ned-logo.png, ic-logo.svg
	- **bad**: InvestorsChronicle-logo.png, logo.svg


**Please do not delete images without talking to the Origami team who will need to manage the deprecation process**

---
## Questions or comments?

Please [raise an issue](https://github.com/Financial-Times/origami-specialist-title-logos/issues), or Internal FT users can contact us via [#origami-support in Slack](https://financialtimes.slack.com/messages/origami-support/).

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
