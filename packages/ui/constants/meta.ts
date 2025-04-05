import {
	COMPONENTS,
	type HeliosComponentStatusType,
	type HeliosComponentCategoryType,
	type HeliosColors,
	type HeliosIconType,
} from ".."

export const STATUS_COLORS: Record<HeliosComponentStatusType, HeliosColors> = {
	experimental: "pink",
	nominal: "gray",
	stable: "green",
	internal: "gray",
}

export const STATUS_ICONS: Record<HeliosComponentStatusType, HeliosIconType> = {
	experimental: "bolt",
	nominal: "bolt",
	stable: "check",
	internal: "bullseye",
}

export const STATUS_NAMES: Record<HeliosComponentStatusType, string> = {
	experimental: "Experimental",
	nominal: "Might Change",
	stable: "Stable",
	internal: "Internal",
}

export const TYPE_NAMES: Record<HeliosComponentCategoryType, string> = {
	content: "Content",
	pattern: "Pattern",
	core: "Core",
	layout: "Layout",
}

interface StatusReturnType {
	color: HeliosColors
	icon: HeliosIconType
	name: string
	status: HeliosComponentStatusType
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
