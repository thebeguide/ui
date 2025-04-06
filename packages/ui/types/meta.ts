interface ThebeAttributeItem<T> {
	alias?: keyof T
	default?: number | string
	description?: string
	isOptional?: boolean
	type: string
}

export type ThebeComponentStatusType = "experimental" | "nominal" | "stable" | "internal"
export type ThebeComponentCategoryType = "core" | "layout" | "content" | "pattern"

export interface Pattern {
	id: string
	description: string
	content: string
}

export type ThebeAttributeMeta<T> = Record<keyof T, ThebeAttributeItem<T>> & {
	_category: ThebeComponentCategoryType
	_extends?: Array<string>
	_patterns: Array<Pattern>
	_status: ThebeComponentStatusType
	_type?: "composite" | "hoc"
}
