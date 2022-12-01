import { HTMLInputTypeAttribute } from "react"

interface TInput {
	title: String
	placeholder: HTMLInputTypeAttribute
	type: HTMLInputTypeAttribute
}

export function Input(props: TInput) {
	return (
		<label className="contacts__form__label">
			<span className="contacts__form__label__title">{props.title}</span>
			<input
				type={props.type}
				placeholder={props.placeholder}
				className="contacts__form__label__input"
				required
			/>
		</label>
	)
}
