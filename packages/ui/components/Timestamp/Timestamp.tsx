import { getIsValid, formatDate, getFromNow } from "../../utils/dayjs"
import type { FC } from "react"
import type { TimestampProps } from "./Timestamp.types"

export const Timestamp: FC<TimestampProps> = ({ date, fromNow, text, format = "MMMM D, YYYY" }) => {
	const fromNowDate = getFromNow(date)
	const isValid: boolean = getIsValid(date)
	const parsedIsoString: string = date && isValid ? new Date(Date.parse(date))?.toISOString() : ""

	const timestampDate: string = isValid ? parsedIsoString : ""
	const formattedDate: string = fromNow ? fromNowDate : formatDate(date, format)

	return (
		<time dateTime={timestampDate} suppressHydrationWarning={true}>
			{!!text && text}
			{formattedDate}
		</time>
	)
}
