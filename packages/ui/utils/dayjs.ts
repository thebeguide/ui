import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export const formatDate = (date?: string | null, format?: string): string => {
	if (!date || !format) return ""

	const formatted: string = dayjs(date).format(format)

	return formatted
}

export const getIsValid = (date?: string | null): boolean => {
	const parseDate = dayjs(date)
	const isValid: boolean = parseDate.isValid()

	return isValid
}

export const getFromNow = (date?: string | null): string => dayjs(date).fromNow()
