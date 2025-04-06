import {
	COMPONENTS,
	type ThebeComponentStatusType,
	type ThebeComponentCategoryType,
	type ThebeColors,
	type ThebeIconType,
} from ".."

export const STATUS_COLORS: Record<ThebeComponentStatusType, ThebeColors> = {
	experimental: "pink",
	nominal: "gray",
	stable: "green",
	internal: "gray",
}

export const STATUS_ICONS: Record<ThebeComponentStatusType, ThebeIconType> = {
	experimental: "bolt",
	nominal: "bolt",
	stable: "check",
	internal: "bullseye",
}

export const STATUS_NAMES: Record<ThebeComponentStatusType, string> = {
	experimental: "Experimental",
	nominal: "Might Change",
	stable: "Stable",
	internal: "Internal",
}

export const TYPE_NAMES: Record<ThebeComponentCategoryType, string> = {
	content: "Content",
	pattern: "Pattern",
	core: "Core",
	layout: "Layout",
}

interface StatusReturnType {
	color: ThebeColors
	icon: ThebeIconType
	name: string
	status: ThebeComponentStatusType
}

export const getStatus = (component: string = "Example"): StatusReturnType => {
	const { _status } = COMPONENTS[component]
	const color = STATUS_COLORS[_status]
	const icon = STATUS_ICONS[_status]
	const name = STATUS_NAMES[_status]

	return {
		status: _status,
		color,
		icon,
		name,
	}
}
