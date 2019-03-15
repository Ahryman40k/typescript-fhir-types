
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_CodeableConcept, ICodeableConcept } from './RTTI_CodeableConcept';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_DocumentManifest_Agent, IDocumentManifest_Agent } from './RTTI_DocumentManifest_Agent';
import { RTTI_DocumentManifest_Related, IDocumentManifest_Related } from './RTTI_DocumentManifest_Related';

export enum DocumentManifestStatusKind {
    current = 'current',
    superseded = 'superseded',
    enteredInError = 'enteredInError'
}
const DocumentManifestStatusKindKeys = t.keyof({
    [DocumentManifestStatusKind.current]: null,
    [DocumentManifestStatusKind.superseded]: null,
    [DocumentManifestStatusKind.enteredInError]: null
});


export interface IDocumentManifest {

    /**
     * This is a DocumentManifest resource
     */
    resourceType: 'DocumentManifest'


    /**
     * The list of Resources that consist of the parts of this manifest.
     */
    content: IReference[];


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
    // contained?: IResourceList[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
     */
    extension?: IExtension[];


    /**
     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: IExtension[];


    /**
     * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
     */
    masterIdentifier?: IIdentifier;


    /**
     * Other identifiers associated with the document manifest, including version independent  identifiers.
     */
    identifier?: IIdentifier[];


    /**
     * The status of this document manifest.
     */
    status?: DocumentManifestStatusKind;


    /**
     * Extensions for status
     */
    _status?: IElement;


    /**
     * The code specifying the type of clinical activity that resulted in placing the associated content into the DocumentManifest.
     */
    type?: ICodeableConcept;


    /**
     * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
     */
    subject?: IReference;


    /**
     * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
     */
    created?: string;


    /**
     * Extensions for created
     */
    _created?: IElement;


    /**
     * An actor taking an active role in the manifest.
     */
    agent?: IDocumentManifest_Agent[];


    /**
     * A patient, practitioner, or organization for which this set of documents is intended.
     */
    recipient?: IReference[];


    /**
     * Identifies the source system, application, or software that produced the document manifest.
     */
    source?: string;


    /**
     * Extensions for source
     */
    _source?: IElement;


    /**
     * Human-readable description of the source document. This is sometimes known as the "title".
     */
    description?: string;


    /**
     * Extensions for description
     */
    _description?: IElement;


    /**
     * Related identifiers or resources associated with the DocumentManifest.
     */
    related?: IDocumentManifest_Related[];

}



export const RTTI_DocumentManifest: t.Type<IDocumentManifest> = t.recursion('IDocumentManifest', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('DocumentManifest'),
            content: t.array(RTTI_Reference)
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
            // contained: t.array(RTTI_ResourceList),
            extension: t.array(RTTI_Extension),
            modifierExtension: t.array(RTTI_Extension),
            masterIdentifier: RTTI_Identifier,
            identifier: t.array(RTTI_Identifier),
            status: DocumentManifestStatusKindKeys,
            _status: RTTI_Element,
            type: RTTI_CodeableConcept,
            subject: RTTI_Reference,
            created: t.string,
            _created: RTTI_Element,
            agent: t.array(RTTI_DocumentManifest_Agent),
            recipient: t.array(RTTI_Reference),
            source: t.string,
            _source: RTTI_Element,
            description: t.string,
            _description: RTTI_Element,
            related: t.array(RTTI_DocumentManifest_Related)
        })

    ])
);


