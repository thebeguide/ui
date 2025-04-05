import type { HeliosAttributeMeta } from "../.."
import type { TableProps } from "./Table.types"

export const meta: HeliosAttributeMeta<TableProps> = {
	_patterns: [
		{
			id: "ui-table-default",
			description: "default",
			content: `<Table>
  <tr>
		<th>Color Mode</th>
		<th>Description</th>
	</tr>
	<tr>
	<td>Display P3</td>
		<td>Wider color space than sRGB, more vibrant colors.</td>
	</tr>
	<tr>
		<td>HSL</td>
		<td>Defines colors by hue, saturation, and lightness.</td>
	</tr>
</Table>`,
		},
	],
	_status: "nominal",
	_category: "content",
	children: {
		type: "HeliosChildrenType",
	},
	hasBorder: {
		type: "boolean",
		isOptional: true,
	},
	isMonoHeader: {
		type: "boolean",
		isOptional: true,
	},
}
