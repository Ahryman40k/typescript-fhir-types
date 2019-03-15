
import * as t from 'io-ts';
import {RTTI_Meta, IMeta} from './RTTI_Meta';
import {RTTI_Element, IElement} from './RTTI_Element';
import {RTTI_Narrative, INarrative} from './RTTI_Narrative';
import { RTTI_ResourceList, IResourceList } from '../Union/RTTI_ResourceList';
import {RTTI_Extension, IExtension} from './RTTI_Extension';
import {RTTI_Identifier, IIdentifier} from './RTTI_Identifier';
import {RTTI_CodeableConcept, ICodeableConcept} from './RTTI_CodeableConcept';
import {RTTI_Reference, IReference} from './RTTI_Reference';
import {RTTI_Annotation, IAnnotation} from './RTTI_Annotation';
import {RTTI_List_Entry, IList_Entry} from './RTTI_List_Entry';

export enum ListStatusKind {
                current = 'current',
retired = 'retired',
enteredInError = 'enteredInError'
            }
export enum ListModeKind {
                working = 'working',
snapshot = 'snapshot',
changes = 'changes'
            }
const ListStatusKindKeys = t.keyof({
                [ListStatusKind.current]: null,
[ListStatusKind.retired]: null,
[ListStatusKind.enteredInError]: null
            });
const ListModeKindKeys = t.keyof({
                [ListModeKind.working]: null,
[ListModeKind.snapshot]: null,
[ListModeKind.changes]: null
            });


            export interface IList {
                
                    /**
                     * This is a List resource
                     */
                    resourceType: 'List';
                    
                
                    /**
                     * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                     */
                    id? : string;
                    

                    /**
                     * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                     */
                    meta? : IMeta;
                    

                    /**
                     * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                     */
                    implicitRules? : string;
                    

                    /**
                     * Extensions for implicitRules
                     */
                    _implicitRules? : IElement;
                    

                    /**
                     * The base language in which the resource is written.
                     */
                    language? : string;
                    

                    /**
                     * Extensions for language
                     */
                    _language? : IElement;
                    

                    /**
                     * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                     */
                    text? : INarrative;
                    

                    /**
                     * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                     */
                    // contained? : IResourceList[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                     */
                    extension? : IExtension[];
                    

                    /**
                     * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                     */
                    modifierExtension? : IExtension[];
                    

                    /**
                     * Identifier for the List assigned for business purposes outside the context of FHIR.
                     */
                    identifier? : IIdentifier[];
                    

                    /**
                     * Indicates the current state of this list.
                     */
                    status? : ListStatusKind;
                    

                    /**
                     * Extensions for status
                     */
                    _status? : IElement;
                    

                    /**
                     * How this list was prepared - whether it is a working list that is suitable for being maintained on an ongoing basis, or if it represents a snapshot of a list of items from another source, or whether it is a prepared list where items may be marked as added, modified or deleted.
                     */
                    mode? : ListModeKind;
                    

                    /**
                     * Extensions for mode
                     */
                    _mode? : IElement;
                    

                    /**
                     * A label for the list assigned by the author.
                     */
                    title? : string;
                    

                    /**
                     * Extensions for title
                     */
                    _title? : IElement;
                    

                    /**
                     * This code defines the purpose of the list - why it was created.
                     */
                    code? : ICodeableConcept;
                    

                    /**
                     * The common subject (or patient) of the resources that are in the list if there is one.
                     */
                    subject? : IReference;
                    

                    /**
                     * The encounter that is the context in which this list was created.
                     */
                    encounter? : IReference;
                    

                    /**
                     * The date that the list was prepared.
                     */
                    date? : string;
                    

                    /**
                     * Extensions for date
                     */
                    _date? : IElement;
                    

                    /**
                     * The entity responsible for deciding what the contents of the list were. Where the list was created by a human, this is the same as the author of the list.
                     */
                    source? : IReference;
                    

                    /**
                     * What order applies to the items in the list.
                     */
                    orderedBy? : ICodeableConcept;
                    

                    /**
                     * Comments that apply to the overall list.
                     */
                    note? : IAnnotation[];
                    

                    /**
                     * Entries in this list.
                     */
                    entry? : IList_Entry[];
                    

                    /**
                     * If the list is empty, why the list is empty.
                     */
                    emptyReason? : ICodeableConcept;
                    
            }
        


        export const RTTI_List: t.Type<IList> = t.recursion( 'IList', () =>
            t.intersection([
                
        t.type({
           resourceType: t.literal('List')
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
identifier: t.array(RTTI_Identifier),
status: ListStatusKindKeys,
_status: RTTI_Element,
mode: ListModeKindKeys,
_mode: RTTI_Element,
title: t.string,
_title: RTTI_Element,
code: RTTI_CodeableConcept,
subject: RTTI_Reference,
encounter: RTTI_Reference,
date: t.string,
_date: RTTI_Element,
source: RTTI_Reference,
orderedBy: RTTI_CodeableConcept,
note: t.array(RTTI_Annotation),
entry: t.array(RTTI_List_Entry),
emptyReason: RTTI_CodeableConcept
        })
        
            ])
        );
        

        