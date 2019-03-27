import * as t from 'io-ts';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Coding, ICoding } from './RTTI_Coding';
import { RTTI_instant } from '../Scalar/RTTI_instant';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_code } from '../Scalar/RTTI_code';
import { RTTI_base64Binary } from '../Scalar/RTTI_base64Binary';

export interface ISignature {
	/**
	 * An indication of the reason that the entity signed this document. This may be explicitly included as part of the signature information and can be used when determining accountability for various actions concerning the document.
	 */
	type: ICoding[];

	/**
	 * A reference to an application-usable description of the identity that signed  (e.g. the signature used their private key).
	 */
	who: IReference;

	/**
	 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
	 */
	id?: string;

	/**
	 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
	 */
	extension?: IExtension[];

	/**
	 * When the digital signature was signed.
	 */
	when?: string;

	/**
	 * Extensions for when
	 */
	_when?: IElement;

	/**
	 * A reference to an application-usable description of the identity that is represented by the signature.
	 */
	onBehalfOf?: IReference;

	/**
	 * A mime type that indicates the technical format of the target resources signed by the signature.
	 */
	targetFormat?: string;

	/**
	 * Extensions for targetFormat
	 */
	_targetFormat?: IElement;

	/**
	 * A mime type that indicates the technical format of the signature. Important mime types are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for a graphical image of a signature, etc.
	 */
	sigFormat?: string;

	/**
	 * Extensions for sigFormat
	 */
	_sigFormat?: IElement;

	/**
	 * The base64 encoding of the Signature content. When signature is not recorded electronically this element would be empty.
	 */
	data?: string;

	/**
	 * Extensions for data
	 */
	_data?: IElement;
}

export const RTTI_Signature: t.Type<ISignature> = t.recursion(
	'ISignature',
	() =>
		t.intersection([
			t.type({
				type: t.array(RTTI_Coding),
				who: RTTI_Reference
			}),
			t.partial({
				id: t.string,
				extension: t.array(RTTI_Extension),
				when: RTTI_instant,
				_when: RTTI_Element,
				onBehalfOf: RTTI_Reference,
				targetFormat: RTTI_code,
				_targetFormat: RTTI_Element,
				sigFormat: RTTI_code,
				_sigFormat: RTTI_Element,
				data: RTTI_base64Binary,
				_data: RTTI_Element
			})
		])
);
