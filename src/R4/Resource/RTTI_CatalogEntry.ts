
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_Period, IPeriod } from './RTTI_Period';
import { RTTI_CatalogEntry_RelatedEntry, ICatalogEntry_RelatedEntry } from './RTTI_CatalogEntry_RelatedEntry';
import { createEnumType } from '../../EnumType'

export enum CatalogEntryStatusKind {
    draft = 'draft',
    active = 'active',
    retired = 'retired',
    unknown = 'unknown'
}


export interface ICatalogEntry {

    /**
     * This is a CatalogEntry resource
     */
    resourceType: 'CatalogEntry';


    /**
     * The item in a catalog or definition.
     */
    referencedItem: IReference;


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
     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
     */
    text?: INarrative;


    /**
     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
     */
    contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * Used in supporting different identifiers for the same product, e.g. manufacturer code and retailer code.
     */
    identifier?: IIdentifier[];


    /**
     * The type of item - medication, device, service, protocol or other.
     */
    type?: ICodeableConcept;


    /**
     * Whether the entry represents an orderable item.
     */
    orderable?: boolean;


    /**
     * Extensions for orderable
     */
    _orderable?: IElement;


    /**
     * Used in supporting related concepts, e.g. NDC to RxNorm.
     */
    additionalIdentifier?: IIdentifier[];


    /**
     * Classes of devices, or ATC for medication.
     */
    classification?: ICodeableConcept[];


    /**
     * Used to support catalog exchange even for unsupported products, e.g. getting list of medications even if not prescribable.
     */
    status?: CatalogEntryStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * The time period in which this catalog entry is expected to be active.
     */
    validityPeriod?: IPeriod;


    /**
     * The date until which this catalog entry is expected to be active.
     */
    validTo?: string;


    /**
     * Extensions for validTo
     */
    _validTo?: IElement;


    /**
     * Typically date of issue is different from the beginning of the validity. This can be used to see when an item was last updated.
     */
    lastUpdated?: string;


    /**
     * Extensions for lastUpdated
     */
    _lastUpdated?: IElement;


    /**
     * Used for examplefor Out of Formulary, or any specifics.
     */
    additionalCharacteristic?: ICodeableConcept[];


    /**
     * User for example for ATC classification, or.
     */
    additionalClassification?: ICodeableConcept[];


    /**
     * Used for example, to point to a substance, or to a device used to administer a medication.
     */
    relatedEntry?: ICatalogEntry_RelatedEntry[];

}



export const RTTI_CatalogEntry: t.Type<ICatalogEntry> = t.recursion('ICatalogEntry', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('CatalogEntry'),
            referencedItem: RTTI_Reference
        })
        ,

        t.partial({
            id: t.string,
            meta: RTTI_Meta,
            implicitRules: t.string,
            _implicitRules: RTTI_Element,
            language: t.string,
            _language: RTTI_Element,
            text: RTTI_Narrative,
            contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            identifier: t.array(RTTI_Identifier),
            type: RTTI_CodeableConcept,
            orderable: t.boolean,
            _orderable: RTTI_Element,
            additionalIdentifier: t.array(RTTI_Identifier),
            classification: t.array(RTTI_CodeableConcept),
            status: createEnumType<CatalogEntryStatusKind>(CatalogEntryStatusKind, 'CatalogEntryStatusKind'),
            _status: RTTI_Element,
            validityPeriod: RTTI_Period,
            validTo: t.string,
            _validTo: RTTI_Element,
            lastUpdated: t.string,
            _lastUpdated: RTTI_Element,
            additionalCharacteristic: t.array(RTTI_CodeableConcept),
            additionalClassification: t.array(RTTI_CodeableConcept),
            relatedEntry: t.array(RTTI_CatalogEntry_RelatedEntry)
        })

    ])
);


