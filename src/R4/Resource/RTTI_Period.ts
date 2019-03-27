import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_dateTime } from '../Scalar/RTTI_dateTime';
import { RTTI_Element, IElement } from './RTTI_Element';

export interface IPeriod {
	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
	 * The start of the period. The boundary is inclusive.
	 */
	start?: string;

	/**
	 * Extensions for start
	 */
	_start?: IElement;

	/**
	 * The end of the period. If the end of the period is missing, it means no end was known or planned at the time the instance was created. The start may be in the past, and the end date in the future, which means that period is expected/planned to end at that time.
	 */
	end?: string;

	/**
	 * Extensions for end
	 */
	_end?: IElement;
}

export const RTTI_Period: t.Type<IPeriod> = t.recursion('IPeriod', () =>
	t.partial({
		id: t.string,
		extension: t.array(RTTI_Extension),
		start: RTTI_dateTime,
		_start: RTTI_Element,
		end: RTTI_dateTime,
		_end: RTTI_Element
	})
);
