
import * as t from 'io-ts';
import { RTTI_Meta, IMeta } from './RTTI_Meta';
import { RTTI_Element, IElement } from './RTTI_Element';
import { RTTI_Narrative, INarrative } from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import { RTTI_Extension, IExtension } from './RTTI_Extension';
import { RTTI_Identifier, IIdentifier } from './RTTI_Identifier';
import { RTTI_Reference, IReference } from './RTTI_Reference';
import { RTTI_UserSession_Status, IUserSession_Status } from './RTTI_UserSession_Status';
import { RTTI_UserSession_Context, IUserSession_Context } from './RTTI_UserSession_Context';




export interface IUserSession {

    /**
     * This is a UserSession resource
     */
    resourceType: 'UserSession';


    /**
     * A practitioner, patient, device, or related person engaged in the session.
     */
    user: IReference;


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
    contained? : IResourceList[];


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
     * Allows a service to provide a unique, business identifier for the session.
     */
    identifier?: IIdentifier;


    /**
     * Status of the session.
     */
    status?: IUserSession_Status;


    /**
     * Location that identifies the physical place at which the user's session is occurring. For the purposes of context synchronization, this is intended to represent the user's workstation.
     */
    workstation?: IIdentifier;


    /**
     * The current focus of the user's session. Common values are a reference to a Patient, Encounter, ImagingStudy, etc.
     */
    focus?: IReference[];


    /**
     * Indicates the timestamp when the user session was first created.
     */
    created?: string;


    /**
     * Extensions for created
     */
    _created?: IElement;


    /**
     * Indicates the timestamp when the user session will expire (i.e. no longer be valid).
     */
    expires?: string;


    /**
     * Extensions for expires
     */
    _expires?: IElement;


    /**
     * Provides additional information associated with the context.
     */
    context?: IUserSession_Context[];

}



export const RTTI_UserSession: t.Type<IUserSession> = t.recursion('IUserSession', () =>
    t.intersection([

        t.type({
            resourceType: t.literal('UserSession'),
            user: RTTI_Reference
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
            identifier: RTTI_Identifier,
            status: RTTI_UserSession_Status,
            workstation: RTTI_Identifier,
            focus: t.array(RTTI_Reference),
            created: t.string,
            _created: RTTI_Element,
            expires: t.string,
            _expires: RTTI_Element,
            context: t.array(RTTI_UserSession_Context)
        })

    ])
);


