
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Reference, IReference } from './RTTI_Reference';




export interface IBinary {

    /**
     * This is a Binary resource
     */
    resourceType: 'Binary';


    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
     */
    id?: string;


    /**
     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
     */
    meta?: IMeta;


    /**
     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;


    /**
     * Extensions for implicitRules
     */
    _implicitRules?: IElement;


    /**
     * The base language in which the resource is written.
     */
    language?: string;


    /**
     * Extensions for language
     */
    _language?: IElement;


    /**
     * MimeType of the binary content represented as a standard MimeType (BCP 13).
     */
    contentType?: string;


    /**
     * Extensions for contentType
     */
    _contentType?: IElement;


    /**
     * This element identifies another resource that can be used as a proxy of the security sensitivity to use when deciding and enforcing access control rules for the Binary resource. Given that the Binary resource contains very few elements that can be used to determine the sensitivity of the data and relationships to individuals, the referenced resource stands in as a proxy equivalent for this purpose. This referenced resource may be related to the Binary (e.g. Media, DocumentReference), or may be some non-related Resource purely as a security proxy. E.g. to identify that the binary resource relates to a patient, and access should only be granted to applications that have access to the patient.
     */
    securityContext?: IReference;


    /**
     * The actual content, base64 encoded.
     */
    data?: string;


    /**
     * Extensions for data
     */
    _data?: IElement;

}



export const RTTI_Binary: t.Type<IBinary> = t.recursion('IBinary', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('Binary')
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            contentType: t.string,
            _contentType: RTTI_Element,
            securityContext: RTTI_Reference,
            data: t.string,
            _data: RTTI_Element
        })

    ])
);


