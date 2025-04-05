import { Scope } from "../types/scope"
import type { BreadCrumbItem, SelectItem, PieItem, ResultItem } from ".."

const BREADCRUMB_ITEMS: Array<BreadCrumbItem> = [
	{ name: "Index", href: "/", onClick: () => null },
	{ name: "Books", href: "/", onClick: () => null },
	{
		name: "Lorem Ipsum",
		href: "/",
		isActive: true,
		onClick: () => null,
	},
]

const RESULT_ITEMS: Array<ResultItem> = [
	{ name: "First Item", icon: "bullseye" },
	{
		name: "Second Item",
		icon: "bell",
		description: "Nulla ultricies ultrices mauris, sed posuere justo ultrices in.",
	},
	{ name: "Separator", type: "separator" },
	{ name: "Disabled", isDisabled: false },
	{ name: "Checkbox", type: "checkbox", isActive: false, onClick: () => null },
	{
		name: "Checkbox Checked",
		type: "checkbox",
		isActive: true,
		onClick: () => null,
		description: "Nulla ultricies ultrices mauris, sed posuere justo ultrices in.",
	},
	{ name: "Random Item", icon: "person" },
	{ name: "Active Item", icon: "bell", isActive: true },
	{ name: "Lorem Ipsum Dolor Sit Ameta", icon: "x-x" },
]

const MARKDOWN: string = `# Donec vestibulum
## Nam porta, orci porta commodo
### Pellentesque eu est luctus
#### Nullam pulvinar convallis
##### Luctus sollicitudin ipsum
###### Aliquam erat volutpat

Praesent tincidunt elit ante, <a href="">sit amet aliquet nunc imperdiet</a> nec. In pulvinar volutpat lacus sed semper. Aliquam vulputate risus at lacinia aliquam.

|feature|description|
|--|--|
|calt|Contextual alternates|
|dlig|Discretionary Ligatures|

Mauris efficitur aliquam risus, id tempus quam pharetra vitae.

\`\`\`tsx
<Flex isCentered={true} gap={4}>
  <Dot size={8} color="blue"/>
  <Dot size={8} color="red"/>
</Flex>
\`\`\`

Integer leo est, lobortis at nulla at, tempus dignissim velit. ~~Suspendisse dignissim~~, ipsum sit amet rhoncus tristique, urna risus accumsan leo, ut \`auctor augue function() {}\` sit amet metus. Proin purus risus, tincidunt a est a, porttitor dignissim erat. Sed vitae varius urna, sed <mark>mark tincidunt neque</mark>. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

---

- First item
- Second item

Orci varius natoque penatibus et <a>magnis dis parturient</a> montes, nascetur ridiculus mus. Aenean varius non magna dapibus pharetra. Pellentesque eget sapien sit amet massa dapibus lacinia. Integer auctor pulvinar erat, non pharetra felis fermentum ac.

> Proin purus risus, ~~tincidunt~~ a est a, porttitor dignissim erat. Sed vitae varius urna, sed tincidunt neque. Aenean egestas molestie ante nec pellentesque. Donec massa diam, molestie ac gravida at, commodo et diam.

<small>
Phasellus tristique tortor sed malesuada aliquam. Quisque cursus sodales velit, eget condimentum erat accumsan a. Fusce feugiat felis eros, in dignissim arcu imperdiet non. Fusce tincidunt eu dolor vitae pulvinar. Quisque dignissim nibh erat, eu iaculis est maximus sit amet. Vestibulum id lobortis nisi, a maximus leo. Etiam mattis rhoncus felis id condimentum. Vivamus ut nisi non nunc sollicitudin consectetur at id nisl. Vivamus quis turpis a leo pellentesque interdum et id diam. Fusce egestas diam orci, ut volutpat diam semper nec. Pellentesque accumsan consequat erat, id mattis mi ultrices sit amet.
</small>
`

const TAB_ITEMS: Array<string> = ["First", "Second", "Third"]

const TAB_SECTIONS: Array<unknown> = ["1. Content", "2. Content", "3. Content"]

const PIE_ITEMS: Array<PieItem> = [
	{ name: "X", value: 24 },
	{ name: "First", value: 24 },
	{ name: "Second", value: 34 },
	{ name: "Third", value: 63 },
]

const SELECT_ITEMS: Array<SelectItem> = [
	{ name: "First", value: "first" },
	{ name: "Second", value: "second" },
]

export const SCOPE: Scope = {
	BREADCRUMB_ITEMS: BREADCRUMB_ITEMS,
	BUTTONGROUP_ALIGN: "left",
	CHECKBOX_LABEL: "Helium Enabled",
	CHILDREN: "Hello World",
	COLOR: "blue",
	COLOR_ACCENT: "purple",
	DATE: new Date().toISOString(),
	DATE_FORMAT: "YYYY-MM-DD",
	DONUT_SIZE: 48,
	EMPHASIS: "primary",
	FUNCTION: () => console.log(0),
	GAP: 8,
	HELPER_TEXT: "Learn this with love",
	ICON: "robot",
	ICON_ACCENT: "asterisk",
	INPUT_LABEL: "Helium Enabled",
	INTENT: "advise",
	INTENT_PARAGRAPH: "Offer guidance or recommendations based on expertise or experience, allowing for personal choice",
	INTENT_TITLE: "Advise",
	IS_ACTIVE: false,
	IS_CENTERED: false,
	IS_CHECKED: true,
	IS_COLUMN: true,
	IS_DISABLED: false,
	IS_LOADING: false,
	IS_NARROW: false,
	IS_OPEN: false,
	IS_ROUND: false,
	IS_ROUNDED: true,
	MARKDOWN,
	ON_RADIO_CHANGE: () => console.log(0),
	ON_SELECT_ITEM: (item: SelectItem) => console.log(item),
	ON_TEXTAREA_CHANGE: () => console.log(0),
	ON_TEXT_CHANGE: () => console.log(0),
	ON_TOGGLE_OPEN: () => console.log(0),
	PERCENTAGE: 49,
	PIE_ITEMS,
	PILL_LABEL: "Deployed",
	POSITION: "bottom-left",
	RADIO: "radio-state-01",
	RADIO_LABEL: "Atmosphere",
	RESULT_LIST_ITEMS: RESULT_ITEMS,
	SCALE: 24,
	SELECT_ITEMS,
	SIZE: "normal",
	TAB_ITEMS,
	TAB_SECTIONS,
	TEXTAREA: "Your Message",
	TEXTAREA_LABEL: "Your Message",
	TEXTAREA_PLACEHOLDER: "Your Message",
	TEXT_LABEL: "Email Address",
	TEXT_VALUE: "",
}
